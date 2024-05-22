const benefitCompanyData = require('../../fixtures/entity/bcBenefitCompany.json')
require('cypress-plugin-tab')
import 'cypress-xpath';
export class AddressChange {
    constructor() {
        this.addChange='#standalone-addresses-button',
        this.addDialogHeader='.coa-warning-dialog .v-card__title',
        this.addDialogProceed='#dialog-proceed-button',
        this.addHeader='#standalone-office-address-article > header > div > div > div',
        this.addBtn='#reg-off-addr-change-btn',
        this.mailingAddress='label.v-label[for^="street-address"] + input[type="text"]',
        this.recordsCity='div.v-input.item.address-city input',
        this.updateAddress='#reg-off-update-addr-btn',
        this.resetButton='#reg-off-addr-reset-btn',
        this.saveAndResume='#coa-save-resume-btn',
        this.certifyField='#certified-by-textfield',
        this.certifyCheckBox='#standalone-office-address-article i',
        this.feeSummaryHeader='header.font-weight-bold',
        this.feeSummaryListName ='.fee-list__item-name',
        this.feeSummaryValueName='.fee-list__item-value',
        this.feeTotal='.fee-total__name',
        this.feeValue='.fee-total__value',
        this.canadaPostCheck = '.pcaitem.pcafirstitem.pcaselected',
        this.fileAndPay='#coa-file-pay-btn',
        this.resumeDraft = 'button[class*="btn-draft-resume"]',
        this.filingHistoryList ='#filing-history-list  h3',
        this.viewDocuments ='button.v-btn--outlined.primary--text:has(span.view-details.app-blue)'
    }

    clickAddChange (){
        cy.get(this.addChange).should('be.visible')
        cy.get(this.addChange).click({force:true})
    }

    assertAddDialog (){
        cy.get(this.addDialogHeader).contains(benefitCompanyData.firmRegDetails.stanAloneAddChange.dialogHeader)
        cy.get(this.addDialogProceed).click({force:true})
    }
    
    startAddChange (){
        cy.get(this.addHeader).should('be.visible')
        cy.get(this.addHeader).contains(benefitCompanyData.firmRegDetails.stanAloneAddChange.addHeader)
        cy.get(this.addBtn).click({force:true})
        cy.get(this.mailingAddress).eq(0).clear().type(benefitCompanyData.firmRegDetails.stanAloneAddChange.streetaddressMailing)
        cy.get(this.canadaPostCheck).eq(0).click({force:true})
        cy.get(this.recordsCity).eq(2).clear().type(benefitCompanyData.firmRegDetails.stanAloneAddChange.recordsCity)
        cy.get(this.updateAddress).click({force:true})
    }

    verifyResumefunctionality (){
        cy.get(this.saveAndResume).click({force:true})
        cy.get(this.resumeDraft).click({force:true})
        cy.get(this.resetButton).should('be.visible')
        cy.get(this.certifyField).type(benefitCompanyData.firmRegDetails.certifyName)
        cy.get(this.certifyCheckBox).eq(2).click({force:true})
        cy.get(this.fileAndPay).click({force:true})
    }

    verifyFeeSummary (){
    cy.get(this.feeSummaryHeader).should('contain', 'Fee Summary');   
    cy.get(this.feeSummaryListName).eq(0).should('contain', 'Change of Registered Office Address');
    cy.get(this.feeSummaryValueName).eq(0).should('contain', '$20.00');
    cy.get(this.feeSummaryListName).eq(1).should('contain', 'Service Fee');
    cy.get(this.feeSummaryValueName).eq(1).should('contain', '$1.50');
    cy.get(this.feeTotal).should('contain', 'Total Fees');
    cy.get(this.feeValue).should('contain', '$21.50');
    }

    verifyTheFilingIsCompleteAndDocuments (){
        //cy.reload()
        cy.get(this.filingHistoryList).eq(0).contains(benefitCompanyData.firmRegDetails.dirChange)
        cy.get(this.viewDocuments).eq(0).click({force:true})
        cy.get('div.documents-list button').each(($button) => {
            cy.wrap($button).click({force: true});
          });
        }

}

export const addressChange = new AddressChange()