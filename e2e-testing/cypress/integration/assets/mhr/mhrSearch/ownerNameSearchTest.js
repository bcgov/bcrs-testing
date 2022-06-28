/// <reference types="Cypress" />
import { landingPage } from '../../../../pages/assets/landingPage'
import { mhrSearchPage } from '../../../../pages/assets/mhr/mhrSearchPage'
import ownerNameData from '../../../../fixtures/assets/mhr/ownerNameData.json'
import { feeSummaryPage } from '../../../../pages/assets/mhr/feeSummaryPage'
import feeSummaryData from '../../../../fixtures/assets/mhr/feeSummaryData.json'
import mhrNumberData from '../../../../fixtures/assets/mhr/mhrNumberData.json'

describe('MHR Search Test Suite ', function () {

    it('MHR Search Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        landingPage.clickLoginDropdown()

        landingPage.bcscLogin(Cypress.env('BCSC_USERNAME'), Cypress.env('BCSC_PASSWORD'))

        mhrSearchPage.selectSearchCategoryDropdown()

        //mhrSearchPage.searchOwnerName(ownerNameData.ownerNameSearch)

        mhrSearchPage.selectOwnerName()

        mhrSearchPage.verifyOwnerNameHint(ownerNameData.ownerNameSearch)

        mhrSearchPage.setFolioNumber(ownerNameData.ownerNameSearch)

        mhrSearchPage.setOwnerName(ownerNameData.ownerNameSearch)

        mhrSearchPage.verifySearchResultsHeader(ownerNameData.ownerNameSearch)

        mhrSearchPage.verifyOwnerNameSearchResultsTableBeforeSelection(ownerNameData.ownerNameSearch)

        mhrSearchPage.clickReviewAndConfirmButton()

        feeSummaryPage.verifyFeeSummaryModalWithoutHomes(feeSummaryData.mhrNumberWithoutHomes)

        mhrSearchPage.clickBackButton()

        mhrSearchPage.clickSelectAllCheckbox()

        mhrSearchPage.clickReviewAndConfirmButton()

        feeSummaryPage.verifyFeeSummaryModal(feeSummaryData.ownerName)

        mhrSearchPage.clickBackButton()

        mhrSearchPage.clickSelectAllLienCheckbox()

        mhrSearchPage.verifyOWnerNameSearchResultsTableAfterSelection(ownerNameData.ownerNameSearch)

        mhrSearchPage.clickReviewAndConfirmButton()

        feeSummaryPage.verifyFeeSummaryModal(feeSummaryData.ownerNameCombo)

        mhrSearchPage.verifyOwnerNameReviewSearchResultScreen(ownerNameData.ownerNameSearch)

        mhrSearchPage.verifyFolioNumber(mhrNumberData.mhrNumberSearch)

        mhrSearchPage.clickPayAndDownloadResultButton()

        mhrSearchPage.verifyOwnerNameSearchHistoryTable(ownerNameData.ownerNameSearch)

        //NIL Search

        mhrSearchPage.selectSearchCategoryDropdown()

        mhrSearchPage.selectOwnerName()

        mhrSearchPage.verifyOwnerNameHint(ownerNameData.ownerNameSearch)

        mhrSearchPage.setFolioNumber(ownerNameData.ownerNameSearch)

        mhrSearchPage.setOwnerName(ownerNameData.ownerNameNILSearch)

        mhrSearchPage.verifyNILSearchResultsHeader(mhrNumberData.mhrNumberNILSearch)

        mhrSearchPage.verifyOwnerNameNILSearchTableHeader(ownerNameData.ownerNameNILSearch)

        mhrSearchPage.verifyNILSearchResultInfo(mhrNumberData.mhrNumberNILSearch)

        mhrSearchPage.clickSearchResultsBreadcrumb(mhrNumberData.mhrNumberSearch)

    })

})