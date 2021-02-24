#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const chalk = require("chalk"); // 命令行输出样式美化
const commander = require("commander"); // 命令行工具
const inquirer = require("inquirer"); // 命令行交互
const checkDire = require("./utils/checkDire.js");
const { exec } = require("child_process");
const { version } = require("../package.json");
const { promptTypeList } = require("./config");

const log = console.log;

// version 检查版本号
commander
  .version(version, "-v, --version")
  .command("init <projectName>")
  .description("输入项目名称")
  .action(async (projectName, cmd) => {
    // 检查创建项目文件夹是否存在

    // cwd子进程的当前工作目录
    await checkDire(path.join(process.cwd(), projectName), projectName);

    inquirer.prompt(promptTypeList).then((res) => {
      const { url, gitName, val } = res.type;
      log("您选择的模版类型信息如下：" + val);
      log("项目初始化拷贝获取中...");

      if (!url) {
        log(chalk.red(`${val} 该类型暂不支持...`));
        process.exit(1);
      }

      exec("git clone " + url, function (error) {
        if (error !== null) {
          log(chalk.red(`clone fail,${error}`));
          return;
        }

        fs.rename(gitName,projectName,err => {
          if(err) {
            exec('rm -rf '+gitName, function (err, out) {});
            log(chalk.red(`The ${projectName} project template already exist`));
          } else {
            log(chalk.green(`✔ The ${projectName} project template successfully create(项目模版创建成功)`));

            log()
            log()
            log(chalk.cyan(` $ cd ${projectName}`))
            log(chalk.cyan(` $ npm install`))
            log(chalk.cyan(` $ npm run serve`))

          }
        })
      });
    });
  });

  commander.parse(process.argv);
