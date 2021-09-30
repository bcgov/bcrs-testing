/// <reference types="Cypress" />

export class AddSecurityAgreementPage {

    constructor() {

        this.securityAgreement_SA = 'div#btn-security'
        this.repairersLein_RL = 'div#btn-reparers'
        this.marriageSeperationAgreement_FR = 'div#btn-marriage'
        this.landTaxDefermentLien_LT = 'div#btn-land'
        this.saleOfGoodsAct_SG = 'div#btn-sale'
        this.manufacturedHomeAct_MH = 'div#btn-mhl'
        this.forestryContractorLien_FL = 'div#btn-fcl'
        this.forestryContractorCharge_FA = 'div#btn-fcc'
        this.forestrySub_ContractorCharge_FS = 'div#btn-fsl'
        this.scrollDropdown = '.v-menu__content'

    }

    selectSecurityAgreementDropdown(user) {

        cy.log(user)

        if (user == 'bcsc') {
            const element = '#registration-more-actions-btn'
            cy.get(element).click()
            cy.log("Non Govt dropdown got clicked")
        }

        if (user == 'gov') {
            const element = '.actions > .container > .v-input > .v-input__control > .v-input__slot > .v-select__slot > #registrationTypeAhead'
            cy.get(element).click()
            cy.log("Govt dropdown got clicked")

            // const element1 = '#list-item-234-16 > .v-list-item__content > .row > .col-auto > .v-btn > .v-btn__content > .v-icon'
            // cy.wait(2000)
            // cy.get(element1).scrollIntoView({easing: 'swing'})
            // cy.get(element1).click()
            // cy.wait(1000)
            // cy.get(element1).click()
            // cy.log("Other Registrations dropdown got clicked")

            const element2 = '#list-item-234-18 > .v-list-item__content > .row > .col-auto > .v-btn > .v-btn__content > .v-icon'
            cy.wait(2000)
            //cy.get(element2).scrollIntoView({ offset: { top: 150, left: 0 } })
            cy.get(element2).click()
            cy.wait(2000)
            cy.get(element2).click()
            cy.log("Standard Registrations dropdown got clicked")
        }
    }

    selectStandardRegistrations(user, data) {
        if (user == 'bcsc') {
            const element = 'div:contains("' + data + '")'
            cy.get(element).click()
        }
        if (user == 'gov') {
            const element = 'span:contains("' + data + '")'
            cy.get(element).click()
        }

    }

    selectCrownChargeRegistrations(data) {

        const element = 'span:contains("' + data + '")'
        cy.get(element).click()

    }

    selectOtherRegistration(data) {

        const element = 'span:contains("' + data + '")'
        cy.get(element).click()

    }



}
export const addSecurityAgreementPage = new AddSecurityAgreementPage()