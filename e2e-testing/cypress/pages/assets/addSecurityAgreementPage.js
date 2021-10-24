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
            const element = '.actions > .container > .v-input > .v-input__control > .v-input__slot > .v-select__slot'
            cy.get(element).click()
            cy.log("Govt dropdown got clicked")

            const element1 = '#reg-type-drop-2'
            cy.wait(2000)
            cy.get(element1).click()
            cy.get(element1).trigger('mousedown')
            cy.log("Other Registrations dropdown got clicked")

            const element2 = '#reg-type-drop-3'
            cy.wait(2000)
            cy.get(element2).click()
            cy.wait(2000)
            cy.get(element2).trigger('mousedown')
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
            cy.get(element).trigger('mousedown')
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