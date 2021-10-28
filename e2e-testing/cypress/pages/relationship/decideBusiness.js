// Decide Business page

export class DecideBusiness {
    constructor() {
        this.userName = '#csn';
        this.passcode = '#passcode';
        this.continueButton = '#continue';
        this.submitButton = '#btnSubmit';

        this.manageExistingBusinessButton = 'button:contains("Manage an Existing Business")';
        this.requestANameButton = 'button:contains("Request a Name")';
        this.selectAnActionDropdown = 'label:contains("Select an Action")';
        this.selectJurisdictionDropdown = 'label:contains("Select a Jurisdiction")';
        this.selectBusinessTypeDropdown = 'label:contains("Select a Business Type")';
        this.selectAnAlternationTypeDropdown = 'label:contains("Select an Alteration Type")'
        this.nameInputField = '#name-input-text-field';
        this.searchNameButton = '#search-name-btn';
        this.selectADesignationDropdown = 'label:contains("Select a Designation")';
        this.successNameSearch = 'span:contains("Ready for Review")';
        this.checkNameSubmitButton = '#name-check-submit-btn';
        this.newRquestReviewContinueButton = '#send-to-examination-form button';
        this.firstName = "#firstname";
        this.lastName = '#lastname';
        this.streetAddress = '#line1';
        this.city = '#city';
        this.selectProvinceDropdown = '#province';
        this.submissionDetailsFromPostalCode = '#applicant-info-1-form #postalcode';
        this.submissionDetailsFromContinueButton = '#applicant-info-1-form button[class*="submit-continue-btn"]';
        this.makePriorityRequestCheckbox = 'form[id="applicant-info-3-form"] input[role="checkbox"]';
        this.emailIdTextbox = 'label:contains("Email Address") + input';
        this.phoneNumberTextbox = 'label:contains("Phone Number") + input';
        this.natureOfBusiessTextbox = 'label:contains("Nature of Business") + textarea';
        this.reviewAndConfirmButton = 'form#applicant-info-3-form button[class*="submit-continue-btn"]';
        this.cancelThisNameRequestConfirmButton = '#confirm-nr-cancel-btn';
        this.selectBusinessHomeJurisdicionDropdown = 'label:contains("Select business\' home jurisdiction")';
        this.enterCorporateNumber = 'label:contains("Enter the corporate number assigned by the home jurisdiction") + input';
        this.noCorporateNumberCheckbox = '#corp-num-checkbox';
        this.enterCorporateName = 'label:contains("Business\'s full legal name in home jurisdiction") + input';
        this.enterCorporateNameForInvalidNumber = 'div[role="document"] label:contains("Business\'s full legal name in home jurisdiction") + input'
        this.dialogClose = 'button[class*="dialog-close"]';
        this.searchButtonInvalidCorporateNum = 'button[class*="search-btn"]';
        this.viewAllOptionsBusinessType = 'span:contains("View all business types")';
        this.viewAllOptionsAlterationType = 'span:contains("View all Alterations")';
        this.listOfItemsInDropdown = 'div[class*="menuable__content__active"] div[role="listbox"]>div>span:nth-Child(1)';
        this.corporationOrRegistrationNumberField = 'label:contains("Incorporation or Registration Number") + input';
        this.continueToPaymentButton = '#confirm-nr-continue-btn';
        this.cancelAndReturnToPayBC = 'input[name="cancelButton"]';
        this.goBackFromPayment = 'span:contains("Go Back")';
        this.cancelNameRequestButton = '#CANCEL-btn';
        this.cancelNameRequestConfirmButton = '#cancel-nr-btn';
        this.backToNameRequestFormButton = '#back-to-search-btn';
        this.protectedAccountButton = 'a[href="/account/protected/account"]';
        this.virturalCardOption = '#tile_btn_virtual_device_div_id';
        this.cardNumber = 'input[name="trnCardNumber"]';
        this.cvvNumber = 'input[name="trnCardCvd"]';
        this.submitPaymentDetails = 'input[name="submitButton"]';
        this.cancelAndRefundButton = '#REQUEST_REFUND-btn';
        this.cancelRefundOkButton = 'div[role="document"] #keep-nr-btn span:contains("OK")';
        this.downloadReceiptButton = '#RECEIPT-btn'
    }

