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

    // 1. Fix the Hero Section container
    content = content.replace(/className="relative h-\[70vh\] md:h-\[80vh\] w-full flex items-center justify-center overflow-hidden"/g, 
      'className="relative w-full flex items-center justify-center bg-primary"');

    // 2. Fix the Hero Image Wrapper
    content = content.replace(/<div className="absolute inset-0 z-0">/g, 
      '<div className="w-full h-auto relative flex">');

    // 3. Fix the Hero Text Wrapper
    content = content.replace(/<div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">/g, 
      '<div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center">');
      
    // Remove mt-20 from text wrappers that don't have exactly the string above
    content = content.replace(/className="relative z-10 text-center px-6 max-w-5xl mx-auto[^"]*"/g, 
      'className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center"');

    // 4. Fix other image containers (remove aspect ratios)
    content = content.replace(/className="lg:w-1\/2 relative aspect-square md:aspect-\[4\/3\] w-full"/g, 
      'className="lg:w-1/2 w-full h-fit relative rounded-sm overflow-hidden"');
      
    content = content.replace(/className="relative aspect-\[4\/3\] group overflow-hidden rounded-sm shadow-lg"/g, 
      'className="relative w-full h-fit group overflow-hidden rounded-sm shadow-lg"');

    // 5. Replace `fill` with `width/height` logic on all Images
    // We will do a generic replacement for Images using fill and object-cover
    content = content.replace(/<Image\s+src=\{([^}]+)\}\s+alt="([^"]+)"\s+fill\s+className="object-cover([^"]*)"(.*?)\/>/gs, 
      (match, src, alt, classSuffix, rest) => {
        return `<Image src={${src}} alt="${alt}" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="w-full h-auto object-contain${classSuffix}"${rest}/>`;
      });

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${clientFileName}`);
  }
});
