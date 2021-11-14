import {benefitNumCompany} from '../../pages/entity/BenefitNumCompany'

describe('Validate incorporation of numbered benefit company', function () {
    before(function () {
        Cypress.config('taskTimeout', 300000)
        cy.task('deleteDownloadsFolder');
        cy.task('log', 'Test started');
        cy.loginApp();
        cy.visit(Cypress.env('BCRS_DOMAIN') + Cypress.env('DECIDE_BUSINESS_ENDPOINT'));
        cy.wait(4000);

    });
    it('Verify save for later and delete functionality', function () {
        benefitNumCompany.navigateToBenefitNumCompanyDashboard();
        benefitNumCompany.navigateToIncorporationApplication();
        benefitNumCompany.fillDefineYourCompanyForm();
        benefitNumCompany.fillPeopleAndRolesForm();
        benefitNumCompany.fillCreateShareStructureForm();
        benefitNumCompany.fillIncorporationAgreementForm();
        benefitNumCompany.reviewAndConfirmForm();
        cy.get(benefitNumCompany.buttonSaveAndResume).scrollIntoView().click({force: true});
        benefitNumCompany.verifyResumeAndDelete();
        benefitNumCompany.navigateToBenefitNumCompanyDashboard();
        benefitNumCompany.navigateToIncorporationApplication();
        benefitNumCompany.fillDefineYourCompanyForm();
        benefitNumCompany.fillPeopleAndRolesForm();
        benefitNumCompany.fillCreateShareStructureForm();
        benefitNumCompany.fillIncorporationAgreementForm();
        benefitNumCompany.reviewAndConfirmForm();
        benefitNumCompany.doPaymentAndVerifyPdf();
    });

});