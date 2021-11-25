import {common} from './common'
import testDataPayment from "../../fixtures/relationship/nameRequestData.json";
import {directorChange} from "./directorChange";
import {addressChange} from "./addressChange";

let data = require('../../fixtures/relationship/namedCompany.json');

let director_names_list = [];
let direct_name_change_list = [];

export class NamedCompany {

    constructor() {
        this.userInfo = '//div[@class="user-info"]'
        this.manageAnExistingBusiness = '//span[contains(text(),"Manage an Existing Business")]'
        this.namedCompanyButton = 'button[class*="btn-draft-resume"]'
        this.cooperativeAssocitionTypeDropdown = '//label[contains(text(),"Cooperative Association Type")]'
        this.cooperativeAssocitionTypeDropdownOption = '//div[contains(@class,"menuable__content__active")]//div[@role="listbox"]//div[text()="Ordinary Cooperative"]'

        this.mailingStreet = '#address-registered-mailing #street-address-1'
        this.mailingCity = '#address-registered-mailing div[class*="address-city"] input'
        this.mailingPostalCode = '#address-registered-mailing div[class*="postal-code"] input'
        this.mailingCountry = '//label[text()="Mailing Address"]/following-sibling::div//label[text()="Country"]'
        this.mailingProvince = '//label[text()="Mailing Address"]/following-sibling::div//label[text()="Province"]'
        this.deliveryStreet = '//div[@id="address-registered-delivery"]//label[text()="Street Address"]/following-sibling::input'
        this.deliveryCity = '//div[@id="address-registered-delivery"]//label[text()="City"]/following-sibling::input'
        this.deliveryPostalCode = '//div[@id="address-registered-delivery"]//label[text()="Postal Code"]/following-sibling::input'
        this.deliveryCountry = '//label[text()="Delivery Address"]/following-sibling::div//label[text()="Country"]'
        this.deliveryProvince = '//label[text()="Delivery Address"]/following-sibling::div//label[text()="Province"]'
        this.contactEmail = '#business-contact-info #txt-email'
        this.confirmContactEmail = '#business-contact-info #txt-confirm-email'
        this.phoneNumber = '#business-contact-info #txt-phone'
        this.buttonAddPeopleAndRoles = 'a[href="/businesses/create/add-people-and-roles"][id="review-confirm-btn"]'
        this.optionCanadaInDropdown = '//div[contains(@class,"menuable__content__active")]//div[@role="listbox"]//div[text()="Canada"]';
        this.optionBritishColumbiaInDropdown = '//div[contains(@class,"menuable__content__active")]//div[@role="listbox"]//div[text()="British Columbia"]';
        this.checkboxDefineCompanySameAsMailing = '//label[contains(text(),"Same as Mailing Address")]/preceding-sibling::div/input'

        //people and role
        this.addCompletingParty = '#people-role-header ~ div #btn-start-add-cp'
        this.addDirector = 'input[value="Director"]'
        this.mailingStreetPeopleAndRoles = '//div[text()="Mailing Address"]/following-sibling::div//input[starts-with(@id,"street-address")]'
        this.mailingCityPeopleAndRoles = '//div[text()="Mailing Address"]/following-sibling::div//label[text()="City"]/following-sibling::input[starts-with(@id,"input")]'
        this.mailingPostalCodePeopleAndRoles = '//div[text()="Mailing Address"]/following-sibling::div[@class="address-wrapper"]//label[text()="Postal Code"]/following-sibling::input[starts-with(@id,"input")]'
        this.mailingCountryPeopleAndRole = '//div[text()="Mailing Address"]/following-sibling::div[@class="address-wrapper"]//label[text()="Country"]'
        this.mailingProvicePeopleAndRole = '//div[text()="Mailing Address"]/following-sibling::div[@class="address-wrapper"]//label[text()="Province"]'
        this.mailingStreetDirector = '//div[text()="Mailing Address"]/following-sibling::div[@class="address-wrapper"]//input[starts-with(@id,"street-address")]'
        this.mailingCityDirector = '//div[text()="Mailing Address"]/following-sibling::div[@class="address-wrapper"]//label[text()="City"]/following-sibling::input[starts-with(@id,"input")]'
        this.mailingPostalCodeDirector = '//div[text()="Mailing Address"]/following-sibling::div[@class="address-wrapper"][@class="address-wrapper"]//label[text()="Postal Code"]/following-sibling::input[starts-with(@id,"input")]'
        this.mailingCountryDirector = '//div[text()="Mailing Address"]/following-sibling::div[@class="address-wrapper"][@class="address-wrapper"]//label[text()="Country"]'
        this.mailingProviceDirector = '//div[text()="Mailing Address"]/following-sibling::div[@class="address-wrapper"]//label[contains(text(),"Province")]'
        this.deliveryStreetDirector = '//div[text()="Delivery Address"]/following-sibling::div//input[starts-with(@id,"street-address")]'
        this.deliveryCityDirector = '//div[text()="Delivery Address"]/following-sibling::div//label[text()="City"]/following-sibling::input[starts-with(@id,"input")]'
        this.deliveryPostalCodeDirector = '//div[text()="Delivery Address"]/following-sibling::div[@class="address-wrapper"]//label[text()="Postal Code"]/following-sibling::input[starts-with(@id,"input")]'
        this.deliveryCountryDirector = '//div[text()="Delivery Address"]/following-sibling::div[@class="address-wrapper"]//label[text()="Country"]'
        this.deliveryProvinceDirector = '//div[text()="Delivery Address"]/following-sibling::div[@class="address-wrapper"]//label[contains(text(),"Province")]'

        this.createShareStructure = 'a[href="/businesses/create/create-share-structure"][id="review-confirm-btn"]'
        this.addPersonButton = '#btn-add-person'
        this.personFirstName = '#person__first-name'
        this.personLastName = '#person__last-name'
        this.doneButtonNewFiling = '#btn-done'
        this.checkboxPeopleAndRoleSameAsMailing = '//label[contains(text(),"same as Mailing Address")]/preceding-sibling::div/input'
        this.uploadRulesButton = '//div[@class="buttons-right"]//a[@href="/businesses/create/create-rules"]'

        //Upload rules
        this.confirmRulesCompletionCheckbox = '#chk-confirm-rules'
        this.inputPdfRules = '//div[@id="upload-rules-card"]//input[@accept=".pdf"]'
        this.uploadMemorandumButton = '//div[@class="buttons-right"]//a[@href="/businesses/create/create-memorandum"]'

        //Upload Memorandum
        this.memorandumCheckboxAccept = '#chk-confirm-memorandum'
        this.inputPdfMemorandum = '//div[@id="upload-memorandum-card"]//input[@accept=".pdf"]'
        this.reviewAndConfirmButton = '//div[@class="buttons-right"]//a[@href="/businesses/create/review-confirm"]'

        //ReviewAndConfirm
        this.certifyCheckbox = '#isCertified-checkbox'

        this.buttonSaveAndResume = '#save-resume-btn'
        this.buttonFileAndPay = '#file-pay-btn'

        this.resumeDraft = 'button[class*="btn-draft-resume"]'
        this.dropMenuDeleteCorpApp = '#menu-activator'
        this.optionDeleteIncorporationApplication = '#btn-delete-incorporation'
        this.confirmDelete = '#dialog-yes-button'

        this.reviewAndConfirmPage = '#step-5-btn'

        this.cardNumber = 'input[name="trnCardNumber"]';
        this.cvvNumber = 'input[name="trnCardCvd"]';
        this.submitPaymentDetails = 'input[name="submitButton"]';

        this.reviewFormContent = '.row div div[class*="summary-container"]';
        this.buttonViewDocuments = '//h3[text()="Incorporation Application"]/../following-sibling::div//span[contains(text(),"View Documents")]'
        this.downloadButtons = '//button[contains(@class,"download-one-btn")]';

        this.appointNewDirectorButton = '//span[text()="Appoint New Director"]'
        this.doneButton = '//button[contains(@class,"form-primary-btn")]/span'
        this.directorFirstName = '#new-director__first-name'
        this.directorLastName = '#new-director__last-name'

        this.dropDownIconToChangeNameAddress = '//div[@id="directors"]//ul[contains(@class,"director-list")]//button[contains(@class,"actions__more-actions__btn")]'
        this.changeAddressOption = '//div[contains(@class,"menuable__content__active")]//div[text()="Change address"]'
        this.addressChangedText =  '//div[@id="directors"]//div[@class="director-status"]//span[contains(text(),"Address Changed")]'
        this.nameChangedText = '//div[@id="directors"]//div[@class="director-status"]//span[contains(text(),"Name Changed")]'
        this.ceasedText = '//div[@id="directors"]//div[@class="director-status"]//span[contains(text(),"Ceased")]';
        this.ceasedButton = '//button[contains(@class,"cease-btn")]';
        this.changeLegalNameOption = '//div[contains(@class,"menuable__content__active")]//div[text()="Change legal name"]'
        this.firstNameChange = '//form[@name="edit-director-form"]//div[contains(@class,"edit-director__first-name")]//input'
        this.lastNameChange = '//form[@name="edit-director-form"]//div[contains(@class,"edit-director__last-name")]//input'
        this.doneEditButton = '//button[contains(@class,"done-edit-btn")]/span'
        this.brandTitle = '//span[@class="brand__title"]'
        this.changeButtonCurrentAddresses = '//h2[text()="Office Addresses"]/following-sibling::button'
    }

