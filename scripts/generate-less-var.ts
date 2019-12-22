const path = require("path");
const fs = require("fs-extra");
const chalk = require("chalk");
const srcPath = "../styles/colors.ts";
const srcResoloved = path.resolve(__dirname, srcPath);
const targetLess = path.resolve(__dirname, "../styles/less/theme-vars.less");

const buildLessVar = () => {
  delete require.cache[srcResoloved];
  const colors = require(srcPath);
  fs.writeFileSync(
    targetLess,
    Object.keys(colors.default.lightColor)
      .map(k => `@${k.replace(/_/g, "-")}: ${colors.default.lightColor[k]};`)
      .join("\r\n")
  );
};

// watch file theme.js to less-var
fs.watchFile(srcResoloved, { interval: 1000 }, (event: any, filename: any) => {
  try {
    buildLessVar();
    console.log(chalk.red("update LESS file : ") + targetLess);
  } catch (e) {
    console.log(chalk.bgRed(e));
  }
});
console.log(chalk.yellow.bold(`Watching theme files : `) + srcResoloved);

// build less vars
buildLessVar();
