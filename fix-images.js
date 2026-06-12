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

    // Fix Hero Section
    content = content.replace(/<section className="relative h-\[70vh\] md:h-\[80vh\] w-full flex items-center justify-center overflow-hidden">[\s\S]*?<div className="absolute inset-0 z-0">[\s\S]*?<Image[\s\S]*?fill[\s\S]*?className="object-cover object-center"[\s\S]*?\/>[\s\S]*?<div className="absolute inset-0 bg-primary\/[0-9]+"><\/div>[\s\S]*?<\/div>[\s\S]*?<div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">/gm, 
      `<section className="relative w-full flex items-center justify-center bg-primary">
        <div className="w-full h-auto relative flex">
          <Image
            src={data?.heroImageUrl || "/images/hero_architecture.png"}
            alt="Hero Image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-contain"
            style={{ width: '100%', height: 'auto' }}
            priority
          />
          <div className="absolute inset-0 bg-primary/40"></div>
          
          <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center">`);

    // Fix other sections using relative aspect-ratio boxes with fill
    // We will replace `aspect-square`, `aspect-[4/3]`, `fill`, `object-cover`
    
    content = content.replace(/className="lg:w-1\/2 relative aspect-square md:aspect-\[4\/3\] w-full"/g, 'className="lg:w-1/2 w-full h-fit relative rounded-sm overflow-hidden"');
    content = content.replace(/className="relative aspect-\[4\/3\] group overflow-hidden rounded-sm shadow-lg"/g, 'className="relative w-full h-fit group overflow-hidden rounded-sm shadow-lg"');
    
    // Replace <Image src={...} fill className="object-cover ..." />
    // with <Image src={...} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="..." />
    
    content = content.replace(/<Image src=\{([^}]+)\} alt="([^"]+)" fill className="object-cover([^"]*)" \/>/g, 
      '<Image src={$1} alt="$2" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="w-full h-auto object-contain$3" />');

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${clientFileName}`);
  }
});
