/// <reference types="Cypress" />
import { landingPage } from '../../../../pages/assets/landingPage'
import { mhrSearchPage } from '../../../../pages/assets/mhr/mhrSearchPage'
import ownerNameData from '../../../../fixtures/assets/mhr/ownerNameData.json'
import { feeSummaryPage } from '../../../../pages/assets/mhr/feeSummaryPage'
import feeSummaryData from '../../../../fixtures/assets/mhr/feeSummaryData.json'
import mhrNumberData from '../../../../fixtures/assets/mhr/mhrNumberData.json'

describe('MHR Search Test Suite ', function () {


    it('Owner Name Single Search Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        landingPage.clickLoginDropdown()

        landingPage.bcscLogin(Cypress.env('BCSC_USERNAME'), Cypress.env('BCSC_PASSWORD'))

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        mhrSearchPage.selectSearchCategoryDropdown()

        mhrSearchPage.selectOwnerName()

        mhrSearchPage.setFolioNumber(ownerNameData.ownerNameSingleSearch)

        mhrSearchPage.setOwnerName(ownerNameData.ownerNameSingleSearch)

        mhrSearchPage.verifySearchResultsHeader(ownerNameData.ownerNameSingleSearch)

        mhrSearchPage.verifyOwnerNameSearchResultsTableBeforeSelection(ownerNameData.ownerNameSingleSearch)

        mhrSearchPage.clickReviewAndConfirmButton()

        feeSummaryPage.verifyFeeSummaryModalWithoutHomes(feeSummaryData.mhrNumberWithoutHomes)

        mhrSearchPage.clickBackButton()

        mhrSearchPage.clickSelectAllCheckbox()

        mhrSearchPage.clickReviewAndConfirmButton()

        feeSummaryPage.verifyFeeSummaryModal(feeSummaryData.ownerName)

        mhrSearchPage.clickBackButton()

        mhrSearchPage.clickSelectAllLienCheckbox()

        mhrSearchPage.verifyOWnerNameSearchResultsTableAfterSelection(ownerNameData.ownerNameSingleSearch)

        mhrSearchPage.clickReviewAndConfirmButton()

        feeSummaryPage.verifyFeeSummaryModal(feeSummaryData.mhrNumberCombo)

        mhrSearchPage.verifyOwnerNameReviewSearchResultScreen(ownerNameData.ownerNameSingleSearch)

        mhrSearchPage.verifyFolioNumber(mhrNumberData.mhrNumberSearch)

        mhrSearchPage.clickPayAndDownloadResultButton()

        mhrSearchPage.verifyOwnerNameSearchHistoryTable(ownerNameData.ownerNameSingleSearch)
    })


    it('Owner Name Multiple Search Test Case', function () {

        mhrSearchPage.selectSearchCategoryDropdown()

        //mhrSearchPage.searchOwnerName(ownerNameData.ownerNameSearch)

        mhrSearchPage.selectOwnerName()

        //mhrSearchPage.verifyOwnerNameHint(ownerNameData.ownerNameSearch)

        mhrSearchPage.setFolioNumber(ownerNameData.ownerNameMultipleResults)

        mhrSearchPage.setOwnerName(ownerNameData.ownerNameMultipleResults)

        mhrSearchPage.verifySearchResultsHeader(ownerNameData.ownerNameMultipleResults)

        mhrSearchPage.verifyOwnerNameSearchResultsTableBeforeSelection(ownerNameData.ownerNameMultipleResults)

        mhrSearchPage.clickReviewAndConfirmButton()

        feeSummaryPage.verifyFeeSummaryModalWithoutHomes(feeSummaryData.mhrNumberWithoutHomes)

        mhrSearchPage.clickBackButton()

        mhrSearchPage.clickSelectAllCheckbox()

        mhrSearchPage.clickReviewAndConfirmButton()

        feeSummaryPage.verifyFeeSummaryModal(feeSummaryData.ownerNameMultipleResults)

        mhrSearchPage.clickBackButton()

        mhrSearchPage.clickSelectAllLienCheckbox()

        mhrSearchPage.verifyOWnerNameSearchResultsTableAfterSelection(ownerNameData.ownerNameMultipleResults)

        mhrSearchPage.clickReviewAndConfirmButton()

        feeSummaryPage.verifyFeeSummaryModal(feeSummaryData.ownerNameCombo)

        mhrSearchPage.verifyOwnerNameReviewSearchResultScreen(ownerNameData.ownerNameMultipleResults)

        mhrSearchPage.verifyFolioNumber(mhrNumberData.mhrNumberSearch)

        mhrSearchPage.clickPayAndDownloadResultButton()

        mhrSearchPage.verifyOwnerNameSearchHistoryTable(ownerNameData.ownerNameMultipleResults)

    })

    //NIL Search

    it('Owner Name NIL Search Test Case', function () {

        mhrSearchPage.selectSearchCategoryDropdown()

        mhrSearchPage.selectOwnerName()

        //mhrSearchPage.verifyOwnerNameHint(ownerNameData.ownerNameSearch)

        mhrSearchPage.setFolioNumber(ownerNameData.ownerNameMultipleResults)

        mhrSearchPage.setOwnerName(ownerNameData.ownerNameNILSearch)

        mhrSearchPage.verifyNILSearchResultsHeader(mhrNumberData.mhrNumberNILSearch)

        mhrSearchPage.verifyOwnerNameNILSearchTableHeader(ownerNameData.ownerNameNILSearch)

        mhrSearchPage.verifyNILSearchResultInfo(mhrNumberData.mhrNumberNILSearch)

        mhrSearchPage.clickSearchResultsBreadcrumb(mhrNumberData.mhrNumberSearch)

    })

})