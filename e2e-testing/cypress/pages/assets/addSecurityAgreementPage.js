/// <reference types="Cypress" />

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
        cy.log("Security Agreement dropdown got selected")
    }
    clickSecurityAgreement() {
        cy.get(this.securityAgreement_SA).click()
        cy.log("Clicked on Security Agreement")
    }
    clickRepairersLien() {
        cy.get(this.repairersLein_RL).click()
        cy.log("Clicked on Repairers Lien")
    }
    clickMarriageorSeperationAgreement() {
        cy.get(this.marriageSeperationAgreement_FR).click()
        cy.log("Clicked on Marriage/Seperation Agreement")
    }
    clickLandTaxDefermentLien() {
        cy.get(this.landTaxDefermentLien_LT).click()
        cy.log("Clicked on Land Tax Deferment Lien")
    }
    clickSaleOfGoodsAct() {
        cy.get(this.saleOfGoodsAct_SG).click()
        cy.log("Clicked on Sale of Goods Act")
    }
    clickManufacturedHomeAct() {
        cy.get(this.manufacturedHomeAct_MH).click()
        cy.log("Clicked on Manufactured Home Act")
    }
    clickForestryContractorLien() {
        cy.get(this.forestryContractorLien_FL).click()
        cy.log("Clicked on Forestry Contractor Lien")
    }
    clickForestryContractorCharge() {
        cy.get(this.forestryContractorCharge_FA).click()
        cy.log("Clicked on Forestry Contractor Charge")
    }
    clickForestrySub_ContactorCharge() {
        cy.get(this.forestrySubContractorCharge_FS).click()
        cy.log("Clicked on Forestry Sub_Contractor Charge")
    }


}
export const addSecurityAgreementPage = new AddSecurityAgreementPage()