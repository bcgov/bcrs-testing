import { loginPage } from '../../../pages/entity/loginPage'
import { corpAssn } from '../../../pages/entity/coperative'
import { benefitCompany } from '../../../pages/entity/bcBenefitCompany'


describe('Coperative  Assosciation Registration', function () {

    it('start and complete a Coperative Association  Registration', function () {
      loginPage.visit(Cypress.env('BCRS_DOMAIN'))
      loginPage.verifyLanding()
      loginPage.logWithBCCard()
      corpAssn.changeAccountCoop()
      corpAssn.verifyTheNrIsCoop()
      corpAssn.startCoopFiling()
      benefitCompany.surveyDialog()
      corpAssn.corpAssnType ()
      benefitCompany.fillOfficeAddress()
      benefitCompany.fillRegisterContactInfo()
      benefitCompany. moveToNextPage()
      benefitCompany.fillCompletingParty()
      corpAssn.fillDirectorInfo('directorInfo1')
      corpAssn.fillDirectorInfo('directorInfo2')
      corpAssn.fillDirectorInfo('directorInfo3')
      benefitCompany. moveToNextPage()
      corpAssn.fileUpload()
      benefitCompany. moveToNextPage()
      corpAssn.uploadMemorandumForm()
      benefitCompany. moveToNextPage()
      
    })
})