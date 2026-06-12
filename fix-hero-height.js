const fs = require('fs');
const path = require('path');

const directories = [
  'architecture',
  'constructions',
  'interiors',
  'false-ceiling',
  'profile-lighting',
  'putty-painting'
];

directories.forEach(dir => {
  const isHyphenated = dir.includes('-');
  const baseName = isHyphenated ? dir.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('') : dir.charAt(0).toUpperCase() + dir.slice(1);
  const clientFileName = `${baseName}Client.tsx`;
  const filePath = path.join(__dirname, 'src', 'app', dir, clientFileName);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Restore the Hero Section container to be h-[70vh] md:h-[80vh]
    content = content.replace(/<section className="relative w-full flex items-center justify-center bg-primary">/g, 
      '<section className="relative h-[70vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden bg-primary">');

    // Fix the Hero Image Wrapper to be absolute inset-0
    content = content.replace(/<div className="w-full h-auto relative flex">/g, 
      '<div className="absolute inset-0 z-0">');

    // Replace the image to use fill and object-contain
    // The image currently looks like:
    // <Image src={...} alt="..." width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="w-full h-auto object-contain..." priority />
    // We only want to replace the FIRST image (the hero image) in the file
    let imageReplaced = false;
    content = content.replace(/<Image\s+src=\{([^}]+)\}\s+alt="([^"]+)"\s+width=\{0\}\s+height=\{0\}\s+sizes="100vw"\s+style=\{\{\s*width:\s*'100%',\s*height:\s*'auto'\s*\}\}\s+className="w-full h-auto object-contain([^"]*)"([\s\S]*?)\/>/g, 
      (match, src, alt, classSuffix, rest) => {
        if (!imageReplaced && alt.toLowerCase().includes('hero')) {
          imageReplaced = true;
          return `<Image src={${src}} alt="${alt}" fill className="object-contain object-center"${rest}/>`;
        }
        return match;
      });

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${clientFileName}`);
  }
});
