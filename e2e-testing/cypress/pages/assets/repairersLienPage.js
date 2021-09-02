/// <reference types="Cypress" />

const log = require("log");

export class RepairersLienPage {


    constructor() {

        this.lienAmount = '#lien-amount'
        this.surrenderDate = '#date-text-field'
        this.dateOkButton = '.v-picker__actions > :nth-child(2)'
    }

    setLienAmount(data){
        cy.get(this.lienAmount).type(data)
        cy.log("Entered Lien Amount")
    }

    setSurrenderDate(data){
        cy.wait(2000)
        cy.get(this.surrenderDate).click()
        cy.wait(2000)
        const element = 'button:contains("'+data+'")'
        cy.get(element).click()
        cy.log("Surrender Date got selected")
    }

    clickDateOkButton(){
        cy.get(this.dateOkButton).click()
        cy.log("Ok button got clicked")
    }




}

export const repairersLienPage = new RepairersLienPage()