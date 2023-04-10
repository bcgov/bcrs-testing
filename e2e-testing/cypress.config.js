const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '5vr1a5',
  defaultCommandTimeout: 100000,
  pageLoadTimeout: 200000,
  video: true,
  experimentalNetworkStubbing: true,
  chromeWebSecurity: false,
  //modifyObstructiveCode: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
