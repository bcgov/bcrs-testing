import { loginPage } from '../../../pages/entity/loginPage'
import { bcLimitedRestoration } from '../../../pages/entity/bcLimitedRestoration'
import { benefitCompany } from '../../../pages/entity/bcBenefitCompany'

describe('BC Benefit Company Limited Restoration', function () {

    it('start and complete a Benefit Company  Limited resatoration', function () {
      loginPage.visit(Cypress.env('BCRS_DOMAIN'))
      loginPage.loginWithIdir()
      loginPage.verifyStaffDashboard()
      bcLimitedRestoration.assertAllowableActionsStaff()
      bcLimitedRestoration.startRestoration()
      bcLimitedRestoration.step1Restore()
      bcLimitedRestoration.namesTranslation()
      bcLimitedRestoration.limitedRestoration()
      bcLimitedRestoration.step2Restore()
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