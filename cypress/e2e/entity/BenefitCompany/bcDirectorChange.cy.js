import { loginPage } from '../../../pages/entity/loginPage'
import { benefitCompany } from '../../../pages/entity/bcBenefitCompany';
import { benefitCompanyAlteration } from '../../../pages/entity/bcBenefitCompanyAlteration';
import { directorChange} from '../../../pages/entity/bcDirectorChange';

describe('BC Benefit Company Director Change', function () {

    it('start and complete a Benefit Company  Director Change', function () {
      loginPage.visit(Cypress.env('BCRS_DOMAIN'));
      loginPage.verifyLanding();
      loginPage.logWithBCCard();
      benefitCompany.changeAccountBen();
      benefitCompanyAlteration.verifyBenefitCompanyActiveAndClick ();
      directorChange.clickDirectorChange ();
      directorChange.newDirDate ();
      directorChange.addNewDirector ();
      directorChange.editAddressOfDirector ();
      directorChange.editLegalName ();
      directorChange.verifyChagesAreSaved ();
      directorChange.clickOnReviewAndConfirm ();
      directorChange.verifyTheFilingIsCompleteAndDocuments ();

    });
})