    navigateToChangeAddressPage(data) {
        cy.xpath(this.manageAnExistingBusiness).click({force: true});
        cy.xpath('//tbody/tr/td/strong[contains(text(),"' + data + '")]/../../td//span[@class="open-action"]/button').click({force: true});
        cy.xpath(this.changeButtonCurrentAddresses).click({force: true});
    }


    navigateToNamedCompanyDashboard() {
        cy.xpath(this.manageAnExistingBusiness).click({force: true});
        cy.xpath('//tbody/tr/td/strong[contains(text(),"' + data.businessName + '")]/../../td//span[@class="open-action"]/button').click({force: true});
    }

    navigateToNamedCompanyDashboardAfterDelete() {
        cy.xpath('//tbody/tr/td//strong[contains(text(),"' + data.businessName + '")]/../../../td//span[contains(@class,"more-actions")]/button').click({force: true});
        cy.xpath('//span[contains(text(),"Use this Name Request Now")]').click({force: true});
    }

    proceedToNewFiling() {
        cy.get(this.namedCompanyButton).click({force: true});
    }

    fillDefineYourCooperativeDetails() {
        cy.xpath(this.cooperativeAssocitionTypeDropdown).click({force: true});
        cy.xpath(this.cooperativeAssocitionTypeDropdownOption).click({force: true});
        this.fillMailingAddressDefineCompany();
        cy.xpath(this.checkboxDefineCompanySameAsMailing).invoke('attr', 'aria-checked').then((checked) => {
            if (checked === 'true')
                cy.xpath(this.checkboxDefineCompanySameAsMailing).click({force: true});
        });
        this.fillDeliveryAddressDefineCompany();
        this.fillContactInformation();
        cy.get(this.buttonAddPeopleAndRoles).scrollIntoView().click({force: true});
    }

