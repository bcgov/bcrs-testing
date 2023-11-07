import {common} from './common'
import testDataPayment from "../../fixtures/entity/nameRequestData.json";

let director_names_list = [];
let direct_name_change_list = [];

export class DirectorChange {

    constructor() {
        this.manageAnExistingBusiness = '//span[contains(text(),"Manage an Existing Business")]'
        this.changeButtonCurrentDirectors = '//h2[text()="Current Directors"]/following-sibling::button'
        this.appointNewDirectorButton = '//span[text()="Appoint New Director"]'
        this.doneButton = '//button[contains(@class,"form-primary-btn")]/span'
        this.directorFirstName = '#new-director__first-name'
        this.directorLastName = '#new-director__last-name'
        this.mailingStreet = '//label[text()="Mailing Address"]/following-sibling::div[@class="address-wrapper"]//input[contains(@id,"street-address")]'
        this.mailingCity = '//label[text()="Mailing Address"]/following-sibling::div[@class="address-wrapper"]//label[text()="City"]/following-sibling::input'
        this.mailingPostalCode = '//label[text()="Mailing Address"]/following-sibling::div[@class="address-wrapper"]//label[text()="Postal Code"]/following-sibling::input'
        this.mailingCountry = '//label[text()="Mailing Address"]/following-sibling::div//label[text()="Country"]'
        this.deliveryStreet = '//label[text()="Delivery Address"]/following-sibling::div[@class="address-wrapper"]//input[contains(@id,"street-address")]'
        this.deliveryCity = '//label[text()="Delivery Address"]/following-sibling::div[@class="address-wrapper"]//label[text()="City"]/following-sibling::input'
        this.deliveryPostalCode = '//label[text()="Delivery Address"]/following-sibling::div[@class="address-wrapper"]//label[text()="Postal Code"]/following-sibling::input'
        this.deliveryCountry = '//form[@name="new-director-form"]/div[@class="address-wrapper"]//div//label[contains(text(),"Country")]'

        this.mailingStreetChangeDirector = '//ul[contains(@class,"director-list")]//label[text()="Mailing Address"]/following-sibling::div[@class="address-wrapper"]//label[contains(@class,"v-label--active")]/following-sibling::input[contains(@id,"street-address")]'
        this.mailingCityChangeDirector = '//ul[contains(@class,"director-list")]//label[text()="Mailing Address"]/following-sibling::div[@class="address-wrapper"]//label[text()="City"][contains(@class,"v-label--active")]/following-sibling::input'
        this.mailingPostalCodeChangeDirector = '//ul[contains(@class,"director-list")]//label[text()="Mailing Address"]/following-sibling::div[@class="address-wrapper"]//label[text()="Postal Code"][contains(@class,"v-label--active")]/following-sibling::input'
        this.mailingCountryChangeDirector = '//ul[contains(@class,"director-list")]//label[text()="Mailing Address"]/following-sibling::div//label[text()="Country"]'
        this.deliveryStreetChangeDirector = '//ul[contains(@class,"director-list")]//label[text()="Delivery Address"]/following-sibling::div[@class="address-wrapper"]//label[contains(@class,"v-label--active")]/following-sibling::input[contains(@id,"street-address")]'
        this.deliveryCityChangeDirector = '//ul[contains(@class,"director-list")]//label[text()="Delivery Address"]/following-sibling::div[@class="address-wrapper"]//label[text()="City"][contains(@class,"v-label--active")]/following-sibling::input'
        this.deliveryPostalCodeChangeDirector = '//ul[contains(@class,"director-list")]//label[text()="Delivery Address"]/following-sibling::div[@class="address-wrapper"]//label[text()="Postal Code"][contains(@class,"v-label--active")]/following-sibling::input'
        this.deliveryCountryChangeDirector = '//ul[contains(@class,"director-list")]//label[text()="Delivery Address"]/following-sibling::div[@class="address-wrapper"]//div//label[contains(text(),"Country")]'
        this.optionCanadaInDropdown = '//div[contains(@class,"menuable__content__active")]//div[@role="listbox"]//div[text()="Canada"]';

        this.sectionDirectorList = '//div[@id="directors"]//ul[contains(@class,"director-list")]'
        this.sectionDirectorListAfterNext = '//div[@id="standalone-directors-container-review"]'
        this.legalName = '//label[text()="Person\'s legal name"]/following-sibling::input'
        this.certifyCheckbox = '//div[@class="certify-container"]//input[@role="checkbox"]'
        this.nextButton = '//button[@id="cod-next-btn"]'
        this.payButton = '//button[@id="cod-file-pay-btn"]'
        this.cardNumber = '//input[@name="trnCardNumber"]';
        this.cvvNumber = '//input[@name="trnCardCvd"]';
        this.submitPaymentDetails = '//input[@name="submitButton"]';
        this.sectionDirectorsNameList = '//div[@id="director-list-sm"]'
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
        this.priceTotal = '//div[@id="standalone-directors-container"]//div[@class="fee-total__value"]/div'
        this.saveAndResumeLater = '//button[@id="cod-save-resume-btn"]/span'
        this.resumeFilingButton  = '//button[contains(@class,"btn-draft-resume")]'

        this.dropMenuDeleteCorpApp = '#menu-activator'
        this.optionDeleteIncorporationApplication = '#btn-delete-draft'
        this.confirmDelete = '#dialog-yes-button'
        this.downloadButtons = '//button[contains(@class,"download-one-btn")]';
        this.buttonViewDocuments = '//div[@class="item-header__label"][contains(.,"Director Change")]/following-sibling::div/button/span'
        this.getTitleOfFiling = '//h3[text()="Director Change"]/following-sibling::div[@class="item-header__subtitle"]/span[1]'
        this.returnToDashboard = '//button//span[contains(text(),"Return to Dashboard")]'
    }

