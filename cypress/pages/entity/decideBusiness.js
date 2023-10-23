const testData = require('../../fixtures/entity/nameRequestData.json');
export class DecideBusiness {
    constructor() {
        this.nrTitle = "#app-title",
        this.clickChevron = "#request-action-select  div.v-select__selections"
        this.actionDropDown = "#app > div.v-menu__content.theme--light.menuable__content__active"
        this.startNewBusinesses = '[role="menuitem"]:contains("For businesses that do not exist yet")'
        this.clickBusinessInBC = '[data-v-466d844c] .group-item:contains("Start a new BC-based business")',
        this.selectBusinessChevron = '#entity-type-options-select',
        this.viewAllBusinesses = '[role="listbox"] [class*="last-select-item"]',
        this.soleProperitorShipBtn = 'button.link-sm-sans-ul:contains("Sole Proprietorship")',
        this.enterName = '#name-input-component',
        this.checkThisName = '#search-name-btn'
        this.checkNamesUniquness = '#name-input-component'
        this.checkReqNameType = 'div.h6.py-0.mt-1.col.col-11',
        this.submitNameForReview = '#name-check-submit-btn',
        this.startOver = '#name-check-start-over-btn',
        this.secondChoice = '#choice-2-text-field',
        this.thirdChoice = '#choice-3-text-field',
        this.backToSearchBtn = '#back-to-search-btn',
        this.continueBtn = 'button.submit-continue-btn',
        this.firstName = '#firstname',
        this.middleName = '#middlename',
        this.lastName = '#lastname',
        this.streetAddress = '#line1',
        this.city = '#city',
        this.selectProvinceDropdown = '#province',
        this.submissionDetailsFromPostalCode = '#applicant-info-1-form #postalcode',
        this.submissionDetailsFromContinueButton = '#applicant-info-1-form button[class*="submit-continue-btn"]',
        this.emailIdTextbox = 'label:contains("Email Address (for notifications)") + input[type="text"]',
        this.phoneNumberTextbox = 'label:contains("Phone Number") + input',
        this.natureOfBusiessTextbox = 'label:contains("Nature of Business") + textarea',
        this.reviewAndConfirmButton = 'form#applicant-info-3-form button[class*="submit-continue-btn"]',
        this.cancelThisNameRequestConfirmButton = '#confirm-nr-cancel-btn',
        this.selectBusinessHomeJurisdicionDropdown = 'label:contains("Select business\' home jurisdiction")',
        this.contactName = 'label:contains("Contact Name (Optional)") + input[type="text"]',
        this.corporationOrRegistrationNumberField = 'label:contains("Incorporation or Registration Number") + input',
        this.faxNumber = 'label:contains("Fax Number (Optional)") + input',
        this.fName = 'label:contains("First Name (Optional)") + input[type="text"]',
        this.lName = 'label:contains("Last Name (Optional)") + input[type="text"]',
        this.addInfo ='label:contains("Additional Information (Optional)") + textarea',
        this.tradeMark = 'label:contains("Registered Canadian Trademark (Optional)") + input[type="text"]',
        this.folioNumber = 'label:contains("Folio Number (Optional)") + input[type="text"]',
        this.makePriorityRequestCheckbox = 'form[id="applicant-info-3-form"] input[role="checkbox"]',
        this.dialogClose = 'button[class*="dialog-close"]',
        this.continueToPaymentButton = '#confirm-nr-continue-btn',
        this.cardNumber = 'input[name="trnCardNumber"]',
        this.cvvNumber = 'input[name="trnCardCvd"]',
        this.submitPaymentDetails = 'input[name="submitButton"]',
        this.cancelAndRefundButton = '#REQUEST_REFUND-btn',
        this.cancelRefundOkButton = 'div[role="document"] #keep-nr-btn span:contains("OK")',
        this.downloadReceiptButton = '#RECEIPT-btn',
        this.cancelNameRequestConfirmButton = '#cancel-nr-btn',
        this.backToNameRequestFormButton = '#back-to-search-btn'
    }
        

    visit(url) {
        cy.viewport( 1920,1080 );
        cy.visit(url)
    }

    verifyElements() {
        cy.get(this.nrTitle).should('be.visible')
    }

    clickDropDown() {
        cy.get(this.clickChevron).should('be.visible')
        cy.get(this.clickChevron).click()
        cy.get(this.actionDropDown).should('be.visible')
    }

    selectStartNewBusinesses(){
        cy.get(this.startNewBusinesses).click(); 
        cy.wait(2000)
        cy.get(this.clickBusinessInBC).should('be.visible')
        cy.get(this.clickBusinessInBC).click()
    }

    selectTypeOfBusinessInBC() {
        cy.get(this.selectBusinessChevron).should('be.visible')
        cy.get(this.selectBusinessChevron).click()
    }

    selectViewAllBusinesses() {
        cy.get(this.viewAllBusinesses).should('be.visible')
        cy.get(this.viewAllBusinesses).click()
    }

