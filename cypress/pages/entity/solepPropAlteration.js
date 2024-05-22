const soleData = require('../../fixtures/entity/soleProp.json')
require('cypress-plugin-tab')
import {common} from './common'
import 'cypress-xpath';
export class solePropAlteration {
    constructor() {
        this.manageBusiness ='#action-menu-0 > span > button > span',
        this.businessType = 'td.business-type',
        this.businessStatus = 'td.business-status',
        this.viewAndChnageButton = '#company-information-button',
        this.businessHeader = '#change-view > div > header > h1',
        this.nob = '#nob-edit-btn',
        this.nobText = 'div.v-text-field__slot input[type="text"]',
        this.firstNobSelect = '#result-list >div:nth-child(1)  button',
        this.addressChangeButton = '#btn-correct-office-addresses',
        this.addressChangeDone = '#address-done-btn',
        this.businessInfo = '#contact-info-edit-btn',
        this.emailAddress ='#txt-email',
        this.confirmEmail = '#txt-confirm-email',
        this.businessInfoDone = '#contact-info-done-btn',
        this.directorEditBtn = '#officer-0-edit-btn',
        this.firstName = '#person__first-name',
        this.middleName = '#person__middle-name',
        this.lastName = '#person__last-name',
        this.alterDirectorDone = '#btn-done',
        this.saveAndResume = '#save-resume-later-btn',
        this.resumeDraft = 'button.btn-draft-resume',
        this.addressChangeEditConfirm = '#summary-registered-address > div.pr-2.col.col-3 > span',
        this.businessInfoEditConfim = '#contact-info label >div> span',
        this.confirmNameChangeCheckBox = '#confirm-name-change-checkbox',
        this.directorEditConfirm = '#people-roles-list   div.overflow-hidden.col  div',
        this.reviewAndConfirmBtn = '#confirm-btn',
        this.certify = '.v-input--selection-controls__input input[type="checkbox"]',
        this.nobSearch = '#nob-search-btn',
        this.canadaPostCheck = '.pcaitem.pcafirstitem.pcaselected',
        this.directorChangeBtn = '#officer-0-edit-btn',
        this.nobEditConfirm ='#edited-chip',
        this.fileAndPay = '#confirm-btn',
        this.viewDocuments ='button.v-btn--outlined.primary--text:has(span.view-details.app-blue)',
        this.filingHistoryList ='#filing-history-list  h3',
        this.directorChange = '#change-proprietor-partners-button',
        this.directorEditAddChange =  '#people-roles-list   div.overflow-hidden.col  div>span',
        this.dirChangeOnDashboard = '#proprietor-partners-list-sm  div.list-item__title',
        this.changeAddress = '#standalone-addresses-button',
        this.addChangeOnDashboard = '#business-address-panel   li.address-line1'
    }

    verifySolePropActiveAndClick (){
        cy.get(this.businessType).eq(0).contains(soleData.firmRegDetails.businessType)
        cy.get(this.businessStatus).eq(0).contains(soleData.firmRegDetails.businessStatus)
        cy.get(this.manageBusiness).click({force:true})
    }

    clickOnViewAndChange (){
        cy.wait(5000)
        cy.get(this.viewAndChnageButton).should('be.visible')
        cy.get(this.viewAndChnageButton).click({forec:true})
    }

    verifyAndStartAlteration (){
        cy.get(this.businessHeader).contains(soleData.firmRegDetails.businessHeader)
        cy.get(this.nob).click({force:true})
        cy.get(this.nobText).clear()
        cy.get(this.nobText).type(soleData.firmRegDetails.nobText)
        cy.wait(5000)
        cy.get(this.nobSearch).click({force:true})
        cy.get(this.firstNobSelect).click({force:true})
    }

    verifychangeAddress (){
        cy.get(this.addressChangeButton).click({force:true})
        cy.contains('label', 'Street Address').invoke('attr', 'for').then((forAttributeValue) => {
            cy.get(`input#${forAttributeValue}`).clear().type(soleData.firmRegDetails.mailingAddressAlteration)
        });
        cy.get(this.canadaPostCheck).eq(0).click()
        cy.get(this.addressChangeDone).click({force:true})
    }

    verifychangeContactInfo (){
        cy.get(this.businessInfo).click()
        cy.get(this.emailAddress).clear().type(soleData.firmRegDetails.emailEdit)
        cy.get(this.confirmEmail).clear().type(soleData.firmRegDetails.confirmemailEdit)
        cy.get(this.businessInfoDone).click()
    }

