/*
 * @Author: huwanfei
 * @Date: 2021-02-24 15:06:19
 * @LastEditTime: 2021-04-07 10:36:01
 * @LastEditors: huwanfei
 * @Description:  配置文件
 * @FilePath: /rapid-cli/bin/config/index.js
 */
module.exports = {
  npmUrl: 'https://registry.npmjs.org/rapid-datav-cli',
  promptTypeList: [{
    type: 'list',
    message: '请选择拉取的模版类型:',
    name: 'type',
    choices: [
      {
        name: 'vue-visual-datav',
        value: {
          url: 'https://github.com/candy415/vue-datav.git',
          gitName: 'vue-datav',
          val: 'vue大屏模版'
        }
      },
      {
        name: 'vue-admin-element',
        value: {
          url: 'http://git.dev.wochanye.com/development-team/vue-admin.git',
          gitName: 'vue-admin',
          val: 'vue管理后台模版'
        }
      },
      {
        name: 'vue-uniapp',
        value: {
          url: 'http://git.dev.wochanye.com/development-team/uniapp.git',
          gitName: 'uniapp',
          val: 'uniapp模版'
        }
      },
      {
        name: 'vue-weapp',
        value: {
          url: 'https://github.com/candy415/weapp-template.git',
          gitName: 'weapp',
          val: '微信公众号模版'
        }
      }
    ]
  }]
}
