const fs = require('fs');
const path = require('path');

const env = {};
try {
  const lines = fs.readFileSync(path.join(__dirname, '.env'), 'utf8').split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const idx = trimmed.indexOf('=');
    if (idx < 0) continue;
    const key = trimmed.slice(0, idx).trim();
    let val = trimmed.slice(idx + 1).trim();
    if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1).replace(/\\n/g, '\n');
    else if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
    env[key] = val;
  }
} catch (e) {
  console.error('Failed to load .env:', e.message);
}

module.exports = {
  apps: [{
    name: 'faceid-kaisen',
    script: './app.js',
    cwd: __dirname,
    env
  }]
};
