import { loginPage } from '../../../pages/entity/loginPage'
import { benefitCompany } from '../../../pages/entity/bcBenefitCompany';
import { benefitCompanyAlteration } from '../../../pages/entity/bcBenefitCompanyAlteration';
import { addressChange} from '../../../pages/entity/bcAddressChange';

describe('BC Benefit Company Director Change', function () {

    it('start and complete a Benefit Company  Director Change', function () {
      loginPage.visit(Cypress.env('BCRS_DOMAIN'));
      loginPage.verifyLanding();
      loginPage.logWithBCCard();
      benefitCompany.changeAccountBen();
      benefitCompanyAlteration.verifyBenefitCompanyActiveAndClick ();
      addressChange.clickAddChange ();
      addressChange.assertAddDialog ();
      addressChange.startAddChange ();
      addressChange.verifyFeeSummary ();
      addressChange.verifyResumefunctionality ();
      addressChange.verifyTheFilingIsCompleteAndDocuments ();
    });
});