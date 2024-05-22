const restoreData = require('../../fixtures/entity/bcLimitedRestoration.json')
require('cypress-plugin-tab')
import 'cypress-xpath';
export class limitedRestoration {
    constructor() {
        this.addStaffFiling='#staff-notation > div.staff-notation-container > button',
        this.registarsNotation='[data-type="registrars-notation"]',
        this.registarsOrder='[data-type="registrars-order"]',
        this.restore='[data-type="restoration"]',
        this.courtOrder='[data-type="court-order"]',
        this.restoreHeader='#container-main  h1',
        this.nameToNumber='#x-panel-correct-name-to-number  i',
        this.nameToNumberCheckBx='#correct-name-to-number-checkbox',
        this.nameToNumberDone='#done-btn',
        this.namesTranslationCheckBx='#name-translation-checkbox',
        this.addNamesTranslation='#name-translations  button',
        this.namesTranslationInput='#name-translation-input',
        this.namesTranslateDone='#name-translation-btn-done',
        this.limitedRestore='#limited-radio-button',
        this.sixMonthsRadio='#six-radio',
        this.courtOrderRadio='#court-order-radio',
        this.courtOrderInput='#court-order-number-input',
        this.nextPage='#review-confirm-btn',
        this.addPerson='#btn-add-person',
        this.personName='form > article:nth-child(1) div.v-input__slot',
        this.email='form  article:nth-child(2)  div.v-input__slot',
        this.canadaPostCheck = '.pcaitem.pcafirstitem.pcaselected',
        this.addPersonDone='#btn-done span',
        this.MailingAdd ='label.v-label[for^="street-address"] + input[type="text"]',
        this.regCheckBx='#registered-mailing-same-chkbx',
        this.recCheckBx='#records-mailing-same-chkbx',
        this.certify='#certified-by-textfield',
        this.certifyChkBx='#AR-step-4-container   i',
        this.stepIndicator='i.v-icon.mdi.mdi-check-circle',
        this.saveAndResume='#save-resume-btn',
        this.feeSummaryHeader='header.font-weight-bold',
        this.feeSummaryListName ='.fee-list__item-name',
        this.feeSummaryValueName='.fee-list__item-value',
        this.feeTotal='.fee-total__name',
        this.feeValue='.fee-total__value',
        this.noFeeBtn='#no-fee-radio',
        this.fileAndPay='#file-pay-btn',
        this.filingHistoryList ='#filing-history-list  h3',
        this.viewDocuments ='button.v-btn--outlined.primary--text:has(span.view-details.app-blue)',
        this.setp4Btn='#step-4-btn',
        this.resumeDraft = 'button[class*="btn-draft-resume"]',
        this.legalName='#heir-legal-rep-checkbox',
        this.registerRadio='#registrar-radio',
        this.restoreDateFiled='#date-text-field',
        this.selectDate='#date-picker-calendar  tr:nth-child(1)    td:nth-child(2)',
        this.done='#btn-done span',
        this.restoreDate='#date-picker-calendar   tr:nth-child(1) > td:nth-child(3) > button',
        this.business = 'button#btn-add-organization',
        this.businessText= '#business-lookup div.v-input__slot div  div',
        this.businessLookUpResult = '.business-lookup-result',
        this.pplEmail = '.v-input.item.email-address input[type="text"]',
        this.corpStreetAddressMailing = '#reg-add-edit-org-person form > div:nth-child(1) > div > div > div.v-input__slot > div'

    }

    assertAllowableActionsStaff (){
        cy.wait(5000)
        cy.get(this.addStaffFiling).click({force:true})
        cy.get(this.registarsNotation).contains(restoreData.firmRegDetails.regNotation)
        cy.get(this.registarsOrder).contains(restoreData.firmRegDetails.regOrder)
        cy.get(this.courtOrder).contains(restoreData.firmRegDetails.courtOrder)
        cy.get(this.restore).contains(restoreData.firmRegDetails.restore)
    }

    startRestoration(){
        cy.get(this.restore).click({force:true})
        cy.wait(20000)
        cy.get(this.restoreHeader).should('be.visible')
        cy.get(this.restoreHeader).contains(restoreData.firmRegDetails.restoreHeader)
    }

    step1Restore (){
        cy.wait(20000)
        cy.get(this.nameToNumber).click({force:true}).click({force:true})
        cy.get(this.nameToNumberCheckBx).click({force:true})
        cy.get(this.nameToNumberDone).click({force:true})
    }

    namesTranslation (){
        cy.get(this.namesTranslationCheckBx).click({force:true})
        cy.get(this.addNamesTranslation).click({force:true})
        cy.get(this.namesTranslationInput).type(restoreData.firmRegDetails.namesTranslation)
        cy.get(this.namesTranslateDone).click({force:true})
    }

