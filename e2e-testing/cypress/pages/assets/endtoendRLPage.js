/// <reference types="Cypress" />

const dayjs = require('dayjs')

export class EndToEndRLPage {

    constructor() {

        //Secured Parties

        this.securedPartiesTitle = 'h3:contains("Secured Parties")'
        this.individualPersonName = '.secured-party-summary > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > .list-item__title'
        this.individualPartyAddress = '.secured-party-summary > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(2)'
        this.individualPartyEmail = '.secured-party-summary > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(3)'
        this.individualBusinessName = '.secured-party-summary > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > .list-item__title'
        this.individualBusinessAddress = '.secured-party-summary > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > :nth-child(2)'
        this.individualBusinessEmail = '.secured-party-summary > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > :nth-child(3)'

        //Debtors

        this.debtorTitle = 'h3:contains("Debtors")'
        this.individualDebtorName = '.debtor-summary > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > .list-item__title'
        this.individualDebtorAddress = '.debtor-summary > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(2)'
        this.individualDebtorEmail = '.debtor-summary > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(3)'
        this.individualDebtorBirthdate = '.debtor-summary > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(4)'
        this.businessDebtorName = '.debtor-summary > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > .list-item__title'
        this.businessDebtorAddress = '.debtor-summary > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > :nth-child(2)'
        this.businessDebtorEmail = '.debtor-summary > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > :nth-child(3)'

        //RL Amendment Collateral

        this.step3Title = '#collateral-summary > .summary-header'
        this.amendVehicleType1 = ':nth-child(1) > .pl-4'
        this.amendVehicleYear1 = 'td:contains("2019")'
        this.amendVehicleMake1 = 'td:contains("KAWASAKI")'
        this.amendVehicleModel1 = 'td:contains("JETSKI")'
        this.amendVehicleSerialNumber1 = ':nth-child(1) > .vehicle-cell'
        this.amendVehicleType2 = ':nth-child(2) > .pl-4'
        this.amendVehicleYear2 = 'td:contains("2020")'
        this.amendVehicleMake2 = 'td:contains("GMC")'
        this.amendVehicleModel2 = 'td:contains("SIERRA 1500")'
        this.amendVehicleSerialNumber2 = ':nth-child(2) > .vehicle-cell'


        //RL Discharge & Amendment
        //Amount and Date of surrender

        this.step1Title = '#length-trust-summary > .summary-header'
        this.registrationLength = '#registration-length'
        this.amountofLien = ':nth-child(2) > .summary-text'
        this.surrenderDate = ':nth-child(3) > .summary-text'

        this.step2Title = 'label:contains("Registering Party, Secured Parties, and Debtors")'
        this.registeringPartyTitle = 'h3:contains("Original Registering Party")'
        this.registeringPartyName = '.container.pt-4 > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > .party-row > .list-item__title'
        this.registeringPartyAddress = '.container.pt-4 > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > .party-row > :nth-child(2)'

        //RL Renewal

        this.step3CollateralTitle = '#collateral-summary > .summary-header > .pa-2'
        this.vehicleCollateralTitle = '.container > .row > .pt-4'
        this.vehicleType1 = ':nth-child(1) > .summary-cell'
        this.vehicleYear1 = 'td:contains("2019")'
        this.vehicleMake1 = 'td:contains("KAWASAKI")'
        this.vehicleModel1 = 'td:contains("JETSKI")'
        this.vehicleSerialNumber1 = ':nth-child(1) > .vehicle-cell'
        this.vehicleType2 = ':nth-child(2) > .summary-cell'
        this.vehicleYear2 = 'td:contains("2020")'
        this.vehicleMake2 = 'td:contains("GMC")'
        this.vehicleModel2 = 'td:contains("SIERRA 1500")'
        this.vehicleSerialNumber2 = ':nth-child(2) > .vehicle-cell'

        this.removeFromTable = '.TableRow_remove-btn_1a8lM'


    }

    verifySecuredParties(data) {
        cy.get(this.securedPartiesTitle).should('have.text', data.securedPartiesTitle)
        cy.get(this.individualPersonName).should('have.text', data.individualPersonName)
        cy.get(this.individualPartyAddress).should('have.text', data.individualPartyAddress)
        cy.get(this.individualPartyEmail).should('have.text', data.individualPartyEmail)
        cy.get(this.individualBusinessName).should('have.text', data.individualBusinessName)
        cy.get(this.individualBusinessAddress).should('have.text', data.individualBusinessAddress)
        cy.get(this.individualBusinessEmail).should('have.text', data.individualBusinessEmail)
        cy.log("Verified Secured Parties")
    }