    selectSoleProp() {
        cy.get('.copy-small').should(($element) => {
            expect($element).to.contain('British Columbia');
          });
        cy.get('.font-weight-bold').should(($element) => {
            const text = $element.text();
            expect(text).to.include('Proprietorships');
          });
         cy.get(this.soleProperitorShipBtn).should('be.visible');
         cy.get(this.soleProperitorShipBtn).click();    
    }

    getRandomName () {
        return 'UNIQUE:' + Math.floor(Math.random() * 9000000000) + 1000000000;
    }

    enterNameToRequest (){
        cy.get(this.enterName).type(this.getRandomName())   
    }

    checkNameAndReview() {
        cy.get(this.checkThisName).should('be.visible')
        cy.get(this.checkThisName).click()

        //const assertSelectedBusinessTypeData = testData.assertSelectedBusinessType;
        // cy.get(this.checkReqNameType).should('have.text',assertSelectedBusinessTypeData[0]);

        cy.get(this.startOver).should('be.visible')
        cy.get(this.startOver).should('not.have.attr', 'disabled')
        cy.get(this.submitNameForReview).should('be.visible')
        cy.get(this.submitNameForReview).click()
    }

    submitANameForReview(){
        cy.get(this.secondChoice).should('be.visible')
        cy.get(this.secondChoice).type(this.getRandomName())

        cy.get(this.thirdChoice).should('be.visible')
        cy.get(this.thirdChoice).type(this.getRandomName())

        cy.get(this.backToSearchBtn).should('not.have.attr', 'disabled')

        cy.get(this.continueBtn).should('be.visible')
        cy.get(this.continueBtn).click()
    }

    submissionDetailsForm() {
        cy.get(this.firstName).type(testData.submissionDetailsForm.firstName);
        cy.get(this.lastName).type(testData.submissionDetailsForm.lastName, {force: true});
        cy.get(this.streetAddress).type(testData.submissionDetailsForm.streetAddress, {force: true});
        cy.get(this.city).type(testData.submissionDetailsForm.city, {force: true});
        cy.get(this.selectProvinceDropdown).click({force: true});
        cy.get('div[class="v-list-item__title"]:contains("' + testData.submissionDetailsForm.province + '")').click({force: true});
        cy.get(this.submissionDetailsFromPostalCode).type(testData.submissionDetailsForm.postalCode, {force: true});
        cy.get(this.submissionDetailsFromContinueButton).click({force: true});
    }

    submissionDetailsReviewAndConfirmForm() {
        cy.get(this.contactName).type(testData.submissionDetailsReviewAndConfirmForm.contactName, {force: true});
        cy.get(this.emailIdTextbox).type(testData.submissionDetailsReviewAndConfirmForm.email, {force: true});
        cy.get(this.phoneNumberTextbox).type(testData.submissionDetailsReviewAndConfirmForm.phone, {force: true});
        //cy.get(this.makePriorityRequestCheckbox).scrollIntoView({easing: 'linear'});
        cy.get(this.faxNumber).type(testData.submissionDetailsReviewAndConfirmForm.faxNumber, {force: true}),
        cy.get(this.fName).type(testData.submissionDetailsReviewAndConfirmForm.fName, {force: true}),
        cy.get(this.lName).type(testData.submissionDetailsReviewAndConfirmForm.lName, {force: true}),
        cy.get(this.folioNumber).type(testData.submissionDetailsReviewAndConfirmForm.folioNumber, {force: true}),
        cy.get(this.natureOfBusiessTextbox).type(testData.submissionDetailsReviewAndConfirmForm.NOB, {force: true}),
        cy.get(this.addInfo).type(testData.submissionDetailsReviewAndConfirmForm.addInfo, {force: true})
        cy.get(this.tradeMark).type(testData.submissionDetailsReviewAndConfirmForm.tradeMark, {force: true})
        cy.get(this.makePriorityRequestCheckbox).click({force: true});
        cy.get(this.reviewAndConfirmButton).click({force: true});
    }

    continueToPayment() {
        cy.get(this.dialogClose).trigger('keydown', {keyCode: 9, which: 9});
        cy.get(this.continueToPaymentButton).click({force: true});
    }

    goToPaymentAndReturnToForm() {
        cy.get(this.cardNumber).type(testData.paymentDetails.cardNumber);
        cy.get(this.cvvNumber).type(testData.paymentDetails.cvv);
        cy.get(this.submitPaymentDetails).click({force: true});
        //cy.get(this.cancelAndRefundButton).click({force: true});
        //cy.get(this.cancelNameRequestConfirmButton).click({force: true});
        //cy.get(this.cancelRefundOkButton).click();
        cy.get(this.downloadReceiptButton).should('be.visible');
        cy.get(this.backToNameRequestFormButton).click({force: true});
        cy.get(this.selectAnActionDropdown).should('be.visible');
    }
}
export const decideBusiness = new DecideBusiness()