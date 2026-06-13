const fs = require('fs');
const path = require('path');

const pages = {
  'architecture': {
    title: 'Architectures',
    description: 'Expert architectural design services in Visakhapatnam. We conceptualize and design residential and commercial spaces that are beautiful and highly functional.'
  },
  'constructions': {
    title: 'Constructions',
    description: 'Premium construction services in Visakhapatnam. Delivering high-quality residential, commercial, and industrial construction projects on time and within budget.'
  },
  'interiors': {
    title: 'Interiors',
    description: 'Luxury interior design services in Visakhapatnam. Transforming spaces with premium aesthetics, custom wardrobes, modular kitchens, and elegant furnishings.'
  },
  'false-ceiling': {
    title: 'False Ceiling',
    description: 'Professional false ceiling and gypsum ceiling installations in Visakhapatnam for modern homes and commercial spaces.'
  },
  'profile-lighting': {
    title: 'Profile Lighting',
    description: 'Innovative profile lighting and architectural lighting solutions in Visakhapatnam to elevate the mood and aesthetics of your space.'
  },
  'putty-painting': {
    title: 'Putty Painting',
    description: 'High-quality wall putty and painting services in Visakhapatnam. Achieve flawless finishes and vibrant colors for your interiors and exteriors.'
  }
};

for (const [dir, meta] of Object.entries(pages)) {
  const filePath = path.join(__dirname, 'src/app', dir, 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Remove the simple metadata we added earlier
    content = content.replace(/import \{ Metadata \} from 'next';\nexport const metadata: Metadata = \{ title: '.*?' \};\n\n/, '');
    
    const newMetadata = `import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${meta.title}',
  description: '${meta.description}',
  alternates: {
    canonical: 'https://visionaireservices.com/${dir}',
  },
  openGraph: {
    title: '${meta.title} | VISIONAIRE SERVICES',
    description: '${meta.description}',
    url: 'https://visionaireservices.com/${dir}',
  }
};

`;
    content = newMetadata + content;
    fs.writeFileSync(filePath, content);
    console.log(`Enhanced SEO metadata for ${dir}`);
  }
}