    limitedRestoration (){
        cy.get(this.limitedRestore).click({force:true})
        cy.get(this.sixMonthsRadio).invoke('show').check({force: true})
        cy.get(this.courtOrderRadio).click({force:true})
        cy.get(this.courtOrderInput).type(restoreData.firmRegDetails.courtOrderNo)
        cy.get(this.nextPage).click({force:true})
    }

    step2Restore (){
        cy.get(this.addPerson).click({force:true})
        cy.get(this.personName).eq(0).type(restoreData.firmRegDetails.firstName)
        cy.get(this.personName).eq(1).type(restoreData.firmRegDetails.middleName)
        cy.get(this.personName).eq(2).type(restoreData.firmRegDetails.lastName)
        cy.get(this.email).type(restoreData.firmRegDetails.email)
        cy.contains('label', 'Street Address').invoke('siblings', 'input').clear().type(restoreData.firmRegDetails.streetAddressMailing)
        cy.get(this.canadaPostCheck).eq(0).click({force:true})
        cy.get(this.addPersonDone).click({force:true}).click({force:true})
        cy.get(this.nextPage).click({force:true})
    }

    step3Restore (){
        cy.get(this.MailingAdd).eq(0).should('be.visible')
        cy.get(this.MailingAdd).eq(0).type(restoreData.firmRegDetails.regMailingAdd,{force:true})
        cy.get(this.canadaPostCheck).eq(0).click({force:true})
        cy.get(this.regCheckBx).click({force:true}).click({force:true})
        cy.get(this.MailingAdd).eq(1).type(restoreData.firmRegDetails.regMailingAdd,{force:true})
        cy.get(this.canadaPostCheck).eq(0).click({force:true})
    }
   
    //fill Registered Office Information

    moveToNxtPage (){
        cy.get(this.nextPage).click({force:true})
    }

    fillCertifyBlock (){
        cy.get(this.setp4Btn).click({force:true})
        cy.get(this.certify).type(restoreData.firmRegDetails.certifyName)
        cy.get(this.certifyChkBx).click({force:true})
    }

    verifyChangesSaved (){
        cy.get(this.saveAndResume).click({force:true})
        cy.wait(5000)
        cy.get(this.resumeDraft).click({force:true})
        cy.get(this.stepIndicator).eq(0).should('be.visible')//this check says that all the entered values are stored by showing the click
        cy.get(this.stepIndicator).eq(1).should('be.visible')
        cy.get(this.stepIndicator).eq(2).should('be.visible')
    }

    verifyFeeSummary (){
        cy.get(this.feeSummaryHeader).should('contain', 'Fee Summary')
        cy.get(this.feeSummaryListName).eq(0).should('contain', 'Restoration Application - Limited')
        cy.get(this.feeSummaryValueName).eq(0).should('contain', '$350.00')
    }

    staffNoFee (){
        cy.get(this.noFeeBtn).click({force:true})
        cy.get(this.fileAndPay).click({force:true})
    }

    verifyTheFilingIsCompleteAndDocuments (){
        //cy.reload()
        cy.get(this.filingHistoryList).eq(0).contains(restoreData.firmRegDetails.regApp)
        cy.get(this.viewDocuments).eq(0).click({force:true})
        cy.get('div.documents-list button').each(($button) => {
            cy.wrap($button).click({force: true});
          });
        }
    
    fullRestoration (){
        cy.get(this.legalName).click({force:true})
        cy.get(this.registerRadio).click({force:true})
        cy.get(this.restoreDateFiled).eq(0).click({force:true})
        cy.get(this.selectDate).eq(0).click({force:true})
        cy.get(this.done).eq(0).click({force:true})
        cy.wait(5000)
        cy.get(this.selectDate).eq(0).click({force:true})
        cy.get(this.done).eq(0).click({force:true})
        cy.get(this.restoreDate).eq(0).click({force:true})
        cy.get(this.done).click({force:true})
    }

    addBusinessRestoration (){
        cy.get(this.business).click()
        cy.get(this.businessText).type(restoreData.firmRegDetails.incorpNum)
        cy.get(this.businessLookUpResult).eq(0).should('be.visible')
        cy.get(this.businessLookUpResult).eq(1).click()
        cy.get(this.pplEmail).type(restoreData.firmRegDetails.email)
        cy.get(this.corpStreetAddressMailing).eq(0).type(restoreData.firmRegDetails.incorpStreetAdd)
        cy.get(this.canadaPostCheck).eq(0).click()
        cy.get(this.done).click({force:true})
    }



}

export const bcLimitedRestoration = new limitedRestoration()