    verifyDirectorChangeAlter (){
        cy.get(this.directorChangeBtn).click()
        cy.get(this.firstName).clear().type(soleData.firmRegDetails.firstName)
        cy.get(this.middleName).clear()
        cy.get(this.lastName).clear().type(soleData.firmRegDetails.lastName)
        cy.get(this.confirmNameChangeCheckBox).click({force:true})
        console.log('is it checking this')
        cy.get(this.alterDirectorDone).should('be.visible')
        cy.get(this.alterDirectorDone).scrollIntoView().click({force:true})
    }

    verifySaveAndResumeFunctionality (){
        cy.get(this.saveAndResume).click({force: true})
        cy.wait(5000)
        cy.get(this.resumeDraft).click({force: true})
        cy.get(5000)
        cy.get(this.businessHeader).contains(soleData.firmRegDetails.businessHeader)
        cy.wait(10000)
        cy.get(this.nobEditConfirm).should ('be.visible')
        cy.get(this.nobEditConfirm).contains(soleData.firmRegDetails.corrected)
        cy.get(this.addressChangeEditConfirm).contains(soleData.firmRegDetails.corrected)
        //cy.get(this.businessInfoEditConfim).contains(soleData.firmRegDetails.corrected)
        cy.get(this.directorEditConfirm).contains(soleData.firmRegDetails.directorChange)    
    }

    verifyReviewAndConfirmPage (){
        cy.get(this.reviewAndConfirmBtn).click({force:true})
        cy.get(this.certify).click({force:true})
    }

    verifyFileAndPay (){
        cy.get(this.fileAndPay).click({force:true})
    }

    verifyTheFilingIsCompleteAndDocuments (){
        //cy.reload()
        cy.get(this.filingHistoryList).eq(0).contains(soleData.firmRegDetails.changeRegApp)
        cy.get(this.viewDocuments).eq(0).click({force:true})
        cy.get('div.documents-list button').each(($button) => {
            cy.wrap($button).click({force: true});
          });
    }

    verifyDirectorChange (){
        cy.get(this.directorChange).click({force:true})
        cy.get(this.directorChangeBtn).click({force:true})
        cy.get(this.middleName).clear().type(soleData.firmRegDetails.middleNameDirector)
        cy.get(this.confirmNameChangeCheckBox).click({force:true})  
    }

    verifyDirectorAddChange (){
        cy.get('label:contains("Street Address") + input[type="text"]').clear()
        cy.get('label:contains("Street Address") + input[type="text"]').eq(0).type(soleData.firmRegDetails.alterDirAddChng,{force:true})
        cy.get(this.canadaPostCheck).eq(0).click()
        cy.get(this.alterDirectorDone ).click({force:true}) 
    }

    verifySaveAndResumeAndChangesSaved (){
        cy.get(this.saveAndResume).click({force: true})
        cy.wait(5000)
        cy.get(this.resumeDraft).click({force: true})
        cy.wait(5000)
        cy.get(this.businessHeader).contains(soleData.firmRegDetails.businessHeader)
        cy.get(this.directorEditAddChange).eq(0).contains(soleData.firmRegDetails.directorChange)
        //cy.get(this.directorEditAddChange).eq(1).contains(soleData.firmRegDetails.directorAddChange)
    }

    verifyDirectorChangeOnDashboard (){
        cy.get(this.dirChangeOnDashboard).should('be.visible')
        cy.get(this.dirChangeOnDashboard).contains(soleData.firmRegDetails.dirChangeOnDashboard)
    }

    verifyStandaloneAddChange (){
        cy.get(this.changeAddress).click({force:true})
        cy.wait(5000)
        cy.get(this.addressChangeButton).click({force:true})
        cy.contains('label', 'Street Address').invoke('attr', 'for').then((forAttributeValue) => {
            cy.get(`input#${forAttributeValue}`).clear().type(soleData.firmRegDetails.alterAddChange)
        });
        cy.get(this.canadaPostCheck).eq(0).click()
        cy.get(this.addressChangeDone).click({force:true})
    }

    verifySaveAndResumeAddChange (){
        cy.get(this.saveAndResume).click({force: true})
        cy.wait(10000)
        cy.get(this.resumeDraft).click({force: true})
        cy.wait(10000)
        cy.get(this.businessHeader).contains(soleData.firmRegDetails.businessHeader)
        cy.get(10000)
        cy.get(this.addressChangeEditConfirm).contains(soleData.firmRegDetails.corrected)
    }
verifyaddChangeOnDashboard(){
        cy.get(this.addChangeOnDashboard).should('be.visible')
        cy.get(this.addChangeOnDashboard).contains(soleData.firmRegDetails.dirChangeOnDashboard)
    }

}
export const solepropAlteration = new solePropAlteration()