require('dotenv').config({ path: require('path').join(__dirname, '.env') });

module.exports = {
  apps: [{
    name: 'faceid-kaisen',
    script: './app.js',
    cwd: __dirname,
    env: process.env
  }]
};
