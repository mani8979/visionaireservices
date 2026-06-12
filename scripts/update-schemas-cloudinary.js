const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'sanity', 'schemaTypes');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/type: 'image'/g, "type: 'cloudinary.asset'");
  content = content.replace(/options:\s*\{\s*hotspot:\s*true\s*\},?/g, '');
  fs.writeFileSync(filePath, content);
});
console.log('Schemas updated.');
