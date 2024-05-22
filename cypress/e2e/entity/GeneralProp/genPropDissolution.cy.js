import { loginPage } from '../../../pages/entity/loginPage'
import { generalProp } from '../../../pages/entity/generalProp'
import { soleprop } from '../../../pages/entity/soleProp'
import { firmDissolution } from '../../../pages/entity/firmDissolution'


describe('General Prop Dissolution', function () {

    it('General Prop Dissolution', function () {
      loginPage.visit(Cypress.env('BCRS_DOMAIN'));
      loginPage.verifyLanding()
      loginPage.logWithBCCard()
      loginPage.changeAccount()
      firmDissolution.verifyTheNrIsGeneralProp()
      generalProp.verifyGenPropActiveAndClick()
      firmDissolution. startDissolution()
      firmDissolution.dissolutionDate()
      firmDissolution.certify()
      //soleprop.clickOnFileAndPayAndCompletePayment()
      firmDissolution.verifyTheFilingIsCompleteAndDocuments ()
  })
})