    visit(url) {
        cy.visit(url)
    }

    verifyElements() {
        cy.get(this.manageExistingBusinessButton).should('be.visible')
    }

    manageExistingBusiness() {
        cy.get(this.manageExistingBusinessButton).click({force: true})
    }

    navigateToRequestANamePage() {
        cy.get(this.requestANameButton).click({force: true});
        cy.get(this.selectAnActionDropdown).should('be.visible');
    };

    newRequestDetailsForm(selectionAction, selectJurisdiction, selectBusinessType, designationOrBusinessHomeJurisdictionType, name) {
        cy.get(this.selectAnActionDropdown).click({force: true});
        cy.get('span:contains("' + selectionAction + '")').click({force: true});
        if (selectionAction !== 'Relocate into' && selectionAction !== 'Change (alter) the business type of a') {
            cy.get(this.selectJurisdictionDropdown).click({force: true});
            cy.get('span[class]:contains("' + selectJurisdiction + '")').click({force: true});
        }
        if (selectionAction === 'Change (alter) the business type of a') {
            cy.get(this.selectAnAlternationTypeDropdown).click({force: true});
            if (!this.getListOfBusinessTypesInDropdown().includes(selectBusinessType)) {
                cy.get(this.viewAllOptionsAlterationType).click({force: true});
                cy.get('button:contains("' + selectBusinessType + '")').click({force: true});
            } else {
                cy.get('span:contains("' + selectBusinessType + '")').click({force: true});
            }
        } else {
            cy.get(this.selectBusinessTypeDropdown).click({force: true});
            if (!this.getListOfBusinessTypesInDropdown().includes(selectBusinessType)) {
                cy.get(this.viewAllOptionsBusinessType).click({force: true});
                cy.get('button:contains("' + selectBusinessType + '")').click({force: true});
            } else {
                cy.get('span:contains("' + selectBusinessType + '")').click({force: true});
            }
        }

        if (selectJurisdiction === 'Extraprovincial (Canada based)') {
            cy.get(this.selectBusinessHomeJurisdicionDropdown).click({force: true});
            cy.get('span:contains("' + designationOrBusinessHomeJurisdictionType + '")').click({force: true});
            cy.get(this.noCorporateNumberCheckbox).click({force: true});
            cy.get(this.enterCorporateName).type(this.getRandomName() + name, {force: true});
            cy.get(this.searchNameButton).click({force: true});
        } else if (selectJurisdiction === 'Extraprovincial (Internationally based)') {
            cy.get(this.selectBusinessHomeJurisdicionDropdown).click({force: true});
            cy.get('span:contains("' + designationOrBusinessHomeJurisdictionType + '")').click({force: true});
            cy.get(this.enterCorporateNumber).type('007', {force: true});
            cy.get(this.searchNameButton).click({force: true});
            cy.get(this.enterCorporateNameForInvalidNumber).type(this.getRandomName() + name, {force: true});
            cy.get(this.searchButtonInvalidCorporateNum).click({force: true});
        } else {
            cy.get("body").then($body => {
                if ($body.find(this.selectADesignationDropdown).length > 0) {
                    cy.get(this.selectADesignationDropdown).click({force: true});
                    cy.get('div[class="v-list-item__title"]:contains("' + designationOrBusinessHomeJurisdictionType + '")').click({force: true});
                }
            });
            cy.get(this.nameInputField).type(this.getRandomName() + name, {force: true});
            cy.get(this.searchNameButton).click({force: true});
        }
        cy.get(this.successNameSearch).should('be.visible');
        cy.get(this.checkNameSubmitButton).scrollIntoView().click({force: true});

    }

