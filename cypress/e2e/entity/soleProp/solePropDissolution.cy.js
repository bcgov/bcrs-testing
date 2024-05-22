import { loginPage } from '../../../pages/entity/loginPage'
import { soleprop } from '../../../pages/entity/soleProp'
import { solepropAlteration } from '../../../pages/entity/solepPropAlteration'
import { firmDissolution } from '../../../pages/entity/firmDissolution'


describe('Sole Prop Dissolution', function () {

  it('Sole Prop Dissolution', function () {
    loginPage.visit(Cypress.env('BCRS_DOMAIN'));
    loginPage.verifyLanding()
    loginPage.logWithBCCard()
    firmDissolution.verifyTheNrIsSoleProp()
    solepropAlteration.verifySolePropActiveAndClick()
    firmDissolution. startDissolution()
    firmDissolution.dissolutionDate()
    firmDissolution.certify()
    //soleprop.clickOnFileAndPayAndCompletePayment()
    firmDissolution.verifyTheFilingIsCompleteAndDocuments ()
  })
})