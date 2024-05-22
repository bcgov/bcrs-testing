import { solepropAlteration } from '../../../pages/entity/solepPropAlteration'
import { loginPage } from '../../../pages/entity/loginPage'
import { generalProp } from '../../../pages/entity/generalProp'


describe('General Prop Registration Alteration', function () {

    it('General Prop Alteration', function () {
      loginPage.visit(Cypress.env('BCRS_DOMAIN'));
      loginPage.verifyLanding();
      loginPage.logWithBCCard();
      loginPage.changeAccount();
      generalProp. verifyGenPropActiveAndClick ();
      solepropAlteration.clickOnViewAndChange ();
      solepropAlteration.verifyAndStartAlteration ();
      solepropAlteration.verifychangeAddress ();
      solepropAlteration.verifychangeContactInfo ();
      generalProp.editDirector ();
      generalProp.addBusinessAlter ();
      solepropAlteration.verifySaveAndResumeFunctionality ();
      solepropAlteration.verifyReviewAndConfirmPage ();
      solepropAlteration.verifyFileAndPay ();
      solepropAlteration.verifyTheFilingIsCompleteAndDocuments ()
    })
})