    fillMailingAddressDefineCompany() {
        let street_name = data.fillDefineYourCooperativeForm.registered_office_address.mailing.street;
        cy.get(this.mailingStreet).clear().type(street_name + '{backspace}');
        cy.wait(500);
        cy.get(this.mailingStreet).type(street_name.substr(street_name.length - 1));
        cy.xpath('//div[@title="' + street_name + '"]').click({force: true});
        cy.get(this.mailingCity).clear().type(data.fillDefineYourCooperativeForm.registered_office_address.mailing.city);
        cy.get(this.mailingPostalCode).clear().type(data.fillDefineYourCooperativeForm.registered_office_address.mailing.postal_code);
        cy.xpath(this.mailingCountry).click({force: true});
        cy.wait(2000);
        cy.xpath(this.optionCanadaInDropdown).click({force: true});
        cy.xpath(this.mailingProvince).click({force: true});
        cy.wait(2000);
        cy.xpath(this.optionBritishColumbiaInDropdown).click({force: true});
    }

    fillDeliveryAddressDefineCompany() {
        let street_name = data.fillDefineYourCooperativeForm.registered_office_address.delivery.street;
        cy.xpath(this.deliveryStreet).clear().type(street_name + '{backspace}');
        cy.wait(500);
        cy.xpath(this.deliveryStreet).type(street_name.substr(street_name.length - 1));
        cy.xpath('//div[@title="' + street_name + '"]').click({force: true});
        cy.xpath(this.deliveryCity).clear().type(data.fillDefineYourCooperativeForm.registered_office_address.delivery.city);
        cy.xpath(this.deliveryPostalCode).clear().type(data.fillDefineYourCooperativeForm.registered_office_address.delivery.postal_code);
        cy.xpath(this.deliveryCountry).click({force: true});
        cy.wait(2000);
        cy.xpath(this.optionCanadaInDropdown).click({force: true});
        cy.xpath(this.deliveryProvince).click({force: true});
        cy.wait(2000);
        cy.xpath(this.optionBritishColumbiaInDropdown).click({force: true});
    }

