import {common} from './common'
import testDataPayment from "../../fixtures/relationship/nameRequestData.json";
let data = require('../../fixtures/entity/addressChange.json');

export class AddressChange {

    constructor() {
        this.manageAnExistingBusiness = '//span[contains(text(),"Manage an Existing Business")]'
        this.changeButtonCurrentAddresses = '//h2[text()="Office Addresses"]/following-sibling::button'
        this.continueAddressChangeButton = '#dialog-proceed-button'
        this.changeAddressButton = '#reg-off-addr-change-btn'

        this.mailingStreetChangeAddress = '//li[contains(@class,"registered-mailing-address")]//div[contains(@class,"street-address")]//label[text()="Street Address"]/following-sibling::input'
        this.mailingCityChangeAddress = '//li[contains(@class,"registered-mailing-address")]//div[contains(@class,"address-city")]//label[text()="City"]/following-sibling::input'
        this.mailingPostalCodeChangeAddress = '//li[contains(@class,"registered-mailing-address")]//div[contains(@class,"postal-code")]//label[text()="Postal Code"]/following-sibling::input'
        this.mailingCountryChangeAddress = '//li[contains(@class,"registered-mailing-address")]//div[contains(@class,"address-country")]//label[text()="Country"]'
        this.mailingProvinceAddress = '//li[contains(@class,"registered-mailing-address")]//div[contains(@class,"address-region")]//label[text()="Province"]'
        this.deliveryStreetChangeAddress = '//li[contains(@class,"registered-delivery-address")]//div[contains(@class,"street-address")]//label[text()="Street Address"]/following-sibling::input'
        this.deliveryCityChangeAddress = '//li[contains(@class,"registered-delivery-address")]//div[contains(@class,"address-city")]//label[text()="City"]/following-sibling::input'
        this.deliveryPostalCodeChangeAddress = '//li[contains(@class,"registered-delivery-address")]//div[contains(@class,"postal-code")]//label[text()="Postal Code"]/following-sibling::input'
        this.deliveryCountryChangeAddress = '//li[contains(@class,"registered-delivery-address")]//div[contains(@class,"address-country")]//label[text()="Country"]'
        this.deliveryProvinceAddress = '//li[contains(@class,"registered-delivery-address")]//div[contains(@class,"address-region")]//label[text()="Province"]'
        this.optionCanadaInDropdown = '//div[contains(@class,"menuable__content__active")]//div[@role="listbox"]//div[text()="Canada"]';
        this.updateButton = '#reg-off-update-addr-btn'
        this.resetAddressChange = '#reg-off-addr-reset-btn'
        this.optionBritishColumbiaInDropdown = '//div[contains(@class,"menuable__content__active")]//div[@role="listbox"]//div[text()="British Columbia"]';

        this.legalName = '//label[text()="Person\'s legal name"]/following-sibling::input'
        this.certifyCheckbox = '//div[@class="certify-container"]//input[@role="checkbox"]'
        this.payButton = '//button[@id="coa-file-pay-btn"]'
        this.cardNumber = '//input[@name="trnCardNumber"]';
        this.cvvNumber = '//input[@name="trnCardCvd"]';
        this.submitPaymentDetails = '//input[@name="submitButton"]';
        this.getTitleOfFiling = '//h3[text()="Address Change"]/following-sibling::div[@class="item-header__subtitle"]/span[contains(text(),"FILED AND PAID")]'
        this.downloadButtons = '//button[contains(@class,"download-one-btn")]';
        this.pendingStatusAddressChange = '//h2[text()=\'Office Addresses\']/following-sibling::span//span[text()=\'Pending\']'
    }

    navigateToChangeAddressPage(data) {
        cy.xpath(this.manageAnExistingBusiness).click({force: true});
        cy.xpath('//tbody/tr/td/strong[contains(text(),"' + data + '")]/../../td//span[@class="open-action"]/button').click({force: true});
        cy.xpath(this.changeButtonCurrentAddresses).click({force: true});
        cy.get(this.continueAddressChangeButton).click({force:true});
    }

