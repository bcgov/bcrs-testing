// import './commands'

// Alternatively you can use CommonJS syntax:
require('./commands')
require('cypress-xpath')
require('cypress-plugin-tab')

Cypress.Cookies.defaults({
    preserve: ['FedAuth', 'rtFa', 'TSAUTHCOOKIE', 'authtoken', 'fpc', 'SignInStateCookie', 'CCState', 'buid']
});

// Prevent the clearing the local storage, this creates conflicts for tests
(Cypress).LocalStorage.clear = (keys, ls, rs) => {};
