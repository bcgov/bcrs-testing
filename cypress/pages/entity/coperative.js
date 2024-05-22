const benefitCompanyData = require('../../fixtures/entity/bcBenefitCompany.json')
const corpData = require('../../fixtures/entity/coperatives.json')
require('cypress-plugin-tab')
import 'cypress-xpath';
export class coperativeAssociation {
    constructor() {
        this.selectAccount = '.v-list-item--link .v-list-item__title',
        this.regType = "tr:nth-child(1) > td.business-type.base-table__item-cell",
        this.status = "#affiliated-entity-table > div > table > tbody > tr:nth-child(1) > td.business-status.base-table__item-cell > span",
        this.manageBusiness ='#action-menu-0 > span > button > span',
        this.incorporateUsingNr = 'button.btn-draft-resume span>span',
        this.corpType='#cooperative-type-input',
        this.selectCorpType ='.v-list-item__title',
        this.streetAddress = 'label.v-label[for^="street-address"] + input[type="text"]',
        this.directorFName ='#person__first-name',
        this.directorMName='#person__middle-name',
        this.directorLName='#person__last-name',
        this.addDirector='#btn-add-person',
        this.directorChkBx ='#director-checkbox',
        this.dirMailingAdd ='label.v-label[for^="street-address"] + input[type="text"]',
        this.checkboxDefineCompanySameAsMailingDir ='//label[contains(text(),"same as Mailing Address")]/preceding-sibling::div/input',
        this.dirDeliveryAdd='label.v-label[for^="street-address"] + input[type="text"]',
        this.completingPartyDone ='#btn-done',
        this.canadaPostCheck = '.pcaitem.pcafirstitem.pcaselected',
        this.uploadingFile = '#upload-rules-card',
        this.inputPdfRules = '//div[@id="upload-rules-card"]//input[@accept=".pdf"]',
        this.confirmRulesCompletionCheckbox = '#chk-confirm-rules',
        this.memorandumCheckboxAccept = '#chk-confirm-memorandum',
        this.inputPdfMemorandum = '//div[@id="upload-memorandum-card"]//input[@accept=".pdf"]'
    }

    changeAccountCoop (){
        cy.wait(20000)
        cy.get('div.account-name').invoke('attr', 'style', 'display: block') .click({force: true}); 
        cy.get(this.selectAccount).eq(11) .click({force:true}).click({force:true})
    }

    verifyTheNrIsCoop() {
        cy.get(this.regType).should('contain.text', corpData.firmRegDetails.regType)
        cy.get(this.status).should('contain.text', corpData.firmRegDetails.status)
        cy.get(this.manageBusiness).click({ force: true })
    }

    startCoopFiling (){
        cy.wait(10000)
        cy.get(this.incorporateUsingNr).click({force:true})
    }

    corpAssnType (){
        cy.get(this.corpType).click({force:true})
        cy.get(this.selectCorpType).should('have.length', 3)
        const types = ['Community Service Cooperative', 'Ordinary Cooperative', 'Housing Cooperative'];
        types.forEach(type => {
        cy.get(this.selectCorpType).contains(type).should('exist')
         })
         cy.wait(1000)
         cy.get(this.selectCorpType).eq(0).click({force:true})
        }

        fillDirectorInfo(directorInfoKey) {
            const directorInfo = corpData.firmRegDetails[directorInfoKey]
            if (!directorInfo) {
                // Log an error if the specified key doesn't exist in benefitCompanyData
                cy.log(`Director info not found for key: ${directorInfoKey}`);
                return;
              }
            cy.get(this.addDirector).click({ force: true })
            cy.wait(1000)
            cy.get(this.directorFName).type(directorInfo.FName)
            cy.get(this.directorMName).type(directorInfo.MName)
            cy.get(this.directorLName).type(directorInfo.LName)
            cy.get(this.directorChkBx).click({ force: true })
            cy.get(this.dirMailingAdd).eq(1).type(directorInfo.streetaddress)
            cy.get(this.canadaPostCheck).eq(0).click({ force: true })
            cy.get(this.dirDeliveryAdd).eq(2).type(directorInfo.deliveryStreetAddress)
            cy.get(this.canadaPostCheck).eq(0).click({ force: true })
            cy.get(this.completingPartyDone).click({ force: true }).click({ force: true })
          }

        fileUpload (){
            cy.get(this.confirmRulesCompletionCheckbox).click({force: true})
            cy.fixture('entity/upload-rules-card.pdf').then(fileContent => {
                cy.log('File Content:', fileContent)
                cy.xpath(this.inputPdfRules).attachFile({ fileContent,fileName :'upload-rules-card.pdf', mimeType: 'application/pdf' }, { subjectType: 'input' })
            });
        }

        uploadMemorandumForm() {
            cy.get(this.memorandumCheckboxAccept).click({force: true})
            cy.fixture('filesToBeUploaded/upload_doc.pdf').then(fileContent => {
                cy.xpath(this.inputPdfMemorandum).attachFile({ fileContent,fileName :'upload_doc.pdf', mimeType: 'application/pdf' }, { subjectType: 'input' })
            })
        }
}


export const corpAssn = new coperativeAssociation()