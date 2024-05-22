const dissolveData = require('../../fixtures/entity/bcDissolution.json')
require('cypress-plugin-tab')
import 'cypress-xpath';
export class DissolutionFiling {
    constructor() {
        this.moreActions='.menu-btn',
        this.dissolveBusiness='#dissolution-list-item .app-blue',
        this.cco='#cco-list-item .app-blue',
        this.agmExtension='#agm-ext-list-item .app-blue',
        this.agmLocation='#agm-loc-chg-list-item .app-blue',
        this.amal='#amalgamate-list-item .app-blue',
        this.dialogTitle='#dialog-title',
        this.dialogProceed='#dialog-proceed-button',
        this.dissolveWarning='#dissolution-define-dissolution > div > p',
        this.personCheckBox='input[type="radio"][value="person"]',
        this.firstName='#person__first-name',
        this.middleName='#person__middle-name',
        this.lastName='#person__last-name',
        this.email='#person__email',
        this.custodianStreetAddress='label.v-label[for^="street-address"] + input[type="text"]',
        this.canadaPostCheck = '.pcaitem.pcafirstitem.pcaselected',
        this.nextStep='#review-confirm-btn',
        this.step2Header='#resolution-intro-section > header > h2',
        this.helpBtn=' .help-btn span',
        this.resolutionCheckBox='#chk-confirm-resolution',
        this.affidavit='#complete-affidavit > section:nth-child(1) > header > h2',
        this.confirmAffidavit='#chk-confirm-affidavit',
        this.saveAndResume='#save-resume-btn',
        this.resumeDraft = 'button.btn-draft-resume',
        this.stepIndicator= '#step-buttons-container  i.v-icon.notranslate.step__btn2.mdi.mdi-check-circle.theme--light.success--text.text--darken-1',
        this.immediateDate='[role="radiogroup"] input[type="radio"]',
        this.certify='#AR-step-4-container  i',
        this.feeSummaryHeader='header.font-weight-bold',
        this.feeSummaryListName ='.fee-list__item-name',
        this.feeSummaryValueName='.fee-list__item-value',
        this.feeTotal='.fee-total__name',
        this.feeValue='.fee-total__value',
        this.fileAndPay='#file-pay-btn',
        this.filingHistoryList ='#filing-history-list  h3',
        this.viewDocuments ='button.v-btn--outlined.primary--text:has(span.view-details.app-blue)'
    }

    assertAllowableActions (){
        cy.wait(10000)
        cy.get(this.moreActions).click({force:true})
        cy.get(this.dissolveBusiness).should('contain',dissolveData.firmRegDetails.dissolve)
        cy.get(this.cco).should('contain', dissolveData.firmRegDetails.cco)
        cy.get(this.agmExtension).should('contain', dissolveData.firmRegDetails.agmExtension)
        cy.get(this.agmLocation).should('contain', dissolveData.firmRegDetails.agmLocation)
        cy.get(this.amal).should('contain', dissolveData.firmRegDetails.amal)
    }

    startDissolution (){
        cy.get(this.dissolveBusiness).click({force:true})
        cy.get(this.dialogTitle).should('contain', dissolveData.firmRegDetails.dialogTitle)
        cy.get(this.dialogProceed).click({force:true}).click({force:true})
    }

    step1Dissolution (){
        cy.wait(20000)
        cy.get(this.dissolveWarning).should('be.visible')
        cy.get(this.personCheckBox).click({force:true})
        cy.get(this.firstName).type(dissolveData.firmRegDetails.firstName)
        cy.get(this.middleName).type(dissolveData.firmRegDetails.middleName)
        cy.get(this.lastName).type(dissolveData.firmRegDetails.lastName)
        cy.get(this.email).type(dissolveData.firmRegDetails.email)
        cy.get(this.custodianStreetAddress).eq(0).type(dissolveData.firmRegDetails.custodianMailingAddress)
        cy.get(this.canadaPostCheck).eq(0).click({force:true})
        cy.get(this.custodianStreetAddress).eq(1).type(dissolveData.firmRegDetails.custodianDeliveryAddress)
        cy.get(this.canadaPostCheck).eq(0).click({force:true})
        cy.get(this.nextStep).click({force:true})
    }

    step2Dissolution (){
        cy.get(this.step2Header).contains(dissolveData.firmRegDetails.step2Header)
        cy.get(this.helpBtn).eq(1).click({force:true})
        cy.get(this.resolutionCheckBox).click({force:true})
        cy.get(this.nextStep).click({force:true})
    }

    step3Dissolution (){
        cy.get(this.affidavit).contains(dissolveData.firmRegDetails.step3Header)
        cy.get(this.helpBtn).eq(1).click({force:true})
        cy.get(this.confirmAffidavit).click({force:true})
    }

    verifySaveAndResumeFunctionality (){
        cy.get(this.saveAndResume).click({force:true})
        cy.get(this.resumeDraft).click({force:true})
        cy.get(this.stepIndicator).eq(0).should('be.visible')//this check says that all the entered values are stored by showing the click
        cy.get(this.stepIndicator).eq(1).should('be.visible')
        cy.get(this.stepIndicator).eq(2).should('be.visible')
    }

    reviewAndConfirmStep (){
        cy.get(this.nextStep).click({force:true})
        cy.get(this.immediateDate).eq(2).click({force:true})
        cy.get(this.certify).click({force:true})
        cy.get(this.fileAndPay).click({force:true})  
    }

    verifyFeeSummary (){
        cy.get(this.feeSummaryHeader).should('contain', 'Fee Summary')  
        cy.get(this.feeSummaryListName).eq(0).should('contain', 'Voluntary dissolution')
        cy.get(this.feeSummaryValueName).eq(0).should('contain', '$20.00')
        cy.get(this.feeSummaryListName).eq(1).should('contain', 'Service Fee')
        cy.get(this.feeSummaryValueName).eq(1).should('contain', '$1.50')
        cy.get(this.feeTotal).should('contain', 'Total Fees')
        cy.get(this.feeValue).should('contain', '$21.50')
        }

     verifyTheFilingIsCompleteAndDocuments (){
            //cy.reload()
            cy.get(this.filingHistoryList).eq(0).contains(dissolveData.firmRegDetails.regChange)
            cy.get(this.viewDocuments).eq(0).click({force:true})
            cy.get('div.documents-list button').each(($button) => {
                cy.wrap($button).click({force: true});
              });
            }
    

    }
    export const bcDissolutionFiling = new DissolutionFiling()