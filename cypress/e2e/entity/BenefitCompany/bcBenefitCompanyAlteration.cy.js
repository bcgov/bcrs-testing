import { loginPage } from '../../../pages/entity/loginPage'
import { benefitCompany } from '../../../pages/entity/bcBenefitCompany';
import { benefitCompanyAlteration } from '../../../pages/entity/bcBenefitCompanyAlteration';

describe('BC Benefit Company Registration', function () {

    it('start and complete a Benefit Company  Registration', function () {
      loginPage.visit(Cypress.env('BCRS_DOMAIN'));
      loginPage.verifyLanding();
      loginPage.logWithBCCard();
      benefitCompany.changeAccountBen();
      benefitCompanyAlteration.verifyBenefitCompanyActiveAndClick ();
      benefitCompanyAlteration.clickOnViewAndChange ();
      benefitCompanyAlteration.changeBusinessType ();
      benefitCompanyAlteration.assertBusinessTypes ();
      benefitCompanyAlteration.selectBusinesstype ();
      benefitCompanyAlteration.changeNamesTranslation ();
      benefitCompanyAlteration.addNamesTranslationAlter ();
      benefitCompanyAlteration.alterContactInfo();
      benefitCompanyAlteration. alterShareClass();
      benefitCompanyAlteration.addResolutionDate ();
      benefitCompanyAlteration.verifyChangesSaved ();
      benefitCompanyAlteration.setAlterDateAndTime ();
      benefitCompanyAlteration.verifyFees ();
      benefitCompanyAlteration.verifyPADPayment ();
      benefitCompanyAlteration.verifyTheFilingIsCompleteAndDocuments();
    })
})