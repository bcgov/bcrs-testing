
const PuppeteerPageObject = require('./pageObject')

class BCSCLogin extends PuppeteerPageObject {
  constructor () {
    super()
    this.virturalCardOption = '#tile_virtual_device_div_id'
    this.userName = '#csn'
    this.passcode = '#passcode'
    this.continueButton = '#continue'
    this.submitButton = '#btnSubmit'
    this.confirmationButton = '[id="form_setConfirmation"] button'
    this.loginUserName = '.user-name'
  }

  async login (username, password) {
    await this.page.waitForSelector(this.virturalCardOption, { visible: true, timeout: 0 })
    await this.page.click(this.virturalCardOption)
    await this.page.waitForSelector(this.userName, { visible: true })
    await this.page.type(this.userName, username)
    await this.page.click(this.continueButton)
    await this.page.waitForSelector(this.passcode, { visible: true })
    await this.page.type(this.passcode, password)
    await this.page.click(this.submitButton)
    await this.page.waitForNavigation({ waitUntil: 'networkidle2' })
    await this.page.click(this.submitButton)
    await this.page.waitForNavigation({ waitUntil: 'networkidle2' })
  }

  async getSessionItems () {
    return await this.page.evaluate(() => {
      const json = {}
      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i)
        json[key] = sessionStorage.getItem(key)
      }
      return json
    })
  }
}

module.exports = BCSCLogin
