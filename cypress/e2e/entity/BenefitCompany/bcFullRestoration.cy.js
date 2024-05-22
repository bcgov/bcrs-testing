import { loginPage } from '../../../pages/entity/loginPage'
import { bcLimitedRestoration } from '../../../pages/entity/bcLimitedRestoration'
import { benefitCompany } from '../../../pages/entity/bcBenefitCompany'

describe('BC Benefit Company Full Restoration', function () {

    it('start and complete a Benefit Company  Full resatoration', function () {
      loginPage.visit(Cypress.env('BCRS_DOMAIN'))
      loginPage.loginWithIdir()
      loginPage.verifyStaffDashboard()
      bcLimitedRestoration.assertAllowableActionsStaff()
      bcLimitedRestoration.startRestoration()
      bcLimitedRestoration.step1Restore()
      bcLimitedRestoration.namesTranslation()
      bcLimitedRestoration.fullRestoration()
      bcLimitedRestoration.moveToNxtPage()
      bcLimitedRestoration.addBusinessRestoration()
      bcLimitedRestoration.moveToNxtPage()
      bcLimitedRestoration.step3Restore()
      benefitCompany.fillRegisterContactInfo()
      bcLimitedRestoration.moveToNxtPage()
      bcLimitedRestoration.verifyChangesSaved()
      bcLimitedRestoration.fillCertifyBlock()
      bcLimitedRestoration. verifyFeeSummary()
      bcLimitedRestoration.staffNoFee()
      bcLimitedRestoration.verifyTheFilingIsCompleteAndDocuments()

    })
})
