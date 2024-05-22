const soleData = require('../../fixtures/entity/soleProp.json')
const testData = require('../../fixtures/entity/nameRequestData.json')
require('cypress-plugin-tab')
import {common} from './common'
import 'cypress-xpath';
export class soleProp {
    constructor() {
        this.regType = "tr:nth-child(1) > td.business-type.base-table__item-cell",
            this.status = "#affiliated-entity-table > div > table > tbody > tr:nth-child(1) > td.business-status.base-table__item-cell > span",
            this.registerNow = '#action-menu-0 > span > button > span',
            this.registerUsingNR = 'button.btn-draft-resume span>span',
            this.checkBox = '#business-checkbox-div > div',
            this.mailingAddForm = 'form.v-form:first',
            this.deliveryAdd = 'form.v-form:last',
            this.email = "#txt-email",
            this.confirmEmail = '#txt-confirm-email',
            this.phoneNumber = '#txt-phone',
            this.extension = '#txt-phone-extension',
            this.Date = '#date-text-field',
            this.country = 'canada',
            this.canada = 'div.v-list-item__content > div.v-list-item__title',
            this.streetAddress = 'div.v-input.street-address input[type="text"]',
            this.addStreetAddress = 'div.v-textarea.street-address-additional textarea',
            this.city = 'div.v-input.address-city input[type="text"]',
            this.postalCode = 'div.v-input.postal-code input[type="text"]',
            this.addDelivery = 'div.v-textarea.delivery-instructions textarea',
            this.addPeopleAndRoles = '#review-confirm-btn',
            this.addPeople = '#btn-add-person',
            this.peopleDialog = '.v-dialog.confirm-dialog .v-card__title',
            this.peopleDialogContinue = '.v-dialog.confirm-dialog .dialog-yes-btn',
            this.pplFirstName = '.v-input.item.first-name',
            this.pplMiddleName = '.v-input.item.middle-name',
            this.pplLastName = '.v-input.item.last-name',
            this.pplStreetAddressMailing = "//form[@class='v-form appoint-form']//input[contains(@id, 'street-address')]",
            this.pplStreetAddressDelivery = "//form[@class='v-form appoint-form']//input[contains(@id, 'street-address')]",
            this.business = 'button#btn-add-organization',
            this.businessLookUpResult = '.business-lookup-result',
            this.corpStreetAddressMailing = '#reg-add-edit-org-person form > div:nth-child(1) > div > div > div.v-input__slot > div',
            this.addressCheckbox = 'input[role="checkbox"][type="checkbox"]',
            this.corpDone = '#btn-done',
            this.completingParty = '#btn-start-add-cp',
            this.pplEmail = '.v-input.item.email-address input[type="text"]',
            this.canadaPostCheck = '.pcaitem.pcafirstitem.pcaselected',
            this.reviewAndConfirm = '#review-confirm-btn',
            this.nosearch = '#nob-search-btn',
            this.certify = '.v-input--selection-controls__input input[type="checkbox"]',
            this.saveAndResume = '#save-resume-btn',
            this.resumeDraft = 'button.btn-draft-resume',
            this.fileAndPay ='#file-pay-btn',
            this.clickStep3 ='#step-3-btn',
            this.creditCardCheckBox = '[role="checkbox"][type="checkbox"]',
            this.businessLookUp = '#business-lookup > div>div input'
            
    }

    verifyTheNrIsSoleProp() {
        cy.get(this.regType).should('contain.text', soleData.firmRegDetails.regType)
        cy.get(this.status).should('contain.text', soleData.firmRegDetails.status)
    }

    startPropFiling() {
        cy.wait(10000)
        cy.get(this.registerNow).click({ force: true }).click({ force: true })
        cy.wait(10000)
        cy.get(this.registerUsingNR).should('be.visible')
        cy.get(this.registerUsingNR).click({ force: true })
    }

    defineYourBusiness() {
        cy.wait(20000)
        cy.get(this.checkBox).should('be.visible')
        cy.get(this.checkBox).click()
        cy.contains('label', 'Keywords or Six-Digit NAICS')
            .invoke('attr', 'for')
            .then((forAttributeValue) => {
                cy.get(`input#${forAttributeValue}`).type(soleData.firmRegDetails.nacis);
            });
        cy.get(this.nosearch).click()
        cy.get('.result-class-title')
            .eq(0)
            .siblings('button.primary')
            .click();
        cy.contains('label', 'Business Number (Optional)')
            .invoke('attr', 'for')
            .then((forAttributeValue) => {
                cy.get(`input#${forAttributeValue}`).type(soleData.firmRegDetails.BusinessNumber);
            });
    }

