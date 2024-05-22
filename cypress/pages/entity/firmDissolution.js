const soleData = require('../../fixtures/entity/soleProp.json')
const generalPropData = require('../../fixtures/entity/generalProp.json')
const currentDay = new Date()
require('cypress-plugin-tab')
import {common} from './common'
import 'cypress-xpath';
export class FirmDissolution {
    constructor() {
        this.moreActions='#entity-menu button',
        this.dissolveBusiness='#dissolution-list-item',
        this.dialogTitle='#dialog-title',
        this.diaolgProceed='#dialog-proceed-button',
        this.dissolveDate='#date-text-field',
        this.selectDate='.v-date-picker-table',
        this.ok='#btn-done',
        this.chcekBx='[role="checkbox"]',
        this.regType=' tr:nth-child(1) > td.business-type.base-table__item-cell',
        this.status='tr:nth-child(1)  td.business-status.base-table__item-cell  span',
        this.fileAndPay='#file-pay-btn',
        this.filingHistoryList ='#filing-history-list  h3'
    }

    startDissolution(){
        cy.wait(10000)
        cy.get(this.moreActions).eq(2).click({force:true})
        cy.get(this.dissolveBusiness).click({force:true})
        cy.get(this.dialogTitle).contains(soleData.firmRegDetails.dissolution.dialogHeader)
        cy.get(this.diaolgProceed).click({force:true}).click({force:true})
    }

    dissolutionDate(){
        cy.wait(10000)
        cy.get(this.dissolveDate).click({force:true})
        cy.wait(1000)
       // cy.get(this.selectDate, currentDay).click({force:true})
       cy.get('.v-date-picker-table .v-btn:not([disabled])').first().click()
        cy.get(this.ok).click({force:true})    
    }

    certify(){
        cy.get(this.chcekBx).click({force:true})
        cy.get(this.fileAndPay).click({force:true})
    }

    verifyTheFilingIsCompleteAndDocuments (){
        //cy.reload()
        cy.get(this.filingHistoryList).eq(0).contains(soleData.firmRegDetails.dissolution.filingsHeader)
        cy.get(this.viewDocuments).eq(0).click({force:true})
        cy.get('div.documents-list button').each(($button) => {
            cy.wrap($button).click({force: true});
          });
    }

    verifyTheNrIsSoleProp() {
        cy.get(this.regType).should('contain.text', soleData.firmRegDetails.regType)
        cy.get(this.status).should('contain.text', soleData.firmRegDetails.dissolution.companyStatus)
    }

    verifyTheNrIsGeneralProp() {
        cy.get(this.regType).should('contain.text', generalPropData.firmRegDetails.regType)
        cy.get(this.status).should('contain.text', soleData.firmRegDetails.dissolution.companyStatus)
    }
    }

    export const firmDissolution = new FirmDissolution()
    