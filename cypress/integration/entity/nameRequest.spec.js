import { decideBusiness } from '../../pages/entity/decideBusiness'
const testData = require('../../fixtures/entity/nameRequestData.json');

let json = testData.newRequestDetailsForm.scenarios;

describe('Name Request ', function () {

        it('create solo propertieorship', function () {
            decideBusiness.visit(Cypress.env('NAME_REQUEST'))
            decideBusiness.verifyElements()
            decideBusiness.clickDropDown()
            decideBusiness.selectStartNewBusinesses()
            decideBusiness.selectTypeOfBusinessInBC()
            decideBusiness.selectViewAllBusinesses()
            decideBusiness.selectSoleProp()
            decideBusiness. enterNameToRequest()
            decideBusiness.checkNameAndReview(testData)
            decideBusiness.submitANameForReview()
            decideBusiness.submissionDetailsForm(testData.submissionDetailsForm)
            decideBusiness.submissionDetailsReviewAndConfirmForm(testData.submissionDetailsReviewAndConfirmForm)
            decideBusiness.continueToPayment()
            decideBusiness.goToPaymentAndReturnToForm(testData.paymentDetails)
  })
})
