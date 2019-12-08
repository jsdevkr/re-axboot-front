const fs = require('fs');

const dirs = fs.readdirSync(__dirname, { withFileTypes: true });
dirs
  .filter(dir => dir.isDirectory() && !dir.name.startsWith('.'))
  .forEach(dir => {
    // config.resolve.alias[dir.name] = path.join(__dirname, dir.name);

    console.log(`config.resolve.alias[${dir.name}] = path.join(__dirname, ${dir.name});`);
  });