    fillContactInformation() {
        cy.get(this.contactEmail).clear().type(data.fillDefineYourCooperativeForm.registered_office_contact.email);
        cy.get(this.confirmContactEmail).clear().type(data.fillDefineYourCooperativeForm.registered_office_contact.email);
        cy.get(this.phoneNumber).clear().type(data.fillDefineYourCooperativeForm.registered_office_contact.phone);
    }


    fillPeopleAndRolesForm() {
        cy.get(this.addCompletingParty).click({force: true});
        this.fillMailingAddressCompletingParty();
        cy.get(this.doneButtonNewFiling).scrollIntoView().click({force: true});
        cy.get(this.addPersonButton).click({force: true});
        cy.get(this.personFirstName).type('Director First ' + common.getRandomString());
        cy.get(this.personLastName).type('Director Last ' + common.getRandomString());
        this.fillMailingAddressPartyDirector(data.addPeopleAndRolesForm.party_address_director1.mailing);
        cy.xpath(this.checkboxPeopleAndRoleSameAsMailing).invoke('attr', 'aria-checked').then((checked) => {
            if (checked === 'true')
                cy.xpath(this.checkboxPeopleAndRoleSameAsMailing).click({force: true});
        })
        this.fillDeliveryAddressPartyDirector(data.addPeopleAndRolesForm.party_address_director1.delivery);
        cy.get(this.doneButtonNewFiling).scrollIntoView().click({force: true});

        cy.get(this.addPersonButton).click({force: true});
        cy.get(this.personFirstName).type('Director First ' + common.getRandomString());
        cy.get(this.personLastName).type('Director Last ' + common.getRandomString());
        this.fillMailingAddressPartyDirector(data.addPeopleAndRolesForm.party_address_director2.mailing);
        cy.xpath(this.checkboxPeopleAndRoleSameAsMailing).invoke('attr', 'aria-checked').then((checked) => {
            if (checked === 'true')
                cy.xpath(this.checkboxPeopleAndRoleSameAsMailing).click({force: true});
        })
        this.fillDeliveryAddressPartyDirector(data.addPeopleAndRolesForm.party_address_director2.delivery);
        cy.get(this.doneButtonNewFiling).scrollIntoView().click({force: true});

        cy.get(this.addPersonButton).click({force: true});
        cy.get(this.personFirstName).type('Director First ' + common.getRandomString());
        cy.get(this.personLastName).type('Director Last ' + common.getRandomString());
        this.fillMailingAddressPartyDirector(data.addPeopleAndRolesForm.party_address_director3.mailing);
        cy.xpath(this.checkboxPeopleAndRoleSameAsMailing).invoke('attr', 'aria-checked').then((checked) => {
            if (checked === 'true')
                cy.xpath(this.checkboxPeopleAndRoleSameAsMailing).click({force: true});
        })
        this.fillDeliveryAddressPartyDirector(data.addPeopleAndRolesForm.party_address_director3.delivery);
        cy.get(this.doneButtonNewFiling).scrollIntoView().click({force: true});

        cy.xpath(this.uploadRulesButton).scrollIntoView().click({force: true});
    }

