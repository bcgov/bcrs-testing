const data = require('../../fixtures/entity/benefitNumCompany.json');
const testDataPayment = require('../../fixtures/relationship/nameRequestData.json');
import {common} from './common'

export class BenefitNumCompany {
    constructor() {
        this.benefitNumCompanyButton = 'span:contains("Incorporate a Numbered Benefit Company")'
        this.incorporateANumberedCompanyButton = 'button[class*="btn-draft-resume"]'
        this.nameTranslationCheckbox = 'input#name-translation-checkbox'
        this.inputNameTranslation = '#name-translation-input'
        this.doneButton = '#btn-done'
        this.doneButtonShareClass = '.add-share-structure-header ~ div button#btn-done'
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

        //add people and roles form elements
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
        this.mailingProviceDirector = '//div[text()="Mailing Address"]/following-sibling::div[@class="address-wrapper"]//label[text()="Province"]'
        this.deliveryStreetDirector = '//div[text()="Delivery Address"]/following-sibling::div//input[starts-with(@id,"street-address")]'
        this.deliveryCityDirector = '//div[text()="Delivery Address"]/following-sibling::div//label[text()="City"]/following-sibling::input[starts-with(@id,"input")]'
        this.deliveryPostalCodeDirector = '//div[text()="Delivery Address"]/following-sibling::div[@class="address-wrapper"]//label[text()="Postal Code"]/following-sibling::input[starts-with(@id,"input")]'
        this.deliveryCountryDirector = '//div[text()="Delivery Address"]/following-sibling::div[@class="address-wrapper"]//label[text()="Country"]'
        this.deliveryProvinceDirector = '//div[text()="Delivery Address"]/following-sibling::div[@class="address-wrapper"]//label[contains(text(),"Province")]'
        this.addCorporationOrFirm = '#btn-add-corp'
        this.firmName = '#firm-name'
        this.corporateMailingAddressStreet = '[class*="org-name-container"] ~ div [name="address-form"] [id^="street-address"]'
        this.corporateMailingAddressCity = '[class*="org-name-container"] ~ div [name="address-form"] [class*="address-city"] input'
        this.corporateMailingAddressPostalCode = '[class*="org-name-container"] ~ div [name="address-form"] [class*="postal-code"] input'
        this.corporateMailingAddressCountry = '//div[text()="Mailing Address"]/following-sibling::div[@class="address-wrapper"]//label[text()="Country"]'
        this.corporateMailingAddressProvince = '//div[text()="Mailing Address"]/following-sibling::div[@class="address-wrapper"]//label[contains(text(),"Province")]'
        this.createShareStructure = 'a[href="/businesses/create/create-share-structure"][id="review-confirm-btn"]'
        this.addPersonButton = '#btn-add-person'
        this.personFirstName = '#person__first-name'
        this.personLastName  = '#person__last-name'

        //Add share class form
        this.buttonAddShareClass = '#btn-start-add-cp'
        this.shareClassName = 'input[id="txt-name"]'
        this.maxNumOfShares = '#txt-max-shares'
        this.parValueOfShare = '#class-par-value'
        this.currencyDropdown = '#class-currency'
        this.specialRightsCheckbox = '#special-rights-check-box'
        this.buttonIncorporationAgreement = 'a[href="/businesses/create/incorporation-agreement"][id="review-confirm-btn"]'

        //Incorporation Agreement form
        this.confirmIncorporationSampleAgreementOption = '#agreement-type-sample'
        this.buttonReviewAndConfirm = 'a[href="/businesses/create/review-confirm"][id="review-confirm-btn"]'

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


        this.buttonViewDocuments = '//span[contains(text(),"View Documents")]'

        this.checkboxDefineCompanySameAsMailing = '//label[contains(text(),"Same as Mailing Address")]/preceding-sibling::div/input'
        this.checkboxPeopleAndRoleSameAsMailing = '//label[contains(text(),"same as Mailing Address")]/preceding-sibling::div/input'
        this.payByCreditCardCheckbox = '.payment-view-content input[role="checkbox"]';
        this.payNowButton = '//button/span[contains(text(),"Pay Now")]';
        this.downloadButtons = '//button[contains(@class,"download-one-btn")]';
        this.reviewFormContent = '.row div div[class*="summary-container"]';
        this.optionCanadaInDropdown = '//div[contains(@class,"menuable__content__active")]//div[@role="listbox"]//div[text()="Canada"]';
        this.optionBritishColumbiaInDropdown = '//div[contains(@class,"menuable__content__active")]//div[@role="listbox"]//div[text()="British Columbia"]';
    }