    fillMailingAddressChangeAddress() {
        let street_name = data.address_change.mailing_address.street;
        cy.xpath(this.mailingStreetChangeAddress).clear().type(street_name + '{backspace}', {force: true});
        cy.wait(500);
        cy.xpath(this.mailingStreetChangeAddress).type(street_name.substr(street_name.length - 1), {force: true});
        cy.xpath('//div[@title="' + street_name + '"]').click({force: true});
        cy.xpath(this.mailingCityChangeAddress).clear().type(data.address_change.mailing_address.city, {force: true});
        cy.xpath(this.mailingPostalCodeChangeAddress).clear().type(data.address_change.mailing_address.postal_code, {force: true});
        cy.xpath(this.mailingCountryChangeAddress).click({force: true});
        cy.wait(2000);
        cy.xpath(this.optionCanadaInDropdown).click({force: true});
        cy.xpath(this.mailingProvinceAddress).click({force: true});
        cy.wait(2000);
        cy.xpath(this.optionBritishColumbiaInDropdown).click({force: true});
    }

    fillDeliveryAddressChangeAddress() {
        let street_name = data.address_change.delivery_address.street;
        cy.xpath(this.deliveryStreetChangeAddress).clear().type(street_name + '{backspace}', {force: true});
        cy.wait(500);
        cy.xpath(this.deliveryStreetChangeAddress).type(street_name.substr(street_name.length - 1), {force: true});
        cy.xpath('//div[@title="' + street_name + '"]').click({force: true});
        cy.xpath(this.deliveryCityChangeAddress).clear().type(data.address_change.delivery_address.city, {force: true});
        cy.xpath(this.deliveryPostalCodeChangeAddress).clear().type(data.address_change.delivery_address.postal_code, {force: true});
        cy.xpath(this.deliveryCountryChangeAddress).click({force: true});
        cy.wait(2000);
        cy.xpath(this.optionCanadaInDropdown).click({force: true});
        cy.xpath(this.deliveryProvinceAddress).click({force: true});
        cy.wait(2000);
        cy.xpath(this.optionBritishColumbiaInDropdown).click({force: true});
    }

    proceedToPayment() {
        cy.xpath(this.legalName).type('Legal name ' + common.getRandomString(), {force: true});
        cy.xpath(this.certifyCheckbox).click({force: true});
        cy.xpath(this.payButton).click({force: true});
        cy.xpath(this.cardNumber).clear().type(testDataPayment.paymentDetails[0]);
        cy.xpath(this.cvvNumber).clear().type(testDataPayment.paymentDetails[1]);
        cy.xpath(this.submitPaymentDetails).click({force: true});
    }

    downloadAndVerifyPdfs() {
        cy.xpath(this.downloadButtons).each(($el, index, $list) => {
            cy.wrap($el).click();
            cy.wait(12000);
        });
        cy.task('countFiles').then((files) => {
            files.forEach((file) => {
                if (file.includes('Receipt')) {
                    cy.task('log','Reciept:')
                    cy.task('getPdfContents', 'cypress/downloads/' + file).then((text) => {
                        expect(text.toString()).to.contains('20.00');
                        expect(text.toString()).to.contains(new Date().toISOString().slice(0, 10));
                        expect(text.toString()).to.contains('Credit Card');
                    });
                } else if (file.includes('Address Change')) {
                    cy.task('getPdfContents', 'cypress/downloads/' + file).then((text) => {
                        cy.task('log','Director:'+text);
                        let dataAsList = common.getDataOutOfJson(data);
                        dataAsList.splice(dataAsList.indexOf(data.businessName), 1);
                        dataAsList.forEach((dataFromJson) => {
                            expect(text.toString()).to.contains(dataFromJson);
                        });

                    });
                }
            });
        });
    }
}
export const addressChange = new AddressChange();