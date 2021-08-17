/// <reference types="Cypress" />
const log = require("log");

export class AddSecurityAgreementPage {

    constructor() {

        this.securityAgreementDropdown = 'button#registration-more-actions-btn'
        this.securityAgreement_SA = 'div#btn-security'
        this.repairersLein_RL = 'div#btn-reparers'
        this.marriageSeperationAgreement_FR = 'div#btn-marriage'
        this.landTaxDefermentLien_LT = 'div#btn-land'
        this.saleOfGoodsAct_SG = 'div#btn-sale'
        this.manufacturedHomeAct_MH = 'div#btn-mhl'
        this.forestryContractorLien_FL = 'div#btn-fcl'
        this.forestryContractorCharge_FA = 'div#btn-fcc'
        this.forestrySub_ContractorCharge_FS = 'div#btn-fsl'

    }

    selectSecurityAgreementDropdown() {
        cy.get(this.securityAgreementDropdown).click()
        log.info("Security Agreement dropdown got selected")
    }
    clickSecurityAgreement() {
        cy.get(this.securityAgreement_SA).click()
        log.info("Clicked on Security Agreement")
    }
    clickRepairersLien() {
        cy.get(this.repairersLein_RL).click()
        log.info("Clicked on Repairers Lien")
    }
    clickMarriageorSeperationAgreement() {
        cy.get(this.marriageSeperationAgreement_FR).click()
        log.info("Clicked on Marriage/Seperation Agreement")
    }
    clickLandTaxDefermentLien() {
        cy.get(this.landTaxDefermentLien_LT).click()
        log.info("Clicked on Land Tax Deferment Lien")
    }
    clickSaleOfGoodsAct() {
        cy.get(this.saleOfGoodsAct_SG).click()
        log.info("Clicked on Sale of Goods Act")
    }
    clickManufacturedHomeAct() {
        cy.get(this.manufacturedHomeAct_MH).click()
        log.info("Clicked on Manufactured Home Act")
    }
    clickForestryContractorLien() {
        cy.get(this.forestryContractorLien_FL).click()
        log.info("Clicked on Forestry Contractor Lien")
    }
    clickForestryContractorCharge() {
        cy.get(this.forestryContractorCharge_FA).click()
        log.info("Clicked on Forestry Contractor Charge")
    }
    clickForestrySub_ContactorCharge() {
        cy.get(this.forestrySubContractorCharge_FS).click()
        log.info("Clicked on Forestry Sub_Contractor Charge")
    }


}
export const addsecurityAgreementPage = new AddSecurityAgreementPage()