    navigateToBenefitNumCompanyDashboard() {
        cy.get(this.benefitNumCompanyButton).click({force: true});
    }

    navigateToIncorporationApplication() {
        cy.get(this.incorporateANumberedCompanyButton).click({force: true});
    }

    fillDefineYourCompanyForm() {
        cy.get(this.nameTranslationCheckbox).click({force: true});
        cy.get(this.inputNameTranslation).clear().type('Unique Translated name ' + common.getRandomString());
        cy.get(this.doneButton).scrollIntoView().click({force: true});
        this.fillMailingAddressDefineCompany();
        cy.xpath(this.checkboxDefineCompanySameAsMailing).invoke('attr', 'aria-checked').then((checked) => {
            if (checked === 'true')
                cy.xpath(this.checkboxDefineCompanySameAsMailing).click({force: true});
        });
        this.fillDeliveryAddressDefineCompany();
        this.fillContactInformation();
        cy.get(this.buttonAddPeopleAndRoles).scrollIntoView().click({force: true});
    }

    fillPeopleAndRolesForm() {
        cy.get(this.addCompletingParty).click({force: true});
        //cy.get(this.addDirector).click({force: true});
        this.fillMailingAddressCompletingParty();
        cy.get(this.doneButton).scrollIntoView().click({force: true});
        cy.get(this.addPersonButton).click({force:true});
        cy.get(this.personFirstName).type('Director First '+common.getRandomString());
        cy.get(this.personLastName).type('Director Last '+common.getRandomString());
        cy.get(this.addDirector).click({force: true});
        this.fillMailingAddressPartyDirector();
        cy.xpath(this.checkboxPeopleAndRoleSameAsMailing).invoke('attr', 'aria-checked').then((checked) => {
            if (checked === 'true')
                cy.xpath(this.checkboxPeopleAndRoleSameAsMailing).click({force: true});
        })
        this.fillDeliveryAddressPartyDirector();
        cy.get(this.doneButton).scrollIntoView().click({force: true});
        cy.get(this.addCorporationOrFirm).click({force: true});
        cy.get(this.firmName).clear().type('Unique firm ' + common.getRandomString());
        this.fillCorporationAndFirmMailingAddress();
        cy.get(this.doneButton).scrollIntoView().click({force: true});
        cy.get(this.createShareStructure).scrollIntoView().click({force: true});
    }

    fillCreateShareStructureForm() {
        cy.get(this.buttonAddShareClass).click({force: true});
        cy.get(this.shareClassName).clear().type('S Class ' + common.getRandomString());
        this.fillSharesForm();
        cy.get(this.buttonIncorporationAgreement).scrollIntoView().click({force: true});
    }

    fillIncorporationAgreementForm() {
        cy.get(this.confirmIncorporationSampleAgreementOption).click({force: true});
        cy.get(this.buttonReviewAndConfirm).scrollIntoView().click({force: true});
    }

    reviewAndConfirmForm() {
        let dataAsList = common.getDataOutOfJson(data);
        dataAsList.splice(dataAsList.indexOf(data.fillDefineYourCompanyForm.registered_office_address.delivery.street), 1);
        dataAsList.splice(dataAsList.indexOf(data.fillDefineYourCompanyForm.registered_office_address.delivery.city), 1);
        dataAsList.splice(dataAsList.indexOf(data.fillDefineYourCompanyForm.registered_office_address.delivery.postal_code), 1);
        dataAsList.forEach((dataFromJson) => {
            cy.get(this.reviewFormContent).contains(dataFromJson).should('be.visible');
        });
    }