    fillMailingAddressPartyDirector(data_local) {
        let street_name = data_local.street;
        cy.xpath(this.mailingStreetDirector).clear().type(street_name + '{backspace}');
        cy.wait(500);
        cy.xpath(this.mailingStreetDirector).type(street_name.substr(street_name.length - 1));
        cy.xpath('//div[@title="' + street_name + '"]').click({force: true});
        cy.xpath(this.mailingCityDirector).clear().type(data_local.city);
        cy.xpath(this.mailingPostalCodeDirector).clear().type(data_local.postal_code);
        cy.xpath(this.mailingCountryDirector).click({force: true});
        cy.wait(2000);
        cy.xpath(this.optionCanadaInDropdown).click({force: true});
        cy.xpath(this.mailingProviceDirector).click({force: true});
        cy.wait(2000);
        cy.xpath(this.optionBritishColumbiaInDropdown).click({force: true});
    }

    fillDeliveryAddressPartyDirector(data_local) {
        let street_name = data_local.street;
        cy.xpath(this.deliveryStreetDirector).clear().type(street_name + '{backspace}');
        cy.wait(500);
        cy.xpath(this.deliveryStreetDirector).type(street_name.substr(street_name.length - 1));
        cy.xpath('//div[@title="' + street_name + '"]').click({force: true});
        cy.xpath(this.deliveryCityDirector).clear().type(data_local.city);
        cy.xpath(this.deliveryPostalCodeDirector).clear().type(data_local.postal_code);
        cy.xpath(this.deliveryCountryDirector).click({force: true});
        cy.wait(2000);
        cy.xpath(this.optionCanadaInDropdown).click({force: true});
        cy.xpath(this.deliveryProvinceDirector).click({force: true});
        cy.wait(2000);
        cy.xpath(this.optionBritishColumbiaInDropdown).click({force: true});
    }

    fillMailingAddressCompletingParty() {
        let street_name = data.addPeopleAndRolesForm.party_address_completing_party.mailing.street;
        cy.xpath(this.mailingStreetPeopleAndRoles).clear().type(street_name + '{backspace}');
        cy.wait(500);
        cy.xpath(this.mailingStreetPeopleAndRoles).type(street_name.substr(street_name.length - 1));
        cy.xpath('//div[@title="' + street_name + '"]').click({force: true});
        cy.xpath(this.mailingCityPeopleAndRoles).clear().type(data.addPeopleAndRolesForm.party_address_completing_party.mailing.city);
        cy.xpath(this.mailingPostalCodePeopleAndRoles).clear().type(data.addPeopleAndRolesForm.party_address_completing_party.mailing.postal_code);
        cy.xpath(this.mailingCountryPeopleAndRole).click({force: true});
        cy.xpath(this.optionCanadaInDropdown).click({force: true});
        cy.xpath(this.mailingProvicePeopleAndRole).click({force: true});
        cy.wait(2000);
        cy.xpath(this.optionBritishColumbiaInDropdown).click({force: true});
    }