    navigateToChangeDirectorPage(data) {
        cy.xpath(this.manageAnExistingBusiness).click({force: true});
        cy.xpath('//tbody/tr/td/strong[contains(text(),"' + data + '")]/../../td//span[@class="open-action"]/button').click({force: true});
        cy.xpath(this.changeButtonCurrentDirectors).click({force: true});
    }

    addNewDirector(data_local) {
        let first_name = 'Director First ' + common.getRandomString();
        let last_name = 'Director Last ' + common.getRandomString();
        director_names_list.push(first_name + ' ' + last_name);
        cy.xpath(this.appointNewDirectorButton).click({force: true});
        cy.get(this.directorFirstName).type(first_name, {force: true});
        cy.get(this.directorLastName).type(last_name, {force: true});
        this.fillDeliveryAddressNewDirector(data_local);
        this.fillMailingAddressNewDirector(data_local);
        cy.xpath(this.doneButton).scrollIntoView().click({force: true});
    }

    fillDeliveryAddressNewDirector(local_data) {
        let street_name = local_data.delivery_address.street;
        cy.xpath(this.deliveryStreet).clear().type(street_name + '{backspace}', {force: true});
        cy.wait(500);
        cy.xpath(this.deliveryStreet).type(street_name.substr(street_name.length - 1), {force: true});
        cy.xpath('//div[@title="' + local_data.delivery_address.street + '"]').click({force: true});
        cy.xpath(this.deliveryCity).clear().type(local_data.delivery_address.city, {force: true});
        cy.xpath(this.deliveryPostalCode).clear().type(local_data.delivery_address.postal_code, {force: true});
        cy.xpath(this.deliveryCountry).click({force: true});
        cy.wait(2000);
        cy.xpath(this.optionCanadaInDropdown).click({force: true});
    }

    fillDeliveryAddressChangeDirector(local_data) {
        let street_name = local_data.delivery_address.street;
        cy.xpath(this.deliveryStreetChangeDirector).clear().type(street_name + '{backspace}', {force: true});
        cy.wait(500);
        cy.xpath(this.deliveryStreetChangeDirector).type(street_name.substr(street_name.length - 1), {force: true});
        cy.xpath('//div[@title="' + local_data.delivery_address.street + '"]').click({force: true});
        cy.xpath(this.deliveryCityChangeDirector).clear().type(local_data.delivery_address.city, {force: true});
        cy.xpath(this.deliveryPostalCodeChangeDirector).clear().type(local_data.delivery_address.postal_code, {force: true});
        cy.xpath(this.deliveryCountryChangeDirector).click({force: true});
        cy.wait(2000);
        cy.xpath(this.optionCanadaInDropdown).click({force: true});
    }

