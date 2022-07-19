require('cypress-downloadfile/lib/downloadFileCommand')

Cypress.Commands.add('bcscLogin', (url, username, password) => {
  cy.task('bcscLogin', { url: url, username: username, password: password }, { timeout: 60000 }).then(sessionItems => {
    Object.keys(sessionItems).forEach(key => {
      sessionStorage.setItem(key, sessionItems[key])
    })
  })
})

Cypress.Commands.add('authReset', (url) => {
  cy.request({
    method: 'POST',
    url: url,
    auth: {
      bearer: window.sessionStorage.getItem('KEYCLOAK_TOKEN')
    },
    timeout: 60000
  }).then((response) => {
    expect(response.status).to.eq(204)
    console.log(JSON.stringify(response))
  })
})

Cypress.Commands.add('setupDate', (url, identifier, legalType) => {
  cy.fixture('entity/' + identifier + '.xls').then((file) => {
    cy.request({
      method: 'POST',
      url: url + '/api/fixture/import/' + legalType,
      body: file,
      timeout: 120000
    }).then((response) => {
      console.log(JSON.stringify(response))
    })
  })
})

Cypress.Commands.add('resetData', (url, identifier) => {
  cy.request({
    method: 'DELETE',
    url: url + '/api/fixture/delete/' + identifier,
    timeout: 120000
  }).then((response) => {
    console.log(JSON.stringify(response))
  })
})