    uploadRulesForm() {
        cy.get(this.confirmRulesCompletionCheckbox).click({force: true});
        //const filepath = 'filesToBeUploaded/RulesUploaded.pdf'
        //cy.xpath(this.inputPdfRules).attachFile(filepath);
        cy.fixture('filesToBeUploaded/upload_doc.pdf').then(fileContent => {
            cy.xpath(this.inputPdfRules).attachFile({ fileContent,fileName :'upload_doc.pdf', mimeType: 'application/pdf' }, { subjectType: 'input' });
        });
        cy.xpath(this.uploadMemorandumButton).click({force: true});
    }

    uploadMemorandumForm() {
        cy.get(this.memorandumCheckboxAccept).click({force: true});
        //const filepath = 'filesToBeUploaded/MemorandumUpload.pdf'
        cy.fixture('filesToBeUploaded/upload_doc.pdf').then(fileContent => {
            cy.xpath(this.inputPdfMemorandum).attachFile({ fileContent,fileName :'upload_doc.pdf', mimeType: 'application/pdf' }, { subjectType: 'input' });
        });
        //cy.xpath(this.inputPdfMemorandum).attachFile(filepath);
        cy.xpath(this.reviewAndConfirmButton).click({force: true});
    }

    verifyResumeAndDelete() {
        cy.get(this.resumeDraft).click({force: true});
        cy.get(this.reviewAndConfirmPage).click({force: true});
        let dataAsList = common.getDataOutOfJson(data);
        dataAsList.forEach((dataFromJson) => {
            cy.get(this.reviewFormContent).contains(dataFromJson).should('be.visible');
        });
        cy.get(this.buttonSaveAndResume).click({force: true});
        cy.get(this.dropMenuDeleteCorpApp).click({force: true});
        cy.get(this.optionDeleteIncorporationApplication).click({force: true});
        cy.get(this.confirmDelete).click({force: true});
    }

    reviewAndConfirmForm() {
        let dataAsList = common.getDataOutOfJson(data);
        dataAsList.forEach((dataFromJson) => {
            cy.get(this.reviewFormContent).contains(dataFromJson).should('be.visible');
        });
    }

    doPaymentAndVerifyPdf() {
        cy.get(this.certifyCheckbox).scrollIntoView().click({force: true});
        cy.wait(2000);
        cy.get(this.buttonFileAndPay).scrollIntoView().click({force: true});
        cy.get(this.cardNumber).clear().type(testDataPayment.paymentDetails[0]);
        cy.get(this.cvvNumber).clear().type(testDataPayment.paymentDetails[1]);
        cy.get(this.submitPaymentDetails).click({force: true});
        cy.xpath(this.buttonViewDocuments).click({force: true});
        cy.xpath(this.downloadButtons).each(($el, index, $list) => {
            cy.wrap($el).click();
            cy.wait(12000);
        })
        cy.task('countFiles').then((files) => {
            files.forEach((file) => {
                if (file.includes('Receipt')) {
                    cy.task('getPdfContents', 'cypress/downloads/' + file).then((text) => {
                        expect(JSON.stringify(text).replace(/ /g,'')).to.contains('250.00'.replace(/ /g,''));
                        expect(JSON.stringify(text).replace(/ /g,'')).to.contains(new Date().toISOString().slice(0, 10).replace(/ /g,''));
                        expect(JSON.stringify(text).replace(/ /g,'')).to.contains('Credit Card'.replace(/ /g,''));
                    });
                } else if (file.includes('Incorporation Application')) {
                    cy.task('getPdfContents', 'cypress/downloads/' + file).then((text) => {
                        let dataAsList = common.getDataOutOfJson(data);
                        dataAsList.splice(dataAsList.indexOf(data.fillDefineYourCooperativeForm.registered_office_contact.email), 1);
                        dataAsList.splice(dataAsList.indexOf(data.fillDefineYourCooperativeForm.registered_office_contact.phone), 1);
                        dataAsList.forEach((dataFromJson) => {
                            expect(JSON.stringify(text).replace(/ /g,'')).to.contains(dataFromJson.replace(/ /g,''));
                        });
                    });
                } else if (file.includes('Certificate')) {
                    cy.task('getPdfContents', 'cypress/downloads/' + file).then((text) => {
                        expect(JSON.stringify(text).replace(/ /g,'')).to.contains(data.businessName.replace(/ /g,''));
                    });
                }
            });
        });
    }

