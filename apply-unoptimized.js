const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const pages = [
  'architecture/ArchitectureClient.tsx',
  'constructions/ConstructionsClient.tsx',
  'interiors/InteriorsClient.tsx',
  'false-ceiling/FalseCeilingClient.tsx',
  'putty-painting/PuttyPaintingClient.tsx',
  'profile-lighting/page.tsx',
  'architecture/page.tsx',
  'constructions/page.tsx',
  'interiors/page.tsx',
  'false-ceiling/page.tsx',
  'putty-painting/page.tsx'
];

for (const p of pages) {
  const filePath = path.join(__dirname, 'src/app', p);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let changed = false;

    // Apply unoptimized to Image tags
    if (filePath.includes('Client') && content.includes('<Image ')) {
      content = content.replace(/<Image([^>]*?)>/g, (match, p1) => {
        if (!p1.includes('unoptimized')) {
          return `<Image${p1} unoptimized={true}>`;
        }
        return match;
      });
      // also replace self-closing if the regex didn't catch properly
      content = content.replace(/<Image([^>]*?)\/>/g, (match, p1) => {
        if (!p1.includes('unoptimized')) {
          return `<Image${p1} unoptimized={true} />`;
        }
        return match;
      });
      changed = true;
    }

    // Apply export const revalidate = 0 to page.tsx
    if (filePath.includes('page.tsx') && !content.includes('export const revalidate = 0;')) {
      content = content.replace(/export const dynamic = 'force-dynamic';/, "export const dynamic = 'force-dynamic';\nexport const revalidate = 0;");
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(filePath, content);
      console.log(`Patched ${p}`);
    }
  }
}
