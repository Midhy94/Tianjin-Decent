import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name === '.DS_Store') continue;
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

export function syncAssets() {
  const srcAssets = path.join(rootDir, 'src/assets');
  const publicSrcAssets = path.join(rootDir, 'public/src/assets');
  const publicAssets = path.join(rootDir, 'public/assets');

  console.log('[sync-assets] Syncing assets from src/assets to public directories...');
  copyDirRecursive(srcAssets, publicSrcAssets);
  copyDirRecursive(srcAssets, publicAssets);
  console.log('[sync-assets] Asset sync complete.');
}

// Run immediately if executed directly
if (process.argv[1] === __filename) {
  syncAssets();
}
