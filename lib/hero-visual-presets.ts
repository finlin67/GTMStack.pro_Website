export type HeroVisualPreset = {
  className?: string;
};

export const heroVisualPresets: Record<string, HeroVisualPreset> = {
  expertise: { className: "opacity-95" },
  industries: { className: "opacity-90" },
  projects: { className: "opacity-100" },
};

