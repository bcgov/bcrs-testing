import {directorChange} from '../../pages/entity/directorChange'
let data = require('../../fixtures/relationship/directorChange.json');

describe('Validate director change of numbered benefit company', function () {
    before(function () {
        Cypress.config('taskTimeout', 300000);
        cy.task('deleteDownloadsFolder');
        cy.task('log', 'Test started');
        cy.loginApp(Cypress.env('BCRS_LOGIN_DEV'));
        cy.visit(Cypress.env('BCRS_DOMAIN_DEV') + Cypress.env('DECIDE_BUSINESS_ENDPOINT'));
        cy.wait(4000);

    });
    it('Verify director change functionality', function () {
        directorChange.navigateToChangeDirectorPage(data.businessName);
        directorChange.ceaseExistingDirector();
        directorChange.addNewDirector(data.address_new_director1);
        directorChange.addNewDirector(data.address_new_director2);
        directorChange.verifyDirectorsAdded(directorChange.removeChangeDirectorContent(data));
        directorChange.proceedToPayAndVerifyDirectorsAdded(directorChange.removeChangeDirectorContent(data));
        cy.xpath(directorChange.getTitleOfFiling).invoke('text').then((txt)=>{
                if(txt === 'FILED AND PENDING') {
                    cy.xpath(directorChange.returnToDashboard).click({force:true});
                    cy.xpath('//tbody/tr/td/strong[contains(text(),"' + data.businessName + '")]/../../td//span[@class="open-action"]/button').click({force: true});
                    cy.xpath(directorChange.getTitleOfFiling).should('have.text',"FILED AND PAID");
                }
        });
        directorChange.downloadPdfAndVerify(data);
        cy.xpath(directorChange.changeButtonCurrentDirectors).click({force: true});
        directorChange.changeAddressAndVerify(data,2);
        directorChange.changeLegalNameAndVerify(2);
        cy.xpath(directorChange.priceTotal).should('have.text','$0.00');
        directorChange.resumeAndVerifyChanges(directorChange.removeNewDirectorContent(data),2,2);
        directorChange.resumeAndDelete();
    });
});