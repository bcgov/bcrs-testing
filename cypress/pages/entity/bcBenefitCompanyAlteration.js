const benefitCompanyData = require('../../fixtures/entity/bcBenefitCompany.json')
require('cypress-plugin-tab')
import 'cypress-xpath';
export class BenefitCompanyAlteration {
    constructor() {
        this.manageBusiness = '#action-menu-0 > span > button > span',
            this.businessType = 'td.business-type',
            this.businessStatus = 'td.business-status',
            this.viewAndChangeButton = '#company-information-button',
            this.businessChangeButton = '#btn-correct-business-type',
            this.businessTypeSelect = ' #business-type-selector',
            this.viewAndChnageButton = '#company-information-button',
            this.businessTypesListed = '.v-select-list .v-list-item',
            this.articleCheckBox = '#confirm-articles-checkbox',
            this.businessChangeDone = '#done-btn',
            this.namesTranslation = '#name-translation  button',
            this.conatctInfoBtn = '#contact-info-edit-btn',
            this.phoneExt='#txt-phone-extension',
            this.contactInfoDone='#contact-info-done-btn',
            this.shareClassChange='#class-0-change-btn',
            this.enterShares='#txt-max-shares',
            this.addResolutionDateSelect='#add-resolution-date',
            this.dateTextField='#date-text-field',
            this.datePicker='.v-date-picker-table tbody tr td',
            this.datePickerDone='#btn-done',
            this.saveAndResume='#save-resume-later-btn',
            this.changedBtn='#edited-chip',
            this.editedBtn='#change-business-type div.col.col-3',
            this.reviewAndConfirm='#confirm-btn',
            this.immediateDate='[role="radiogroup"] input[type="radio"]',
            this.certify='#AR-step-4-container  i',
            this.namesTranslationButton = '#name-translation    div.pr-2 > button',
            this.inputNameTranslation = '#name-translation-input',
            this.doneButton = '#name-translation-btn-done',
            this.resumeDraft = 'button[class*="btn-draft-resume"]',
            this.namesTranslationDone='#name-translation-done',
            this.changesBtnShares='//*[@id="share-structure"]/div[6]/div/table/tbody/tr[1]/td[1]/div',
            this.fileAndPay='#confirm-btn',
            this.filingHistoryList ='#filing-history-list  h3',
            this.viewDocuments ='button.v-btn--outlined.primary--text:has(span.view-details.app-blue)'
    }

    verifyBenefitCompanyActiveAndClick() {
        cy.wait(5000)
        //cy.get(this.businessType).eq(0).contains(benefitCompanyData.firmRegDetails.businessType)
        cy.get(this.businessStatus).eq(0).contains(benefitCompanyData.firmRegDetails.businessStatus)
        cy.get(this.manageBusiness).click({ force: true })
    }

    clickOnViewAndChange() {
        cy.wait(5000)
        cy.get(this.viewAndChnageButton).should('be.visible')
        cy.get(this.viewAndChnageButton).click({ forec: true })
    }

    changeBusinessType() {
        cy.wait(5000)
        cy.get(this.businessChangeButton).click({ force: true })
        cy.get(this.businessTypeSelect).click({ force: true })
    }

    assertBusinessTypes() {
        cy.get(this.businessTypesListed).should('have.length', 3)

        // Assert the text content of each business type
        cy.contains(this.businessTypesListed, benefitCompanyData.firmRegDetails.businessTypesListed.firstType)
        cy.contains(this.businessTypesListed, benefitCompanyData.firmRegDetails.businessTypesListed.secondType)
        cy.contains(this.businessTypesListed, benefitCompanyData.firmRegDetails.businessTypesListed.thirdType)
    }

    selectBusinesstype() {
        cy.get(this.businessTypesListed).eq(1).click()
        cy.get(this.articleCheckBox).click({ force: true })
        cy.get(this.businessChangeDone).click({ force: true })
    }

    changeNamesTranslation() {
        cy.get(this.namesTranslation).click()
    }

    alterContactInfo() {
        cy.get(this.conatctInfoBtn).click()
        cy.get(this.phoneExt).type(benefitCompanyData.firmRegDetails.phoneNumExt)
        cy.get(this.contactInfoDone).click()
    }

    alterShareClass(){
        cy.get(this.shareClassChange).click()
        cy.get(this.enterShares).type(benefitCompanyData.firmRegDetails.alteredShares)
        cy.get(this.businessChangeDone).click()
    }

    addResolutionDate (){
        cy.get(this.addResolutionDateSelect).click()
        cy.get(this.dateTextField).click()
        cy.contains('.v-btn__content', new Date().getDate()).click({force:true});
        cy.get(this.datePickerDone).click()
    }

    verifyChangesSaved (){
        cy.get(this.saveAndResume).click()
        cy.get(this.resumeDraft).click({force: true})
        cy.wait(5000)
        cy.get(this.editedBtn).should('be.visible')
        cy.get(this.changedBtn).eq(0).should('be.visible')
        cy.xpath(this.changesBtnShares).scrollIntoView().should('be.visible')
        cy.get(this.reviewAndConfirm).click()
    }

    setAlterDateAndTime (){
        cy.get(this.immediateDate).eq(0).click({force:true})
        cy.get(this.certify).click({force:true})
    }

    verifyFees (){
        cy.contains('.fee-list__item-name', 'Alteration').siblings('.fee-list__item-value').should('have.text', '$100.00');
        cy.contains('.fee-list__item-name', 'Service Fee').siblings('.fee-list__item-value').should('have.text', '$1.50');
        cy.get('.fee-total__value').should('have.text', '$101.50');
    }

    verifyTheFilingIsCompleteAndDocuments (){
        //cy.reload()
        cy.get(this.filingHistoryList).eq(0).contains(benefitCompanyData.firmRegDetails.changeRegAppAlter)
        cy.get(this.viewDocuments).eq(0).click({force:true})
        cy.get('div.documents-list button').each(($button) => {
            cy.wrap($button).click({force: true});
          });
        }

        getRandomName () {
            const alphabet = 'abcdefghijklmnopqrstuvwxyz';
            let name = '';
          
            for (let i = 0; i < 6; i++) {
              const randomIndex = Math.floor(Math.random() * alphabet.length);
              name += alphabet.charAt(randomIndex);
            }
          
            return name.charAt(0).toUpperCase() + name.slice(1); // Capitalize the first letter
         }

    addNamesTranslationAlter (){
        cy.get(this.namesTranslationButton).should('be.visible').click({force:true})
        cy.get(this.inputNameTranslation).clear().type(this.getRandomName())
        cy.get(this.doneButton).scrollIntoView().click({force: true})
        cy.get(this.namesTranslationDone).click()
    }

    verifyPADPayment (){
        cy.get(this.fileAndPay).click({force:true})
      }


}




export const benefitCompanyAlteration = new BenefitCompanyAlteration()
