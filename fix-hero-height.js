const fs = require('fs');

const fixFile = (filePath) => {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Change the <section> and wrapper for fixed height and absolute position
  content = content.replace(
    /<section className="relative w-full flex flex-col bg-primary pt-24 md:pt-0">/,
    '<section className="relative h-[70vh] md:h-[85vh] w-full flex items-center justify-center overflow-hidden bg-primary pt-24 md:pt-0">'
  );

  content = content.replace(
    /<div className="w-full relative flex items-center justify-center">/,
    '<div className="absolute inset-0 z-0">'
  );

  // Replace Image width/height/sizes/style with fill
  content = content.replace(
    /width=\{0\}\s*height=\{0\}\s*sizes="100vw"\s*className="w-full h-auto max-h-\[80vh\] object-cover object-center"\s*style=\{\{ width: '100%', height: 'auto' \}\}/,
    'fill\n            className="object-cover object-center"'
  );

  // Fix overlay
  content = content.replace(
    /<div className="absolute inset-0 bg-primary\/40 hidden md:block"><\/div>/,
    '<div className="absolute inset-0 bg-primary/40"></div>'
  );

  // Make desktop text overlay responsive for all
  content = content.replace(
    /<div className="hidden md:flex absolute inset-0 z-10 items-center justify-center px-6 text-center">/,
    '<div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center">'
  );

  // Add mt-16 md:mt-0 to the h1 class to push text down from header on mobile
  content = content.replace(
    /className="text-4xl md:text-6xl lg:text-7xl font-serif text-secondary tracking-tight mb-6 leading-tight whitespace-pre-wrap"/,
    'className="text-4xl md:text-6xl lg:text-7xl font-serif text-secondary tracking-tight mb-6 leading-tight whitespace-pre-wrap mt-16 md:mt-0"'
  );

  // Remove the mobile block entirely
  content = content.replace(
    /\s*\{\/\* Mobile Text Below Image \*\/\}\s*<div className="md:hidden w-full px-6 py-12 text-center bg-secondary">[\s\S]*?<\/div>/,
    ''
  );

  fs.writeFileSync(filePath, content);
  console.log('Fixed ' + filePath);
};

['src/app/architecture/ArchitectureClient.tsx', 'src/app/constructions/ConstructionsClient.tsx'].forEach(fixFile);
