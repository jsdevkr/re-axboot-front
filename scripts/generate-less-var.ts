import * as path from "path";
import * as fs from "fs-extra";
import chalk from "chalk";
const srcPath = "../styles/theme.ts";
const srcResoloved = path.resolve(__dirname, srcPath);

const buildLessVar = () => {
  delete require.cache[srcResoloved];
  const theme = require(srcPath);

  const themePalette = Object.keys(theme.themePalette);

  themePalette.forEach((palette) => {
    const themeValue = theme.themePalette[palette];

    fs.writeFileSync(
      path.resolve(__dirname, `../styles/theme-${palette}.less`),
      Object.keys(themeValue)
        .map((k) => `@${k.replace(/_/g, "-")}: ${themeValue[k]};`)
        .join("\r\n")
    );
  });
};

// watch file theme.js to less-var
fs.watchFile(srcResoloved, { interval: 1000 }, (event: any, filename: any) => {
  try {
    buildLessVar();
    console.log(chalk.red("update LESS file : "));
  } catch (e) {
    console.log(chalk.bgRed(e));
  }
});
console.log(chalk.yellow.bold(`Watching theme files : `) + srcResoloved);

// build less vars
buildLessVar();
