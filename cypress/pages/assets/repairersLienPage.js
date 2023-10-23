/// <reference types="Cypress" />

const log = require("log");
const dayjs = require("dayjs");

export class RepairersLienPage {


    constructor() {

        this.lienAmount = '#lien-amount'
        this.surrenderDate = '#date-text-field'
        this.dateOkButton = '.v-picker__actions > :nth-child(2)'
        this.clickOkButton = '#btn-done'
    }

    setLienAmount(data){
        cy.get(this.lienAmount).type(data)
        cy.log("Entered Lien Amount")
    }

    setSurrenderDate(){

        cy.get(this.surrenderDate).click()
        const todaysDate = dayjs().format("D");
        cy.log(todaysDate);
        const element = 'td > button:contains('+todaysDate+')'
        cy.get(element).should('be.visible').first().click()
        cy.get(this.clickOkButton).click()
        cy.log("Surrender Date got selected")
   
    }

    clickDateOkButton(){
        cy.get(this.dateOkButton).click()
        cy.log("Ok button got clicked")
    }




}

export const repairersLienPage = new RepairersLienPage()