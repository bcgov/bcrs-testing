import { loginPage } from '../../../pages/entity/loginPage'
import { generalProp } from '../../../pages/entity/generalProp'
import { soleprop } from '../../../pages/entity/soleProp'
import { solepropAlteration } from '../../../pages/entity/solepPropAlteration'

describe('General Prop Registration', function () {

    it('start and complete a General Prop Registration', function () {
      loginPage.visit(Cypress.env('BCRS_DOMAIN'));
      loginPage.verifyLanding();
      loginPage.logWithBCCard();
      loginPage.changeAccount();
      generalProp.verifyTheNrIsGeneralProp();
      soleprop.startPropFiling();
      soleprop.defineYourBusiness();
      soleprop.mailingAddress();
      soleprop.deliveryAddress();
      soleprop.businessInfo();
      soleprop.startDate();
      soleprop.moveToNextPage();
      soleprop.addCompletingParty();
      generalProp.addPeopleGen();
      soleprop.addBusiness();
      soleprop.confirmCheckbox();
      soleprop.verifySaveAndResumeFunctionality();
      soleprop.verifyTheFilingDetailsAreSaved();
      soleprop.clickOnFileAndPayAndCompletePayment();
      solepropAlteration.verifyTheFilingIsCompleteAndDocuments ()
    })
})