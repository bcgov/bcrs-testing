const benefitCompanyData = require('../../fixtures/entity/bcBenefitCompany.json')
require('cypress-plugin-tab')
import 'cypress-xpath';
export class DirectorChange {
    constructor() {
        this.dirChange='#standalone-directors-button',
        this.dirdate='#cod-textfield',
        this.dateSelection='.v-date-picker-table--date tbody tr td',
        this.appointDirector='#wrapper-add-director span span',
        this.firstName='#new-director__first-name',
        this.middleName='#new-director__middle-initial',
        this.lastName='#new-director__last-name'
        this.streetAddress='label.v-label[for^="street-address"] + input[type="text"]',
        this.canadaPostCheck = '.pcaitem.pcafirstitem.pcaselected',
        this.directorDone=' #directors  ul.list.new-director  li   span',
        this.chevron='.actions__more-actions__btn.v-btn--text',
        this.changeAddress='.actions__more-actions div div ',
        this.addressDoneBtn='button.form-primary-btn.done-edit-btn.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default.primary > span',
        this.fNameEdit='.edit-director__first-name input'
        this.mNameEdit='.edit-director__middle-initial input',
        this.lNameEdit='.edit-director__last-name input',
        this.saveAndResume='#cod-save-resume-btn',
        this.newLabel='#director-2 > div > label > div',
        this.nameChanged='#director-1 > div > label > div > span:nth-child(4)',
        this.addChanged='#director-1 > div > label > div > span:nth-child(5)',
        this.reviewAndConfirm='#cod-review-confirm-btn',
        this.certifyName='#certified-by-textfield',
        this.certyCheckBox='#standalone-directors-article-review  i',
        this.codFileAndPay='#cod-file-pay-btn',
        this.filingHistoryList ='#filing-history-list  h3',
        this.viewDocuments ='button.v-btn--outlined.primary--text:has(span.view-details.app-blue)',
        this.resumeDraft = 'button[class*="btn-draft-resume"]',
        this.legalNameDone='button.form-primary-btn.done-edit-btn'
    }


    clickDirectorChange (){
        cy.get(this.dirChange).should('be.visible')
        cy.get(this.dirChange).click({force:true})
    }

    newDirDate (){
        cy.get(this.dirdate).click({force:true})
        cy.get(this.dateSelection).not(':has(button[disabled])').first().click({force:true})
    }

    addNewDirector (){
        cy.get(this.appointDirector).click({force:true})
        cy.get(this.firstName).type(benefitCompanyData.firmRegDetails.NewDirector.firstName)
        cy.get(this.middleName).type(benefitCompanyData.firmRegDetails.NewDirector.middleName)
        cy.get(this.lastName).type(benefitCompanyData.firmRegDetails.NewDirector.lastName)
        cy.get(this.streetAddress).eq(0).type(benefitCompanyData.firmRegDetails.NewDirector.mailingStreetaddress)
        cy.get(this.canadaPostCheck).eq(0).click({force:true})
        cy.get(this.streetAddress).eq(1).type(benefitCompanyData.firmRegDetails.NewDirector.deliveryStreetAddress)
        cy.get(this.canadaPostCheck).eq(0).click({force:true})
        cy.get(this.directorDone).eq(1).click({force:true}).click({force:true})
    }

    editAddressOfDirector (){
        cy.get(this.chevron).eq(1).click({force: true})
        cy.get(this.changeAddress).eq(0).click({force:true})
        cy.get(this.streetAddress).eq(2).clear().type(benefitCompanyData.firmRegDetails.addressChange.mailingStreet)
        cy.get(this.canadaPostCheck).eq(0).click({force:true})
        cy.get(this.streetAddress).eq(3).clear().type(benefitCompanyData.firmRegDetails.NewDirector.deliveryStreetAddress)
        cy.get(this.canadaPostCheck).eq(0).click({force:true})
        cy.get(this.addressDoneBtn).click({force:true})
    }

    editLegalName (){
        cy.get(this.chevron).eq(1).click({force:true})
        cy.get(this.changeAddress).eq(1).click({force:true})
        cy.get(this.fNameEdit).clear().type(benefitCompanyData.firmRegDetails.LegalNameChange.fName)
        cy.get(this.mNameEdit).clear().type(benefitCompanyData.firmRegDetails.LegalNameChange.mName)
        cy.get(this.lNameEdit).clear().type(benefitCompanyData.firmRegDetails.LegalNameChange.lName)
        cy.get(this.legalNameDone).click({force:true})

    }

    verifyChagesAreSaved (){
        cy.get(this.saveAndResume).click({force:true})
        cy.wait(10000)
        cy.get(this.resumeDraft).click({force: true})
        cy.get(this.newLabel).eq(0).should('be.visible')
        cy.get(this.nameChanged).eq(0).should('be.visible')
        cy.get(this.addChanged).eq(0).should('be.visible')
    }

    clickOnReviewAndConfirm (){
        cy.get(this.reviewAndConfirm).click({force:true})
        cy.get(this.certifyName).type(benefitCompanyData.firmRegDetails.certifyName)
        cy.get(this.certyCheckBox).click({force:true})
        cy.get(this.codFileAndPay).click({force:true})
    }

    verifyTheFilingIsCompleteAndDocuments (){
        //cy.reload()
        cy.wait(10000)
        cy.get(this.filingHistoryList).eq(0).contains(benefitCompanyData.firmRegDetails.dirChange)
        cy.get(this.viewDocuments).eq(0).click({force:true})
        cy.get('div.documents-list button').each(($button) => {
            cy.wrap($button).click({force: true});
          });
        }


}

export const directorChange = new DirectorChange()
