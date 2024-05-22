const fs = require('fs-extra')
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

  on('task', {
      getPdfContents(pdfName) {
          return parsePdf2(pdfName);
      }
  });
  on('task', {
      countFiles() {
          return new Promise((resolve, reject) => {
              fs.readdir(path.join(__dirname, '..', 'downloads'), (err, files) => {
                  if (err) {
                      return reject(err)
                  }
                  resolve(files);
              })
          })
      },
  });
  on('task', {
    deleteDownloadsFolder() {
        return new Promise((resolve, reject) => {
            fs.remove(path.join(__dirname, 'e2e-testing/cypress/downloads'))
                .then(() => {
                    resolve(null);
                })
                .catch((err) => {
                    console.error(err);
                    reject(err);
                });
        });
    },
});
}

const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
module.exports = (on, config) => {
  on('task', {downloadFile})
}