import fs from "node:fs";

import path from "node:path";



const root = process.cwd();

const baseDir = path.join(root, "public", "lottie");

const outFile = path.join(root, "lib", "hero-visual-manifest.ts");



function walk(dir) {

  if (!fs.existsSync(dir)) return [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  const files = [];

  for (const e of entries) {

    const full = path.join(dir, e.name);

    if (e.isDirectory()) files.push(...walk(full));

    else if (e.isFile() && e.name.toLowerCase().endsWith(".json")) files.push(full);

  }

  return files;

}



const jsonFilesAbs = walk(baseDir).sort((a, b) => a.localeCompare(b));



function toPublicSrc(absPath) {

  // Convert absolute path like .../public/lottie/ae/foo.json into /lottie/ae/foo.json

  const relFromPublic = absPath.split(path.sep + "public" + path.sep)[1];

  return "/" + relFromPublic.replaceAll(path.sep, "/");

}



function item(absPath) {

  return { type: "lottie", src: toPublicSrc(absPath) };

}



const expertise = [];

const industries = [];

const projects = [];

const misc = [];



for (const abs of jsonFilesAbs) {

  const file = path.basename(abs).toLowerCase();

  if (file.startsWith("expertise-") || file.startsWith("exp-")) expertise.push(item(abs));

  else if (file.startsWith("industry-") || file.startsWith("ind-")) industries.push(item(abs));

  else if (file.startsWith("project-") || file.startsWith("case-") || file.startsWith("cs-"))

    projects.push(item(abs));

  else misc.push(item(abs));

}



// If a bucket is empty, fall back to misc; if misc is empty, fall back to everything.

const all = jsonFilesAbs.map(item);

const safeMisc = misc.length ? misc : all;



const finalExpertise = expertise.length ? expertise : safeMisc;

const finalIndustries = industries.length ? industries : safeMisc;

const finalProjects = projects.length ? projects : safeMisc;



const ts = `export const heroVisualManifest = {

  expertise: ${JSON.stringify(finalExpertise, null, 2)},

  industries: ${JSON.stringify(finalIndustries, null, 2)},

  projects: ${JSON.stringify(finalProjects, null, 2)},

} as const

`;



fs.mkdirSync(path.dirname(outFile), { recursive: true });

fs.writeFileSync(outFile, ts, "utf8");



console.log("Wrote:", outFile);

console.log("Total JSON files:", jsonFilesAbs.length);

console.log("expertise:", finalExpertise.length);

console.log("industries:", finalIndustries.length);

console.log("projects:", finalProjects.length);

console.log("misc:", misc.length);

console.log("baseDir:", baseDir);


