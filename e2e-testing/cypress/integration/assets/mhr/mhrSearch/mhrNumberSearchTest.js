/// <reference types="Cypress" />
import { landingPage } from '../../../../pages/assets/landingPage'
import { mhrSearchPage } from '../../../../pages/assets/mhr/mhrSearchPage'
import mhrNumberData from '../../../../fixtures/assets/mhr/mhrNumberData.json'
import { feeSummaryPage } from '../../../../pages/assets/mhr/feeSummaryPage'
import feeSummaryData from '../../../../fixtures/assets/mhr/feeSummaryData.json'


describe('MHR Search Test Suite ', function () {

    it('MHR Search Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        landingPage.clickLoginDropdown()

        landingPage.bcscLogin(Cypress.env('BCSC_USERNAME'), Cypress.env('BCSC_PASSWORD'))

        mhrSearchPage.selectSearchCategoryDropdown()

        // mhrSearchPage.searchManufacturedHomeRegistrationNumber(mhrNumberData.mhrNumberSearch)

        mhrSearchPage.selectMHRNumber()

        mhrSearchPage.verifyMHRHint(mhrNumberData.mhrNumberSearch)

        mhrSearchPage.setFolioNumber(mhrNumberData.mhrNumberSearch)

        mhrSearchPage.setMHRNumber(mhrNumberData.mhrNumberSearch)

        mhrSearchPage.verifySearchResultsHeader(mhrNumberData.mhrNumberSearch)

        mhrSearchPage.verifyMHRSearchResultsTableBeforeSelection(mhrNumberData.mhrNumberSearch)

        mhrSearchPage.clickReviewAndConfirmButton()

        feeSummaryPage.verifyFeeSummaryModalWithoutHomes(feeSummaryData.mhrNumberWithoutHomes)

        mhrSearchPage.clickBackButton()

        mhrSearchPage.clickSelectAllCheckbox()

        mhrSearchPage.clickReviewAndConfirmButton()

        feeSummaryPage.verifyFeeSummaryModal(feeSummaryData.mhrNumber)

        mhrSearchPage.clickBackButton()

        mhrSearchPage.clickSelectAllLienCheckbox()

        mhrSearchPage.verifyMHRSearchResultsTableAfterSelection(mhrNumberData.mhrNumberSearch)

        mhrSearchPage.clickReviewAndConfirmButton()

        feeSummaryPage.verifyFeeSummaryModal(feeSummaryData.mhrNumberCombo)

        mhrSearchPage.verifyMHRReviewSearchResultScreen(mhrNumberData.mhrNumberSearch)

        mhrSearchPage.verifyFolioNumber(mhrNumberData.mhrNumberSearch)

        mhrSearchPage.clickPayAndDownloadResultButton()

        mhrSearchPage.verifyMHRSearchHistoryTable(mhrNumberData.mhrNumberSearch)

        //NIL Search

        mhrSearchPage.selectSearchCategoryDropdown()

        mhrSearchPage.selectMHRNumber()

        mhrSearchPage.verifyMHRHint(mhrNumberData.mhrNumberSearch)

        mhrSearchPage.setFolioNumber(mhrNumberData.mhrNumberSearch)

        mhrSearchPage.setMHRNumber(mhrNumberData.mhrNumberNILSearch)

        mhrSearchPage.verifyNILSearchResultsHeader(mhrNumberData.mhrNumberNILSearch)

        mhrSearchPage.verifyMHRNILSearchTableHeader(mhrNumberData.mhrNumberNILSearch)

        mhrSearchPage.verifyNILSearchResultInfo(mhrNumberData.mhrNumberNILSearch)



    })

})