const testData = require('../../fixtures/entity/logincreds.json');
const soleData = require('../../fixtures/entity/soleProp.json')

export class LandingPage {
    constructor() {
       this.logInBtn = "#loginBtn > span",
       this.signInBtn = 'button#loginBtn',
       this.bcServiceCrad = 'div.v-list-item__title',
       this.userNameBtn = '#tile_btn_test_with_username_password_device_div_id',
       this.email = '#username',
       this.password = '#password',
       this.submitBtn = '#submit-btn',
       this.open = "button.action-btn",
       this.getStarted = "#get-started-button",
       this.regType = "#affiliated-entity-table > div > table > tbody > tr:nth-child(1) > td.business-type.base-table__item-cell > div:nth-child(3)",
       this.status = "#affiliated-entity-table > div > table > tbody > tr:nth-child(1) > td.business-status.base-table__item-cell > span",
       this.selectAccount = '.v-list-item--link .v-list-item__title',
       this.clickAccount = '[data-test="account-name"]',
       this.idirUsername='#user',
       this.idirPwd='#password',
       this.continueBtn='[name="btnSubmit"]',
       this.staffHeader='#app  h1',
       this.businessSearch='#txtBusinessNumber',
       this.search='[type="submit"]',
       this.staffDashboardAction ='#app  td:nth-child(5)  button',
       this.entityDashboard='[tabindex="0"][role="menuitem"]'
    }

    visit(url) {
        cy.visit(url)
    }

    verifyLanding (){
        cy.get(this.logInBtn).should('be.visible')
        cy.get(this.signInBtn).contains('Log in to my BC Registries Account').click()
        cy.get(this.bcServiceCrad).should ('be.visible')
        cy.get(this.bcServiceCrad).contains('BC Services Card').click()
    }

    logWithBCCard (){
        cy.get(this.userNameBtn).should('be.visible')
        cy.get(this.userNameBtn).click()
        cy.get(this.email).should('be.visible')
        cy.get(this.email).type(testData.username)
        cy.get(this.password).type(testData.Password)
        cy.get(this.submitBtn).click()
        cy.wait(10000)
        cy.get(this.open).eq(0).click({force: true})
        cy.get(this.getStarted).should('be.visible')
    }

    verifyTheNrIsSoleProp (){
        cy.get(this.regType).should('contain.text', soleData.regType)
        cy.get(this.status).should('contain.text', soleData.status)
    }

    changeAccount (){
    cy.wait(10000)
    cy.get('div.account-name').invoke('attr', 'style', 'display: block') .click({force: true}); 
    cy.get(this.selectAccount).eq(9) .click(); 
    }

    loginWithIdir (){
        cy.get(this.logInBtn).should('be.visible')
        cy.get(this.signInBtn).contains('Log in to my BC Registries Account').click()
        cy.get(this.bcServiceCrad).should ('be.visible')
        cy.get(this.bcServiceCrad).contains('IDIR').click()
        cy.wait(10000)
        cy.get(this.idirUsername).should('be.visible')
        cy.get(this.idirUsername).type(testData.idirUsername)
        cy.get(this.idirPwd).type(testData.idirPwd)
        cy.get(this.continueBtn).click({force:true})
    }

    verifyStaffDashboard (){
        cy.get(this.staffHeader).contains('Staff Dashboard')
        cy.get(this.businessSearch).type(testData.searchResult2)
        cy.get(this.search).click({force:true})
        cy.wait(10000)
        cy.get(this.staffDashboardAction).click({force:true})
        cy.get(this.entityDashboard).eq(0).click({force:true})
    }
}
export const loginPage = new LandingPage()