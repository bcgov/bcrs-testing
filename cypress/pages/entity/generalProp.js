const generalPropData = require('../../fixtures/entity/generalProp.json')
const soleData = require('../../fixtures/entity/soleProp.json')
require('cypress-plugin-tab')
import 'cypress-xpath';
export class GeneralProp {
    constructor() {
        this.regType = "tr:nth-child(1) > td.business-type.base-table__item-cell",
        this.status = "#affiliated-entity-table > div > table > tbody > tr:nth-child(1) > td.business-status.base-table__item-cell > span",
        this.addPeople = '#btn-add-person',
        this.pplFirstName = '.v-input.item.first-name',
        this.pplMiddleName = '.v-input.item.middle-name',
        this.pplLastName = '.v-input.item.last-name',
        this.pplStreetAddressMailing = "//form[@class='v-form appoint-form']//input[contains(@id, 'street-address')]",
        this.pplStreetAddressDelivery = "//form[@class='v-form appoint-form']//input[contains(@id, 'street-address')]",
        this.pplEmail = '.v-input.item.email-address input[type="text"]',
        this.canadaPostCheck = '.pcaitem.pcafirstitem.pcaselected',
        this.reviewAndConfirm = '#review-confirm-btn',
        this.corpDone = '#btn-done',
        this.businessType = 'td.business-type',
        this.businessStatus = 'td.business-status',
        this.manageBusiness ='#action-menu-0 > span > button > span',
        this.addPersonAlter = '#gp-btn-add-person',
        this.firstName = '#person__first-name',
        this.middleName = '#person__middle-name',
        this.lastName = '#person__last-name',
        this.editOfficer = '#officer-0-edit-btn',
        this.confirmNameChangeCheckBox = '#confirm-name-change-checkbox',
        this.alterDirectorDone = '#btn-done',
        this.business = '#gp-btn-add-corp',
        this.businessLookUpResult = '.business-lookup-result',
        this.businessLookUp = '#business-lookup > div>div input',
        this.pplEmailAlter ='#reg-add-edit-org-person  article:nth-child(2) > div',
        this.corpStreetAddressMailing = '#org-person-form > article.mailing-address.mt-6.mb-n6 > div > div > form > div:nth-child(1) input',
        this.addressCheckbox = 'input[role="checkbox"][type="checkbox"]',
        this.corpStreetAddressDelivery ='#org-person-form > article.delivery-address.mt-6  div:nth-child(1) > div > div > div.v-input__slot > div input',
        this.changeEmail='#proprietor-partner-email'
    }

    verifyTheNrIsGeneralProp() {
        cy.get(this.regType).should('contain.text', generalPropData.firmRegDetails.regType)
        cy.get(this.status).should('contain.text', generalPropData.firmRegDetails.status)
    }

    addPeopleGen (){
        cy.wait(5000)
        cy.get(this.addPeople).click({force: true})
        cy.get(this.pplFirstName).type(soleData.firmRegDetails.peopleInfo.firstName)
        cy.get(this.pplMiddleName).type(soleData.firmRegDetails.peopleInfo.middleName)
        cy.get(this.pplLastName).type(soleData.firmRegDetails.peopleInfo.lastName)
        cy.get(this.pplEmailAlter).eq(0).type(soleData.firmRegDetails.peopleInfo.emailAdd)
        cy.xpath(this.pplStreetAddressMailing).eq(0).type(soleData.firmRegDetails.mailingAddress.streetAddress)
        cy.get(this.canadaPostCheck).eq(0).click({force: true})
        cy.xpath(this.pplStreetAddressDelivery).eq(1).type(soleData.firmRegDetails.deliveryAddress.streetAddress)
        cy.get(this.canadaPostCheck).eq(0).click()
        cy.get(this.corpDone).click()
    }

    verifyGenPropActiveAndClick (){
        cy.get(this.businessType).eq(0).contains(generalPropData.firmRegDetails.regType)
        cy.get(this.businessStatus).eq(0).contains(generalPropData.firmRegDetails.businessStatus)
        cy.get(this.manageBusiness).click({force:true})
    }

    addPersonAlteration (){
        cy.get(this.addPersonAlter).should('be.visible')
        cy.get(this.addPersonAlter).click({force:true})
        cy.get(this.pplFirstName).type(generalPropData.firmRegDetails.dirAdd.firstName)
        cy.get(this.pplMiddletName).type(generalPropData.firmRegDetails.dirAdd.firstName)
        cy.get(this.pplLasttName).type(generalPropData.firmRegDetails.dirAdd.firstName)
    }

    editDirector (){
        cy.get(this.editOfficer).click({force:true})
        cy.get(this.firstName).clear().type(soleData.firmRegDetails.firstName)
        cy.get(this.middleName).clear()
        cy.get(this.lastName).clear().type(soleData.firmRegDetails.lastName)
        cy.get(this.confirmNameChangeCheckBox).click({force:true})
        cy.get(this.alterDirectorDone).click({force:true})
    }

    addBusinessAlter (){
        cy.get(this.business).click()
        cy.get(this.businessLookUp).eq(0).type(soleData.firmRegDetails.corpNum)
        cy.get(this.businessLookUpResult).eq(0).should('be.visible')
        cy.get(this.businessLookUpResult).eq(3).click()
        cy.get(this.changeEmail).type(soleData.firmRegDetails.peopleInfo.emailAdd)
        cy.get(this.corpStreetAddressMailing).eq(0).type(soleData.firmRegDetails.mailingAddress.streetAddress)
        cy.get(this.canadaPostCheck).click()
        cy.get(this.corpStreetAddressDelivery).type(generalPropData.firmRegDetails.alterBusiness)
        cy.get(this.canadaPostCheck).click()
        cy.get(this.corpDone).click()

    }

}
export const generalProp = new GeneralProp()