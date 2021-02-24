/*
 * @Author: huwanfei
 * @Date: 2021-02-24 15:10:21
 * @LastEditTime: 2021-02-24 15:19:43
 * @LastEditors: huwanfei
 * @Description:  检查创建项目文件夹是否存在
 * @FilePath: /quick-cli/bin/utils/checkDire.js
 */
const fs = require('fs');
const chalk = require('chalk');

module.exports = function (dir,name) {
  let isExists = fs.existsSync(dir);
  if (isExists) {
    console.log(chalk.red(
      `The ${name} project already exists in  directory. Please try to use another projectName`
    ));
    process.exit(1); // 存在则跳出
  }
};