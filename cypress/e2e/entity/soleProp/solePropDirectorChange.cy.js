import { soleprop } from "../../../pages/entity/soleProp"
import { solepropAlteration } from '../../../pages/entity/solepPropAlteration'
import { loginPage } from '../../../pages/entity/loginPage'

describe('Sole Prop Director Change', function () {

    it('SoleProp Director Change', function () {
      loginPage.visit(Cypress.env('BCRS_DOMAIN'));
      loginPage.verifyLanding();
      loginPage.logWithBCCard();
      solepropAlteration.verifySolePropActiveAndClick();
      solepropAlteration.verifyDirectorChange ();
      solepropAlteration.verifyDirectorAddChange ();
      solepropAlteration.verifySaveAndResumeAndChangesSaved ();
      solepropAlteration.verifyReviewAndConfirmPage ();
      solepropAlteration.verifyFileAndPay ();
      solepropAlteration.verifyTheFilingIsCompleteAndDocuments ();
      solepropAlteration.verifyDirectorChangeOnDashboard ()
    })
})