import {namedCompany} from '../../pages/entity/namedCompany'
import {directorChange} from "../../pages/entity/directorChange";
import dataDirectorChange from "../../fixtures/entity/directorChangeNamedCompany.json";
import dataNamedCompany from "../../fixtures/entity/namedCompany.json";
import {addressChange} from "../../pages/entity/addressChange";

describe('Validate incorporation of numbered benefit company', function () {
    before(function () {
        Cypress.config('taskTimeout', 300000)
        cy.task('deleteDownloadsFolder');
        cy.task('log', 'Test started');
        cy.loginApp(Cypress.env('BCRS_LOGIN_DEV'));
        cy.visit(Cypress.env('BCRS_DOMAIN_DEV') + Cypress.env('DECIDE_BUSINESS_ENDPOINT'));
        cy.wait(4000);
    });
    it('Verify save for later and delete functionality', function () {
        namedCompany.switchAccountTo('Apple Inc');
        namedCompany.navigateToNamedCompanyDashboard();
        namedCompany.proceedToNewFiling()
        namedCompany.fillDefineYourCooperativeDetails();
        namedCompany.fillPeopleAndRolesForm();
        namedCompany.uploadRulesForm();
        namedCompany.uploadMemorandumForm();
        namedCompany.reviewAndConfirmForm();
        cy.get(namedCompany.buttonSaveAndResume).scrollIntoView().click({force: true});
        namedCompany.verifyResumeAndDelete();
        namedCompany.navigateToNamedCompanyDashboardAfterDelete();
        namedCompany.proceedToNewFiling()
        namedCompany.fillDefineYourCooperativeDetails();
        namedCompany.fillPeopleAndRolesForm();
        namedCompany.uploadRulesForm();
        namedCompany.uploadMemorandumForm();
        namedCompany.reviewAndConfirmForm();
        namedCompany.doPaymentAndVerifyPdf();
    });

    it('verify add new director plus address and name change', function (){
        cy.xpath(namedCompany.brandTitle).click({force:true});
        directorChange.navigateToChangeDirectorPage(dataNamedCompany.businessName);
        namedCompany.addNewDirector(dataDirectorChange.address_new_director1);
        namedCompany.addNewDirector(dataDirectorChange.address_new_director2);
        namedCompany.addNewDirector(dataDirectorChange.address_new_director3);
        directorChange.verifyDirectorsAdded(namedCompany.removeChangeDirectorContent(dataDirectorChange));
        directorChange.proceedToPayAndVerifyDirectorsAdded(namedCompany.removeChangeDirectorContent(dataDirectorChange));
        cy.xpath(directorChange.getTitleOfFiling).invoke('text').then((txt)=>{
            if(txt === 'FILED AND PENDING') {
                cy.xpath(directorChange.returnToDashboard).click({force:true});
                cy.xpath('//tbody/tr/td/strong[contains(text(),"' + dataNamedCompany.businessName + '")]/../../td//span[@class="open-action"]/button').click({force: true});
                cy.xpath(directorChange.getTitleOfFiling).should('have.text',"FILED AND PAID");
            }
        });
        directorChange.downloadPdfAndVerify(dataDirectorChange);
        cy.xpath(directorChange.changeButtonCurrentDirectors).click({force: true});
        namedCompany.changeAddressAndVerify(dataDirectorChange,3);
        namedCompany.changeLegalNameAndVerify(3);
        cy.xpath(directorChange.priceTotal).should('have.text','$0.00');
        directorChange.resumeAndVerifyChanges(namedCompany.removeNewDirectorContent(dataDirectorChange),2,2);
        directorChange.resumeAndDelete();
    });

    it('verify office address change', function () {
        cy.xpath(namedCompany.brandTitle).click({force:true});
        namedCompany.navigateToChangeAddressPage(dataNamedCompany.businessName);
        cy.get(addressChange.changeAddressButton).click({force:true});
        addressChange.fillDeliveryAddressChangeAddress();
        addressChange.fillMailingAddressChangeAddress();
        cy.get(addressChange.updateButton).click({force:true});
        cy.get(addressChange.resetAddressChange).should('be.visible');
        addressChange.proceedToPayment();
        cy.xpath(addressChange.getTitleOfFiling).should('be.visible');
        addressChange.downloadAndVerifyPdfs();
    });

});
