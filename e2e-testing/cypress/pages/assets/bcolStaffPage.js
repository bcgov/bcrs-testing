/// <reference types="Cypress" />


export class BCOLStaffPage {

    constructor() {

        // BCOL Login

        this.loginButton = '#loginBtn'
        this.idirButton = '.v-list > :nth-child(3)'
        this.username = '#user'
        this.password = '#password'
        this.continueButton = 'input[type=submit]'


    }

    visit(url) {
        cy.visit(url)
    }

    idirLogin() {
        cy.get(this.loginButton).click()
        cy.wait(2000)
        cy.get(this.idirButton).click()
    //     cy.window().then((win) => {
    //     cy.spy(win, 'open').as('windowOpen');
    // });
        cy.wait(3000)
    

    }

    bcolStaffLogin(username,password){
        cy.get(this.username).type(username)
        cy.get(this.password).type(password)
        cy.get(this.continueButton).click()
        cy.log("BCSC login is successful")

    }


}
export const bcolStaffPage = new BCOLStaffPage()