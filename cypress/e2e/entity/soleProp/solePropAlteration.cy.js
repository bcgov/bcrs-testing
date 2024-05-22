import { solepropAlteration } from '../../../pages/entity/solepPropAlteration'
import { loginPage } from '../../../pages/entity/loginPage'


describe('Sole Prop Registration Alteration', function () {

    it('SoleProp Alteration', function () {
      loginPage.visit(Cypress.env('BCRS_DOMAIN'));
      loginPage.verifyLanding();
      loginPage.logWithBCCard();
      solepropAlteration.verifySolePropActiveAndClick();
      solepropAlteration.clickOnViewAndChange ();
      solepropAlteration.verifyAndStartAlteration ();
      solepropAlteration.verifychangeAddress ();
      solepropAlteration.verifychangeContactInfo ();
      solepropAlteration.verifyDirectorChangeAlter ();
      solepropAlteration.verifySaveAndResumeFunctionality ();
      solepropAlteration.verifyReviewAndConfirmPage ();
      solepropAlteration.verifyFileAndPay ();
      solepropAlteration.verifyTheFilingIsCompleteAndDocuments ()
    })
})