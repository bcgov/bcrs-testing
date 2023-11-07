import {addressChange} from '../../pages/entity/addressChange'
import {directorChange} from "../../pages/entity/directorChange";
let data = require('../../fixtures/relationship/addressChange.json');

describe('Validate address change of numbered benefit company', function () {
    before(function () {
        Cypress.config('taskTimeout', 300000);
        cy.task('deleteDownloadsFolder');
        cy.task('log', 'Test started');
        cy.loginApp(Cypress.env('BCRS_LOGIN_DEV'));
        cy.visit(Cypress.env('BCRS_DOMAIN_DEV') + Cypress.env('DECIDE_BUSINESS_ENDPOINT'));
        cy.wait(4000);

    });
    it('Verify address change functionality', function () {
        addressChange.navigateToChangeAddressPage(data.businessName);
        cy.get(addressChange.changeAddressButton).click({force:true});
        addressChange.fillDeliveryAddressChangeAddress();
        addressChange.fillMailingAddressChangeAddress();
        cy.get(addressChange.updateButton).click({force:true});
        cy.get(addressChange.resetAddressChange).should('be.visible');
        addressChange.proceedToPayment();
        cy.xpath(addressChange.getTitleOfFiling).should('be.visible');
        addressChange.downloadAndVerifyPdfs();
        cy.xpath(addressChange.pendingStatusAddressChange).should('be.visible');
    });
});
