
module.exports = (on, config) => {
  on('before:browser:launch', (browser, launchOptions) => {
    console.log('before launching browser')
    console.log(browser)

    // launchOptions.args = require('cypress-log-to-output').browserLaunchHandler(browser, launchOptions.args)

    if (browser.family === 'chromium' && browser.name !== 'electron') {
      // launchOptions.extensions.push(`${process.cwd()}/cypress/plugins/ignore-x-frame-headers`);
      // console.log(launchOptions.extensions)
    }

    return launchOptions
  })

  on('task', {
    log (message) {
      console.log(message)
      return null
    },
    bcscLogin ({ url, username, password }) {
      return (async () => {
        const BCSCLogin = require('../pages/thirdparty/bcscLogin')
        const bcscLogin = new BCSCLogin()
        await bcscLogin.init()
        await bcscLogin.open(url)
        await bcscLogin.login(username, password)
        // await bcscLogin.screenshot()
        const sessionItems = await bcscLogin.getSessionItems()
        await bcscLogin.close()
        return sessionItems
      })()
    }
  })
}

const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
module.exports = (on, config) => {
  on('task', {downloadFile})
}