    fillMailingAddressNewDirector(local_data) {
        let street_name = local_data.mailing_address.street;
        cy.xpath(this.mailingStreet).clear().type(street_name + '{backspace}', {force: true});
        cy.wait(500);
        cy.xpath(this.mailingStreet).type(street_name.substr(street_name.length - 1), {force: true});
        cy.xpath('//div[@title="' + local_data.mailing_address.street + '"]').click({force: true});
        cy.xpath(this.mailingCity).clear().type(local_data.mailing_address.city, {force: true});
        cy.xpath(this.mailingPostalCode).clear().type(local_data.mailing_address.postal_code, {force: true});
        cy.xpath(this.mailingCountry).click({force: true});
        cy.wait(2000);
        cy.xpath(this.optionCanadaInDropdown).click({force: true});
    }

    fillMailingAddressChangeDirector(local_data) {
        let street_name = local_data.mailing_address.street;
        cy.xpath(this.mailingStreetChangeDirector).clear().type(street_name + '{backspace}', {force: true});
        cy.wait(500);
        cy.xpath(this.mailingStreetChangeDirector).type(street_name.substr(street_name.length - 1), {force: true});
        cy.xpath('//div[@title="' + local_data.mailing_address.street + '"]').click({force: true});
        cy.xpath(this.mailingCityChangeDirector).clear().type(local_data.mailing_address.city, {force: true});
        cy.xpath(this.mailingPostalCodeChangeDirector).clear().type(local_data.mailing_address.postal_code, {force: true});
        cy.xpath(this.mailingCountryChangeDirector).click({force: true});
        cy.wait(2000);
        cy.xpath(this.optionCanadaInDropdown).click({force: true});
    }

    verifyDirectorsAdded(dataAsList) {
        dataAsList.forEach((dataFromJson) => {
            cy.xpath(this.sectionDirectorList).contains(dataFromJson).should('be.visible');
        });
    }

    proceedToPayAndVerifyDirectorsAdded(dataAsList) {
        cy.xpath(this.legalName).type('Legal name ' + common.getRandomString(), {force: true});
        cy.xpath(this.certifyCheckbox).click({force: true});
        cy.xpath(this.nextButton).click({force: true});
        dataAsList.forEach((dataFromJson) => {
            cy.xpath(this.sectionDirectorListAfterNext).contains(dataFromJson).should('be.visible');
        });
        cy.xpath(this.payButton).click({force: true});
        cy.xpath(this.cardNumber).clear().type(testDataPayment.paymentDetails[0]);
        cy.xpath(this.cvvNumber).clear().type(testDataPayment.paymentDetails[1]);
        cy.xpath(this.submitPaymentDetails).click({force: true});
        director_names_list.forEach((director_name) => {
            cy.xpath(this.sectionDirectorsNameList).contains(director_name.toUpperCase()).should('be.visible');
        });
    }

    changeAddressAndVerify(data, changeCount) {
        let data_address_change1 = data.address_change_director1;
        let data_address_change2 = data.address_change_director2;

        cy.xpath(this.dropDownIconToChangeNameAddress).each(($el, index, $list) => {
            if (index !== 2) {
                cy.wrap($el).click();
                cy.xpath(this.changeAddressOption).click({force: true});
                if (index === 0) {
                    this.fillDeliveryAddressChangeDirector(data_address_change1);
                    this.fillMailingAddressChangeDirector(data_address_change1);
                } else if (index === 1) {
                    this.fillDeliveryAddressChangeDirector(data_address_change2);
                    this.fillMailingAddressChangeDirector(data_address_change2);
                }
                cy.xpath(this.doneEditButton).scrollIntoView().click({force: true});
            }
        });
        cy.xpath(this.addressChangedText).should('have.length',changeCount);
    }

