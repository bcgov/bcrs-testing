import { loginPage } from '../../../pages/entity/loginPage'
import { soleprop } from '../../../pages/entity/soleProp'


describe('Sole Prop Registration', function () {

  it('Login Function', function () {
    loginPage.visit(Cypress.env('BCRS_DOMAIN'));
    loginPage.verifyLanding();
    loginPage.logWithBCCard();
    soleprop.verifyTheNrIsSoleProp();
    soleprop.startPropFiling();
    soleprop.defineYourBusiness();
    soleprop.mailingAddress();
    soleprop.deliveryAddress();
    soleprop.businessInfo();
    soleprop.startDate();
    soleprop.moveToNextPage();
    soleprop.addCompletingParty();
    soleprop.addPeoples();
    soleprop.confirmCheckbox();
    soleprop.verifySaveAndResumeFunctionality();
    soleprop.verifyTheFilingDetailsAreSaved();
    soleprop.clickOnFileAndPayAndCompletePayment();
  });
});