    verifyDebtors(data) {
        cy.get(this.debtorTitle).should('have.text', data.debtorTitle)
        cy.get(this.individualDebtorName).should('have.text', data.individualDebtorName)
        cy.get(this.individualDebtorAddress).should('have.text', data.individualDebtorAddress)
        cy.get(this.individualDebtorEmail).should('have.text', data.individualDebtorEmail)
        cy.get(this.individualDebtorBirthdate).should('not.be.empty')
        cy.get(this.businessDebtorName).should('have.text', data.businessDebtorName)
        cy.get(this.businessDebtorAddress).should('have.text', data.businessDebtorAddress)
        cy.get(this.businessDebtorEmail).should('have.text', data.businessDebtorEmail)
        cy.log("Verified Debtors")
    }

    verifyRLAmendmentCollateral(data) {
        cy.get(this.step3Title).should('have.text', data.step3CollateralTitle)
        cy.get(this.amendVehicleType1).should('have.text', data.vehicleType1)
        cy.get(this.amendVehicleYear1).should('have.text', data.vehicleYear1)
        cy.get(this.amendVehicleMake1).should('have.text', data.vehicleMake1)
        cy.get(this.amendVehicleModel1).should('have.text', data.vehicleModel1)
        cy.get(this.amendVehicleSerialNumber1).should('have.text', data.vehicleSerialNumber1)
        cy.get(this.amendVehicleType2).should('have.text', data.vehicleType2)
        cy.get(this.amendVehicleYear2).should('have.text', data.vehicleYear2)
        cy.get(this.amendVehicleMake2).should('have.text', data.vehicleMake2)
        cy.get(this.amendVehicleModel2).should('have.text', data.vehicleModel2)
        cy.get(this.amendVehicleSerialNumber2).should('have.text', data.vehicleSerialNumber2)
        cy.log("Verified RL Amendment Collateral")
    }

    //Repairers Lien Amendment

    verifyAmountAndSurrenderDate(data) {
        cy.get(this.step1Title).should('have.text', data.step1RLAmendmnetTitle)
        cy.get(this.registrationLength).should('have.text', data.registrationLength)
        cy.get(this.amountofLien).should('have.text', data.amountofLien)
        const todaysDate = dayjs().format('MMMM D, YYYY')
        cy.log("todays date**********************************************************" + todaysDate)
        //const todaysDate = Cypress.moment().format('MMMM D, YYYY')
        cy.get(this.surrenderDate).should('contain', todaysDate)
        cy.log("Verified Amount and Surrender Date")
    }

    verifyRegisteringParty(data) {
        cy.get(this.step2Title).should('have.text', data.step2Title)
        cy.get(this.registeringPartyTitle).should('have.text', data.registeringPartyTitle)
        cy.get(this.registeringPartyName).should('have.text', data.registeringPartyName)
        cy.get(this.registeringPartyAddress).should('have.text', data.registeringPartyAddress)
        cy.log("Verified Registering Party")
    }

    verifySecuredParties(data) {
        cy.get(this.securedPartiesTitle).should('have.text', data.securedPartiesTitle)
        cy.get(this.individualPersonName).should('have.text', data.individualPersonName)
        cy.get(this.individualPartyAddress).should('have.text', data.individualPartyAddress)
        cy.get(this.individualPartyEmail).should('have.text', data.individualPartyEmail)
        cy.get(this.individualBusinessName).should('have.text', data.individualBusinessName)
        cy.get(this.individualBusinessAddress).should('have.text', data.individualBusinessAddress)
        cy.get(this.individualBusinessEmail).should('have.text', data.individualBusinessEmail)
        cy.log("Verified Secured Parties")

    }

    //RL Renewal

    verifyRLCollateral(data) {
        cy.get(this.step3CollateralTitle).should('have.text', data.step3CollateralTitle)
        cy.get(this.vehicleCollateralTitle).should('have.text', data.vehicleCollateralTitle)
        cy.get(this.vehicleType1).should('have.text', data.vehicleType1)
        cy.get(this.vehicleYear1).should('have.text', data.vehicleYear1)
        cy.get(this.vehicleMake1).should('have.text', data.vehicleMake1)
        cy.get(this.vehicleModel1).should('have.text', data.vehicleModel1)
        cy.get(this.vehicleSerialNumber1).should('have.text', data.vehicleSerialNumber1)
        cy.get(this.vehicleType2).should('have.text', data.vehicleType2)
        cy.get(this.vehicleYear2).should('have.text', data.vehicleYear2)
        cy.get(this.vehicleMake2).should('have.text', data.vehicleMake2)
        cy.get(this.vehicleModel2).should('have.text', data.vehicleModel2)
        cy.get(this.vehicleSerialNumber2).should('have.text', data.vehicleSerialNumber2)
        cy.log("Verified RL Renewal Collateral")
    }

    

}
export const endtoendRLPage = new EndToEndRLPage()