    changeLegalNameAndVerify(changeCount) {
        cy.xpath(this.dropDownIconToChangeNameAddress).each(($el, index, $list) => {
            if (index !== 2) {
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

    resumeAndVerifyChanges(dataAsList, addressChangeCount, nameChangeCount) {
        cy.xpath(this.saveAndResumeLater).click({force: true});
        cy.xpath(this.resumeFilingButton).click({force: true});
        cy.xpath(this.addressChangedText).should('have.length',addressChangeCount);
        cy.xpath(this.nameChangedText).should('have.length',nameChangeCount);
        dataAsList.forEach((dataFromJson) => {
            cy.xpath(this.sectionDirectorList).contains(dataFromJson).should('be.visible');
        });
    }

    resumeAndDelete() {
        cy.xpath(this.saveAndResumeLater).click({force: true});
        cy.get(this.dropMenuDeleteCorpApp).click({force: true});
        cy.get(this.optionDeleteIncorporationApplication).click({force: true});
        cy.get(this.confirmDelete).click({force: true});
    }

    removeNewDirectorContent(data) {
        let dataAsList = common.getDataOutOfJson(data);
        dataAsList.splice(dataAsList.indexOf(data.businessName), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_new_director1.mailing_address.street), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_new_director1.mailing_address.city), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_new_director1.mailing_address.postal_code), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_new_director2.mailing_address.street), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_new_director2.mailing_address.city), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_new_director2.mailing_address.postal_code), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_new_director1.delivery_address.street), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_new_director1.delivery_address.city), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_new_director1.delivery_address.postal_code), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_new_director2.delivery_address.street), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_new_director2.delivery_address.city), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_new_director2.delivery_address.postal_code), 1);
        return dataAsList;
    }

    removeBusinessNameContent(data) {
        let dataAsList = common.getDataOutOfJson(data);
        dataAsList.splice(dataAsList.indexOf(data.businessName), 1);
        return dataAsList;
    }

    removeChangeDirectorContent(data) {
        let dataAsList = common.getDataOutOfJson(data);
        dataAsList.splice(dataAsList.indexOf(data.businessName), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_change_director1.mailing_address.street), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_change_director1.mailing_address.city), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_change_director1.mailing_address.postal_code), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_change_director2.mailing_address.street), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_change_director2.mailing_address.city), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_change_director2.mailing_address.postal_code), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_change_director1.delivery_address.street), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_change_director1.delivery_address.city), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_change_director1.delivery_address.postal_code), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_change_director2.delivery_address.street), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_change_director2.delivery_address.city), 1);
        dataAsList.splice(dataAsList.indexOf(data.address_change_director2.delivery_address.postal_code), 1);
        return dataAsList;
    }

    downloadPdfAndVerify(data) {
        cy.xpath(this.buttonViewDocuments).click({force: true});
        cy.xpath(this.downloadButtons).each(($el, index, $list) => {
            cy.wrap($el).click();
            cy.wait(12000);
        });
        cy.task('countFiles').then((files) => {
            files.forEach((file) => {
                if (file.includes('Receipt')) {
                    cy.task('log','Reciept:')
                    cy.task('getPdfContents', 'cypress/downloads/' + file).then((text) => {
                        cy.task('log','Reciept:'+text);
                        expect(text.toString()).to.contains('21.50');
                        expect(text.toString()).to.contains(new Date().toISOString().slice(0, 10));
                        expect(text.toString()).to.contains('Credit Card');
                    });
                } else if (file.includes('Director Change')) {
                    cy.task('log','Director:')
                    cy.task('getPdfContents', 'cypress/downloads/' + file).then((text) => {
                        cy.task('log','Director:'+text);
                        let dataAsList = this.removeChangeDirectorContent(data);
                        dataAsList.forEach((dataFromJson) => {
                            expect(text.toString()).to.contains(dataFromJson);
                        });

                    });
                }
                else if (file.includes('Notice Of Articles')) {
                    cy.task('log','Notice:')
                    cy.task('getPdfContents', 'cypress/downloads/' + file).then((text) => {
                        cy.task('log','Notice:'+text);
                        let dataAsList = this.removeChangeDirectorContent(data);
                        dataAsList.forEach((dataFromJson) => {
                           expect(text.toString()).to.contains(dataFromJson);
                        });
                    });
                }
            });
        });
    }

    ceaseExistingDirector() {
        cy.xpath(this.ceasedButton).click({force:true});
        cy.xpath(this.ceasedText).should('be.visible');
    }
}

export const directorChange = new DirectorChange();