    mailingAddressDirector() {
        cy.contains('label', 'Street Address').invoke('attr', 'for').then((forAttributeValue) => {
            cy.get(`input#${forAttributeValue}`).clear().
            type(soleData.firmRegDetails.mailingAddress.streetAddress).
            tab()
        });
        cy.contains('label', 'Additional Street Address (Optional)').invoke('attr', 'for').then((forAttributeValue) => {
            cy.get(`textarea#${forAttributeValue}`).clear().type(soleData.firmRegDetails.mailingAddress.addStreetAddress).tab()
        });
        cy.contains('label', 'City').invoke('attr', 'for').then((forAttributeValue) => {
            cy.get(`input#${forAttributeValue}`).clear().type(soleData.firmRegDetails.mailingAddress.city).tab()
        });
        /*cy.contains('label', 'Province/State (Optional)').invoke('attr', 'for').then((forAttributeValue) => {
            cy.get(`input#${forAttributeValue}`).clear().type(soleData.firmRegDetails.mailingAddress.provience).tab()
        });*/
        cy.contains('label', 'Postal Code').invoke('attr', 'for').then((forAttributeValue) => {
            cy.get(`input#${forAttributeValue}`).clear().type(soleData.firmRegDetails.mailingAddress.postalCode).tab()
        });
        cy.contains('label', 'Country').invoke('attr', 'for').then((forAttributeValue) => {
            cy.get(`input#${forAttributeValue}`).click()
        });
        cy.get(this.canada).contains('Canada').click({ force: true })
        cy.contains('label', 'Delivery Instructions (Optional)').invoke('attr', 'for').then((forAttributeValue) => {
            cy.get(`textarea#${forAttributeValue}`).clear().type(soleData.firmRegDetails.mailingAddress.deliveryInst).tab()
        });
    }

    mailingAddress (){
        cy.contains('label', 'Street Address').invoke('attr', 'for').then((forAttributeValue) => {
            cy.get(`input#${forAttributeValue}`).type(soleData.firmRegDetails.mailingAddress.streetAddress)
        });
        cy.get(this.canadaPostCheck).eq(0).click()
    }

    deliveryAddress() {
        cy.get(this.streetAddress).eq(1).type(soleData.firmRegDetails.deliveryAddress.streetAddress).tab()
        cy.get(this.addStreetAddress).eq(1).type(soleData.firmRegDetails.deliveryAddress.addStreetAddress).tab()
        cy.get(this.city).eq(1).type(soleData.firmRegDetails.deliveryAddress.city)
        cy.get(this.postalCode).eq(1).type(soleData.firmRegDetails.deliveryAddress.postalCode);
        cy.get(this.addDelivery).eq(1).type(soleData.firmRegDetails.deliveryAddress.deliveryInst);
    }

    businessInfo() {
        cy.get(this.email).type(soleData.firmRegDetails.email)
        cy.get(this.confirmEmail).type(soleData.firmRegDetails.confirmEmail)
        cy.get(this.phoneNumber).type(soleData.firmRegDetails.phoneNumber)
        cy.get(this.extension).type(soleData.firmRegDetails.extension)
    }

    startDate() {
        cy.get(this.Date).click()
        cy.get('button.v-btn--rounded').contains('.v-btn__content', '2').click()
        cy.get(this.corpDone).click()
    }

    moveToNextPage() {
        cy.get(this.addPeopleAndRoles).click({force: true})
    }

    addCompletingParty() {
        cy.get(this.completingParty).should('be.visible')
        cy.get(this.completingParty).click()
        cy.get(this.corpDone).should('be.visible')
        cy.get(this.corpDone).click({force: true})
    }

    addPeoples() {
        cy.get(this.addPeople).click({force: true})
        cy.get(this.peopleDialog).should('contain', 'Add a Person')
        cy.get(this.peopleDialogContinue).click({force:true})
        cy.get(this.pplFirstName).type(soleData.firmRegDetails.peopleInfo.firstName)
        cy.get(this.pplMiddleName).type(soleData.firmRegDetails.peopleInfo.middleName)
        cy.get(this.pplLastName).type(soleData.firmRegDetails.peopleInfo.lastName)
        cy.get(this.pplEmail).type(soleData.firmRegDetails.peopleInfo.emailAdd).tab()
        cy.xpath(this.pplStreetAddressMailing).eq(0).type(soleData.firmRegDetails.mailingAddress.streetAddress)
        cy.get(this.canadaPostCheck).eq(0).click({force: true})
        cy.xpath(this.pplStreetAddressDelivery).eq(1).type(soleData.firmRegDetails.deliveryAddress.streetAddress)
        cy.get(this.canadaPostCheck).eq(0).click()
        cy.get(this.corpDone).click()
        cy.get(this.reviewAndConfirm).click({force: true})
    }

