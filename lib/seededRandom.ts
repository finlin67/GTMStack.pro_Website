export function xmur3(str: string): () => number {
  let h = 1779033703 ^ str.length
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353)
    h = (h << 13) | (h >>> 19)
  }
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507)
    h = Math.imul(h ^ (h >>> 13), 3266489909)
    return (h ^= h >>> 16) >>> 0
  }
}

export function mulberry32(a: number): () => number {
  return function () {
    let t = (a += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export interface SeededRandom {
  rand: () => number
  randInt: (min: number, max: number) => number
  randFloat: (min: number, max: number) => number
  randChoice: <T>(arr: T[]) => T
  randShuffle: <T>(arr: T[]) => T[]
}

export function createSeededRandom(seed: string): SeededRandom {
  const seedFn = xmur3(seed)
  const rand = mulberry32(seedFn())

  return {
    rand,
    randInt: (min: number, max: number) => Math.floor(rand() * (max - min + 1)) + min,
    randFloat: (min: number, max: number) => rand() * (max - min) + min,
    randChoice: <T>(arr: T[]) => arr[Math.floor(rand() * arr.length)],
    randShuffle: <T>(arr: T[]) => {
      const result = [...arr]
      for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1))
        ;[result[i], result[j]] = [result[j], result[i]]
      }
      return result
    },
  }
}
