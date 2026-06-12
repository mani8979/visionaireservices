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

    // Replace the entire Hero section precisely
    content = content.replace(/<section className="relative h-\[70vh\] md:h-\[80vh\] w-full flex items-center justify-center overflow-hidden bg-primary">([\s\S]*?)<\/section>/, 
      (match, innerContent) => {
        const titleMatch = innerContent.match(/<motion\.h1[\s\S]*?>[\s\S]*?<\/motion\.h1>/);
        const titleCode = titleMatch ? titleMatch[0] : '';
        
        const srcMatch = innerContent.match(/src=\{([^}]+)\}/);
        const src = srcMatch ? srcMatch[1] : `data?.heroImageUrl || "/images/hero_architecture.png"`;
        
        return `
      <section className="relative w-full flex flex-col bg-primary pt-24 md:pt-0">
        <div className="w-full relative flex items-center justify-center">
          <Image 
            src={${src}} 
            alt="Hero Image" 
            width={0} 
            height={0} 
            sizes="100vw" 
            className="w-full h-auto max-h-[80vh] object-contain object-center"
            style={{ width: '100%', height: 'auto' }}
            priority
          />
          <div className="absolute inset-0 bg-primary/40 hidden md:block"></div>
          
          {/* Desktop Text Overlay */}
          <div className="hidden md:flex absolute inset-0 z-10 items-center justify-center px-6 text-center">
            ${titleCode}
          </div>
        </div>
        
        {/* Mobile Text Below Image */}
        <div className="md:hidden w-full px-6 py-12 text-center bg-secondary">
          ${titleCode.replace(/text-secondary/g, 'text-primary')}
        </div>
      </section>`.trim();
      });

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${clientFileName}`);
  }
});