    newRequestReviewForm() {
        cy.get(this.newRquestReviewContinueButton).click({force: true});
    }

    submissionDetailsForm(firstName, lastName, streetAddress, city, province, postalCode) {
        cy.get(this.firstName).type(firstName, {force: true});
        cy.get(this.lastName).type(lastName, {force: true});
        cy.get(this.streetAddress).type(streetAddress, {force: true});
        cy.get(this.firstName).click({force: true});
        cy.get(this.city).type(city, {force: true});
        cy.get(this.selectProvinceDropdown).click({force: true});
        cy.get('div[class="v-list-item__title"]:contains("' + province + '")').click({force: true});
        cy.get(this.submissionDetailsFromPostalCode).type(postalCode, {force: true});
        cy.get(this.submissionDetailsFromContinueButton).scrollIntoView().click({force: true});
    }

    submissionDetailsReviewAndConfirmForm(email, phone, natureOfBusiness) {
        cy.get(this.emailIdTextbox).type(email, {force: true});
        cy.get(this.phoneNumberTextbox).type(phone, {force: true});
        cy.get(this.makePriorityRequestCheckbox).scrollIntoView({easing: 'linear'});
        cy.get(this.natureOfBusiessTextbox).type(natureOfBusiness, {force: true});
        cy.get("body").then($body => {
            if ($body.find(this.corporationOrRegistrationNumberField).length > 0) {
                cy.get(this.corporationOrRegistrationNumberField).type('CP0001575', {force: true});
            }
        });
        cy.get(this.makePriorityRequestCheckbox).click({force: true});
        cy.get(this.reviewAndConfirmButton).scrollIntoView().click({force: true});
    }

    continueToPayment() {
        cy.get(this.dialogClose).trigger('keydown', {keyCode: 9, which: 9});
        cy.get(this.continueToPaymentButton).click({force: true});
    }

    continueRequestCreation(testData) {
        this.newRequestReviewForm();
        const submissionDetailsFormData = testData.submissionDetailsForm;
        this.submissionDetailsForm(submissionDetailsFormData[0], submissionDetailsFormData[1], submissionDetailsFormData[2], submissionDetailsFormData[3], submissionDetailsFormData[4], submissionDetailsFormData[5]);
        const submissionDetailsReviewAndConfirmFormData = testData.submissionDetailsReviewAndConfirmForm;
        this.submissionDetailsReviewAndConfirmForm(submissionDetailsReviewAndConfirmFormData[0], submissionDetailsReviewAndConfirmFormData[1], submissionDetailsReviewAndConfirmFormData[2]);
        this.continueToPayment();
        this.goToPaymentAndReturnToForm(testData.paymentDetails);
    }

    getListOfBusinessTypesInDropdown() {
        let values = []
        cy.get(this.listOfItemsInDropdown).each(($el, $index) => {
            cy.wrap($el)
                .invoke('text')
                .then(text => {
                    values.push(text.trim());
                })
        });
        return values;
    }

    goToPaymentAndReturnToForm(testData) {
        cy.get(this.cardNumber).type(testData[0]);
        cy.get(this.cvvNumber).type(testData[1]);
        cy.get(this.submitPaymentDetails).click({force: true});
        cy.get(this.cancelAndRefundButton).click({force: true});
        cy.get(this.cancelNameRequestConfirmButton).click({force: true});
        cy.get(this.cancelRefundOkButton).click();
        cy.get(this.downloadReceiptButton).should('be.visible');
        cy.get(this.backToNameRequestFormButton).click({force: true});
        cy.get(this.selectAnActionDropdown).should('be.visible');
    }

    getRandomName () {
        return 'UNIQUE:' + Math.floor(Math.random() * 9000000000) + 1000000000;
    }
}

export const decideBusiness = new DecideBusiness()