    //This can be used for GP
      addBusiness (){
         cy.get(this.business).click()
         //cy.get(this.peopleDialog).contains('Add a Business or a Corporation')
         //cy.get(this.peopleDialogContinue).click()
         cy.get(this.businessLookUp).eq(0).type(soleData.firmRegDetails.corpNum)
         cy.get(this.businessLookUpResult).eq(0).should('be.visible')
         cy.get(this.businessLookUpResult).eq(0).click()
         cy.get(this.pplEmail).type(soleData.firmRegDetails.peopleInfo.emailAdd)
         cy.get(this.corpStreetAddressMailing).eq(0).type(soleData.firmRegDetails.mailingAddress.streetAddress)
         cy.get(this.canadaPostCheck).click()
         cy.get(this.addressCheckbox).eq(2).click({force:true}),
         cy.get(this.corpDone).click()
         cy.get(this.reviewAndConfirm).click({force: true})
     }

     confirmCheckbox (){
        cy.get(this.certify).eq(2).click({force: true})
     }

     verifySaveAndResumeFunctionality (){
        cy.get(this.saveAndResume).click()
        cy.wait(10000)
        cy.get(this.resumeDraft).should('be.visible')
        cy.get(this.resumeDraft).click()
     }

     verifyTheFilingDetailsAreSaved (){
        cy.wait(10000)
        cy.get(this.clickStep3).should('be.visible')
        cy.get(this.clickStep3).click({force: true})
        cy.wait(5000)
        //cy.get(this.certify).eq(2).should('exist').should('not.be.hidden')
        cy.get(this.certify).eq(2).click({force: true})
     }
     
     clickOnFileAndPayAndCompletePayment (){
        cy.get(this.fileAndPay).click({force: true})
         cy.wait(5000)
        cy.get(this.creditCardCheckBox).click({force: true})
        cy.get('button.v-btn--contained.primary > span.v-btn__content')
          .contains('Pay Now')
          .parent('button.v-btn--contained.primary').click({force: true})
        cy.wait(10000)
        cy.origin('https://www.beanstream.com/',() => {
            this.cardNumber = '#trnCardNumber',
            this.cvvNumber = '#trnCardCvd',
            this.submitPaymentDetails = 'input[type="button"][name="submitButton"][value="Submit Payment"]'
           cy.log('i am here')
           cy.get(this.cardNumber).should('be.visible')
           cy.get(this.cardNumber).type('4030000010001234');
           cy.get(this.cvvNumber).type('123');
           cy.get(this.submitPaymentDetails).click({force: true});
     })
     }

     verifyResumeSavesTheFiling() {
        cy.get(this.resumeDraft).click({force: true});
        cy.get(this.reviewAndConfirmPage).click({force: true});
        let dataAsList = common.getDataOutOfJson(data);
        dataAsList.splice(dataAsList.indexOf(soleData.firmRegDetails.mailingAddress.streetAddress), 1);
        dataAsList.splice(dataAsList.indexOf(soleData.firmRegDetails.mailingAddress.addStreetAddress),1);
        dataAsList.splice(dataAsList.indexOf(data.firmRegDetails.mailingAddress.city), 1);
        dataAsList.splice(dataAsList.indexOf(data.firmRegDetails.mailingAddress.postalCode), 1)
        dataAsList.splice(dataAsList.indexOf(data.firmRegDetails.mailingAddress.provience), 1)
        dataAsList.splice(dataAsList.indexOf(data.firmRegDetails.mailingAddress.country), 1)
        dataAsList.splice(dataAsList.indexOf(data.firmRegDetails.mailingAddress.deliveryInst), 1)
        dataAsList.forEach((dataFromJson) => {
            cy.get(this.reviewFormContent).contains(dataFromJson).should('be.visible');
        });
    }

     downloadPDFAndVerify (){

     }

     verifyTheFilingIsCompleteAndDocuments (){
        //cy.reload()
        cy.get(this.filingHistoryList).eq(0).contains(soleData.firmRegDetails.changeRegApp)
        cy.get(this.viewDocuments).eq(0).click({force:true})
        cy.get('div.documents-list button').each(($button) => {
            cy.wrap($button).click({force: true});
          });
    }


}
export const soleprop = new soleProp()