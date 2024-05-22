import { loginPage } from '../../../pages/entity/loginPage'
import { bcDissolutionFiling } from '../../../pages/entity/bcDissolution'
import { benefitCompanyAlteration } from '../../../pages/entity/bcBenefitCompanyAlteration'
import { benefitCompany } from '../../../pages/entity/bcBenefitCompany'

describe('BC Benefit Company Dissolution', function () {

    it('start and complete a Benefit Company  Dissolution', function () {
      loginPage.visit(Cypress.env('BCRS_DOMAIN'));
      loginPage.verifyLanding();
      loginPage.logWithBCCard();
      benefitCompany.changeAccountBen();
      benefitCompanyAlteration.verifyBenefitCompanyActiveAndClick ();
      bcDissolutionFiling.assertAllowableActions ();
      bcDissolutionFiling.startDissolution ();
      bcDissolutionFiling.step1Dissolution ();
      bcDissolutionFiling.step2Dissolution ();
      bcDissolutionFiling.step3Dissolution ();
      bcDissolutionFiling.verifySaveAndResumeFunctionality ();
      bcDissolutionFiling.verifyFeeSummary ();
      bcDissolutionFiling.reviewAndConfirmStep ();
      bcDissolutionFiling.verifyTheFilingIsCompleteAndDocuments ();
    });
});