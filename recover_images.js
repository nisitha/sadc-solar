const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dataFile = 'd:/Antigravity Project/sadc/frontend/src/data/wp-data.json';
const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

const publicUploads = 'd:/Antigravity Project/sadc/frontend/public/uploads';
const wpContentUploads = 'd:/Antigravity Project/sadc/wp-content/uploads';

const recoveredPaths = new Map();

const cleanName = (name) => {
  return name.toLowerCase()
    .replace(/@2x|@\./g, '')
    .replace(/[^a-z0-9.]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/-\./g, '.');
};

const recoverImage = (relPath) => {
  if (!relPath.startsWith('/uploads/')) return relPath;
  if (recoveredPaths.has(relPath)) return recoveredPaths.get(relPath);

  const cleanRelPath = relPath.replace('/uploads/', '');
  const dir = path.dirname(cleanRelPath);
  const ext = path.extname(cleanRelPath);
  const baseName = path.basename(cleanRelPath, ext);

  const targetDir = path.join(publicUploads, dir);
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

  const targetCleanName = cleanName(baseName) + '.webp';
  const targetPath = path.join(targetDir, targetCleanName);
  const targetPublicPath = '/uploads/' + path.posix.join(dir, targetCleanName);

  if (fs.existsSync(targetPath)) {
    recoveredPaths.set(relPath, targetPublicPath);
    return targetPublicPath;
  }

  const sourceDir = path.join(wpContentUploads, dir);
  if (fs.existsSync(sourceDir)) {
    const files = fs.readdirSync(sourceDir);
    
    const candidates = [
      baseName,
      baseName.replace(/@2x|@\./g, ''),
      baseName.replace(/-300x188|-300x161|-150x150|-1024x598/g, '') // strip potential dimensions
    ];

    let foundFile = null;
    for (const cand of candidates) {
      const match = files.find(f => path.basename(f, path.extname(f)) === cand);
      if (match) {
        foundFile = match;
        break;
      }
    }

    if (foundFile) {
      const sourcePath = path.join(sourceDir, foundFile);
      console.log(`Recovering: ${relPath} from ${sourcePath}`);
      try {
        // Simple ffmpeg command
        execSync(`ffmpeg -i "${sourcePath}" "${targetPath}" -y`, { stdio: 'ignore' });
        recoveredPaths.set(relPath, targetPublicPath);
        return targetPublicPath;
      } catch (e) {
        console.error(`Failed to convert ${sourcePath}`);
      }
    }
  }

  return relPath;
};

const processContent = (content) => {
  if (typeof content !== 'string') return content;
  const srcRegex = /src="(\/uploads\/[^"]+)"/g;
  return content.replace(srcRegex, (match, src) => {
    const recovered = recoverImage(src);
    return `src="${recovered}"`;
  });
};

data.products.forEach(p => {
  if (p.imageUrl) p.imageUrl = recoverImage(p.imageUrl);
  if (p.content) p.content = processContent(p.content);
});

fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
console.log('Recovery complete.');
