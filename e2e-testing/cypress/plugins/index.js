const {LoginToApp} = require("./login");
const path = require('path')
const fs = require("fs");
const {Cookie} = require("playwright-chromium");
let PDFExtract = require('../../node_modules/pdf.js-extract/lib').PDFExtract;
let pdfExtract = new PDFExtract();

const parsePdf2 = async (pdfName) => {
    let data_local = [];
    return new Promise((resolve, reject) => {
        pdfExtract.extract(pdfName, {} /* options*/, function (err, data) {
            if (err) return console.log(err);
            data.pages.forEach((page)=>{
                let lines_page1 = PDFExtract.utils.pageToLines(page, 2);
                let rows = PDFExtract.utils.extractTextRows(lines_page1);
                data_local.push(rows);
            });
            resolve(data_local);
        });
    });
}


module.exports = (on, config) => {
    on('before:browser:launch', (browser, launchOptions) => {
        console.log('before launching browser')
        console.log(browser)
        const downloadDirectory = path.join(__dirname, '..', 'downloads')
        if (browser.family === 'chromium' && browser.name !== 'electron') {
            // launchOptions.extensions.push(`${process.cwd()}/cypress/plugins/ignore-x-frame-headers`);
            // console.log(launchOptions.extensions)
            launchOptions.preferences.default['profile'] = {
                default_content_setting_values: {
                    automatic_downloads: 1,
                    plugins: 5
                }
            }
            launchOptions.preferences.default['download'] = {default_directory: downloadDirectory}
        }

        return launchOptions
    })

    on('task', {
        log(message) {
            console.log(message)
            return null
        },
        bcscLogin({url, username, password}) {
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
    on('task', {LoginToApp});
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
                fs.rmdir(path.join(__dirname, '..', 'downloads'), {maxRetries: 10, recursive: true}, (err) => {
                    if (err) {
                        console.error(err)
                        return reject(err)
                    }
                    resolve(null)
                })
            })
        }
    })
}