    doPaymentAndVerifyPdf() {
        cy.get(this.certifyCheckbox).scrollIntoView().click({force: true});
        cy.wait(2000);
        cy.get(this.buttonFileAndPay).scrollIntoView().click({force: true});
        cy.get(this.payByCreditCardCheckbox).click({force: true});
        cy.xpath(this.payNowButton).click({force: true});
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
                        cy.task('log', text);
                        expect(JSON.stringify(text)).to.contains('351.50');
                        expect(JSON.stringify(text)).to.contains(new Date().toISOString().slice(0, 10));
                        expect(JSON.stringify(text)).to.contains('Credit Card');
                    });
                } else if (file.includes('Incorporation Application')) {
                    cy.task('getPdfContents', 'cypress/downloads/' + file).then((text) => {
                        let dataAsList = common.getDataOutOfJson(data);
                        dataAsList.splice(dataAsList.indexOf(data.fillDefineYourCompanyForm.registered_office_contact.email), 1);
                        dataAsList.splice(dataAsList.indexOf(data.fillDefineYourCompanyForm.registered_office_contact.phone), 1);
                        dataAsList.splice(dataAsList.indexOf(data.fillDefineYourCompanyForm.name_translation), 1);
                        dataAsList.forEach((dataFromJson) => {
                            expect(JSON.stringify(text)).to.contains(dataFromJson);
                        });

                    });
                }
                else if (file.includes('Notice Of Articles')) {
                    cy.task('getPdfContents', 'cypress/downloads/' + file).then((text) => {
                        let dataAsList = common.getDataOutOfJson(data);
                        dataAsList.splice(dataAsList.indexOf(data.fillDefineYourCompanyForm.registered_office_contact.email), 1);
                        dataAsList.splice(dataAsList.indexOf(data.fillDefineYourCompanyForm.registered_office_contact.phone), 1);
                        dataAsList.splice(dataAsList.indexOf(data.addPeopleAndRolesForm.corporation_and_firm.mailing.street), 1);
                        dataAsList.splice(dataAsList.indexOf(data.addPeopleAndRolesForm.corporation_and_firm.mailing.city), 1);
                        dataAsList.splice(dataAsList.indexOf(data.addPeopleAndRolesForm.corporation_and_firm.mailing.postal_code), 1);
                        dataAsList.splice(dataAsList.indexOf(data.fillDefineYourCompanyForm.name_translation), 1);
                        dataAsList.forEach((dataFromJson) => {
                            expect(JSON.stringify(text)).to.contains(dataFromJson);
                        });
                    });
                }
            });
        });

    }

    verifyResumeAndDelete() {
        cy.get(this.resumeDraft).click({force: true});
        cy.get(this.reviewAndConfirmPage).click({force: true});
        let dataAsList = common.getDataOutOfJson(data);
        dataAsList.splice(dataAsList.indexOf(data.fillDefineYourCompanyForm.registered_office_address.delivery.street), 1);
        dataAsList.splice(dataAsList.indexOf(data.fillDefineYourCompanyForm.registered_office_address.delivery.city), 1);
        dataAsList.splice(dataAsList.indexOf(data.fillDefineYourCompanyForm.registered_office_address.delivery.postal_code), 1);
        dataAsList.forEach((dataFromJson) => {
            cy.get(this.reviewFormContent).contains(dataFromJson).should('be.visible');
        });
        cy.get(this.buttonSaveAndResume).click({force: true});
        cy.get(this.dropMenuDeleteCorpApp).click({force: true});
        cy.get(this.optionDeleteIncorporationApplication).click({force: true});
        cy.get(this.confirmDelete).click({force: true});
    }

    fillSharesForm() {
        cy.get(this.maxNumOfShares).clear().type(data.shareClass.max_share);
        cy.get(this.parValueOfShare).clear().type(data.shareClass.par_share);
        cy.get(this.currencyDropdown).click({force: true});
        cy.get('div[role="listbox"] div:contains("' + data.shareClass.currency + '")').click({force: true});
        cy.get(this.specialRightsCheckbox).click({force: true});
        cy.wait(2000);
        cy.get(this.doneButtonShareClass).scrollIntoView().click({force: true});
    }

    fillMailingAddressDefineCompany() {
        let street_name = data.fillDefineYourCompanyForm.registered_office_address.mailing.street;
        cy.get(this.mailingStreet).clear().type(street_name + '{backspace}');
        cy.wait(500);
        cy.get(this.mailingStreet).type(street_name.substr(street_name.length - 1));
        cy.xpath('//div[@title="' + data.fillDefineYourCompanyForm.registered_office_address.mailing.street + '"]').click({force: true});
        cy.get(this.mailingCity).clear().type(data.fillDefineYourCompanyForm.registered_office_address.mailing.city);
        cy.get(this.mailingPostalCode).clear().type(data.fillDefineYourCompanyForm.registered_office_address.mailing.postal_code);
        cy.xpath(this.mailingCountry).click({force: true});
        cy.wait(2000);
        cy.xpath(this.optionCanadaInDropdown).click({force: true});
        cy.xpath(this.mailingProvince).click({force: true});
        cy.wait(2000);
        cy.xpath(this.optionBritishColumbiaInDropdown).click({force: true});
    }

    fillDeliveryAddressDefineCompany() {
        let street_name = data.fillDefineYourCompanyForm.registered_office_address.delivery.street;
        cy.xpath(this.deliveryStreet).clear().type(street_name + '{backspace}');
        cy.wait(500);
        cy.xpath(this.deliveryStreet).type(street_name.substr(street_name.length - 1));
        cy.xpath('//div[@title="' + data.fillDefineYourCompanyForm.registered_office_address.delivery.street + '"]').click({force: true});
        cy.xpath(this.deliveryCity).clear().type(data.fillDefineYourCompanyForm.registered_office_address.delivery.city);
        cy.xpath(this.deliveryPostalCode).clear().type(data.fillDefineYourCompanyForm.registered_office_address.delivery.postal_code);
        cy.xpath(this.deliveryCountry).click({force: true});
        cy.wait(2000);
        cy.xpath(this.optionCanadaInDropdown).click({force: true});
        cy.xpath(this.deliveryProvince).click({force: true});
        cy.wait(2000);
        cy.xpath(this.optionBritishColumbiaInDropdown).click({force: true});
    }

    fillContactInformation() {
        cy.get(this.contactEmail).clear().type(data.fillDefineYourCompanyForm.registered_office_contact.email);
        cy.get(this.confirmContactEmail).clear().type(data.fillDefineYourCompanyForm.registered_office_contact.email);
        cy.get(this.phoneNumber).clear().type(data.fillDefineYourCompanyForm.registered_office_contact.phone);
    }

    fillMailingAddressPartyDirector() {
        let street_name = data.addPeopleAndRolesForm.party_address_director.mailing.street;
        cy.xpath(this.mailingStreetDirector).clear().type(street_name + '{backspace}');
        cy.wait(500);
        cy.xpath(this.mailingStreetDirector).type(street_name.substr(street_name.length - 1));
        cy.xpath('//div[@title="' + street_name + '"]').click({force: true});
        cy.xpath(this.mailingCityDirector).clear().type(data.addPeopleAndRolesForm.party_address_director.mailing.city);
        cy.xpath(this.mailingPostalCodeDirector).clear().type(data.addPeopleAndRolesForm.party_address_director.mailing.postal_code);
        cy.xpath(this.mailingCountryDirector).click({force: true});
        cy.wait(2000);
        cy.xpath(this.optionCanadaInDropdown).click({force: true});
        cy.xpath(this.mailingProviceDirector).click({force: true});
        cy.wait(2000);
        cy.xpath(this.optionBritishColumbiaInDropdown).click({force: true});
    }

    fillDeliveryAddressPartyDirector() {
        let street_name = data.addPeopleAndRolesForm.party_address_director.delivery.street;
        cy.xpath(this.deliveryStreetDirector).clear().type(street_name + '{backspace}');
        cy.wait(500);
        cy.xpath(this.deliveryStreetDirector).type(street_name.substr(street_name.length - 1));
        cy.xpath('//div[@title="' + street_name + '"]').click({force: true});
        cy.xpath(this.deliveryCityDirector).clear().type(data.addPeopleAndRolesForm.party_address_director.delivery.city);
        cy.xpath(this.deliveryPostalCodeDirector).clear().type(data.addPeopleAndRolesForm.party_address_director.delivery.postal_code);
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

    fillCorporationAndFirmMailingAddress() {
        let street_name = data.addPeopleAndRolesForm.corporation_and_firm.mailing.street;
        cy.get(this.corporateMailingAddressStreet).clear().type(street_name + '{backspace}');
        cy.wait(500);
        cy.get(this.corporateMailingAddressStreet).type(street_name.substr(street_name.length - 1));
        cy.xpath('//div[@title="' + data.addPeopleAndRolesForm.corporation_and_firm.mailing.street + '"]').click({force: true});
        cy.get(this.corporateMailingAddressCity).clear().type(data.addPeopleAndRolesForm.corporation_and_firm.mailing.city);
        cy.get(this.corporateMailingAddressPostalCode).clear().type(data.addPeopleAndRolesForm.corporation_and_firm.mailing.postal_code);
        cy.xpath(this.corporateMailingAddressCountry).click({force: true});
        cy.xpath(this.optionCanadaInDropdown).click({force: true});
        cy.xpath(this.corporateMailingAddressProvince).click({force: true});
        cy.wait(2000);
        cy.xpath(this.optionBritishColumbiaInDropdown).click({force: true});
    }
}

export const benefitNumCompany = new BenefitNumCompany();