    addNewDirector(data_local) {
            let first_name = 'Director First ' + common.getRandomString();
            let last_name = 'Director Last ' + common.getRandomString();
            director_names_list.push(first_name + ' ' + last_name);
            cy.xpath(this.appointNewDirectorButton).click({force: true});
            cy.get(this.directorFirstName).type(first_name, {force: true});
            cy.get(this.directorLastName).type(last_name, {force: true});
            directorChange.fillDeliveryAddressNewDirector(data_local);
            cy.xpath(this.doneButton).scrollIntoView().click({force: true});
    }

    changeAddressAndVerify(data, changeCount) {
        let data_address_change1 = data.address_change_director1;
        let data_address_change2 = data.address_change_director2;
        let data_address_change3 = data.address_change_director3;

        cy.xpath(this.dropDownIconToChangeNameAddress).each(($el, index, $list) => {
            if (index !== 3) {
                cy.wrap($el).click();
                cy.xpath(this.changeAddressOption).click({force: true});
                if (index === 0) {
                    directorChange.fillDeliveryAddressChangeDirector(data_address_change1);
                } else if (index === 1) {
                    directorChange.fillDeliveryAddressChangeDirector(data_address_change2);
                } else if (index === 2) {
                    directorChange.fillDeliveryAddressChangeDirector(data_address_change3);
                }
                cy.xpath(this.doneEditButton).scrollIntoView().click({force: true});
            }
        });
        cy.xpath(this.addressChangedText).should('have.length',changeCount);
    }

    changeLegalNameAndVerify(changeCount) {
        cy.xpath(this.dropDownIconToChangeNameAddress).each(($el, index, $list) => {
            if (index !== 3) {
                cy.wrap($el).click();
                cy.xpath(this.changeLegalNameOption).click({force: true});
                let first_name = 'Director First ' + common.getRandomString();
                let last_name = 'Director Last ' + common.getRandomString();
                direct_name_change_list.push(first_name+' '+last_name);
                cy.xpath(this.firstNameChange).clear().type(first_name, {force: true});
                cy.xpath(this.lastNameChange).clear().type(last_name, {force: true});
                cy.xpath(this.doneEditButton).click({force: true});
            }
        });
        cy.xpath(this.nameChangedText).should('have.length',changeCount);
    }

    removeNewDirectorContent(data) {
        let dataAsList = common.getDataOutOfJson(data);
        dataAsList.splice(dataAsList.indexOf(data.businessName), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_new_director1.delivery_address.street), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_new_director1.delivery_address.city), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_new_director1.delivery_address.postal_code), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_new_director2.delivery_address.street), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_new_director2.delivery_address.city), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_new_director2.delivery_address.postal_code), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_new_director3.delivery_address.street), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_new_director3.delivery_address.city), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_new_director3.delivery_address.postal_code), 1);
        return dataAsList;
    }

    removeChangeDirectorContent(data) {
        let dataAsList = common.getDataOutOfJson(data);
        dataAsList.splice(dataAsList.indexOf(data.businessName), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_change_director1.delivery_address.street), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_change_director1.delivery_address.city), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_change_director1.delivery_address.postal_code), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_change_director2.delivery_address.street), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_change_director2.delivery_address.city), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_change_director2.delivery_address.postal_code), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_change_director3.delivery_address.street), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_change_director3.delivery_address.city), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_change_director3.delivery_address.postal_code), 1);
        return dataAsList;
    }

    switchAccountTo(account) {
        cy.xpath(this.userInfo).click({force:true});
        cy.xpath('//div[@role="menuitem"]/div[@class="v-list-item__title"][text()="'+account+'"]').click({force:true});
    }
}

export const namedCompany = new NamedCompany();