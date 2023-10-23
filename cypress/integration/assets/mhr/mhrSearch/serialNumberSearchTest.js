/// <reference types="Cypress" />
import { landingPage } from '../../../../pages/assets/landingPage'
import { mhrSearchPage } from '../../../../pages/assets/mhr/mhrSearchPage'
import serialNumberData from '../../../../fixtures/assets/mhr/serialNumberData.json'
import { feeSummaryPage } from '../../../../pages/assets/mhr/feeSummaryPage'
import feeSummaryData from '../../../../fixtures/assets/mhr/feeSummaryData.json'
import mhrNumberData from '../../../../fixtures/assets/mhr/mhrNumberData.json'

describe('MHR Search Test Suite ', function () {

    it('Serial Number Single Search Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        landingPage.clickLoginDropdown()

        landingPage.bcscLogin(Cypress.env('BCSC_USERNAME'), Cypress.env('BCSC_PASSWORD'))

        mhrSearchPage.selectSearchCategoryDropdown()

        //mhrSearchPage.searchSerialNumber(serialNumberData.serialNumberSearch)

        mhrSearchPage.selectSerialNumber()

        mhrSearchPage.verifySerialNumberHint(serialNumberData.serialNumberSearch)

        mhrSearchPage.setFolioNumber(serialNumberData.serialNumberSearch)

        mhrSearchPage.setSerialNumber(serialNumberData.serialNumberSearch)

        mhrSearchPage.verifySearchResultsHeader(serialNumberData.serialNumberSearch)

        mhrSearchPage.verifySerialNumberSearchResultsTableBeforeSelection(serialNumberData.serialNumberSearch)

        mhrSearchPage.clickReviewAndConfirmButton()

        feeSummaryPage.verifyFeeSummaryModalWithoutHomes(feeSummaryData.mhrNumberWithoutHomes)

        mhrSearchPage.clickBackButton()

        mhrSearchPage.clickSelectAllCheckbox()

        mhrSearchPage.clickReviewAndConfirmButton()

        feeSummaryPage.verifyFeeSummaryModal(feeSummaryData.serialNumber)

        mhrSearchPage.clickBackButton()

        mhrSearchPage.clickSelectAllLienCheckbox()

        mhrSearchPage.verifySerialNumberSearchResultsTableAfterSelection(serialNumberData.serialNumberSearch)

        mhrSearchPage.clickReviewAndConfirmButton()

        feeSummaryPage.verifyFeeSummaryModal(feeSummaryData.serialNumberCombo)

        mhrSearchPage.verifySerialNumberReviewSearchResultScreen(serialNumberData.serialNumberSearch)

        mhrSearchPage.verifyFolioNumber(mhrNumberData.mhrNumberSearch)

        mhrSearchPage.clickPayAndDownloadResultButton()

        mhrSearchPage.verifySerialNumberSearchHistoryTable(serialNumberData.serialNumberSearch)

    })

    //NIL Search

    it('Serial Number NIL Search Test Case', function () {

        mhrSearchPage.selectSearchCategoryDropdown()

        mhrSearchPage.selectSerialNumber()

        mhrSearchPage.verifySerialNumberHint(serialNumberData.serialNumberSearch)

        mhrSearchPage.setFolioNumber(serialNumberData.serialNumberSearch)

        mhrSearchPage.setSerialNumber(serialNumberData.serialNumberNILSearch)

        mhrSearchPage.verifyNILSearchResultsHeader(mhrNumberData.mhrNumberNILSearch)

        mhrSearchPage.verifySerialNumberNILSearchTableHeader(serialNumberData.serialNumberNILSearch)

        mhrSearchPage.verifyNILSearchResultInfo(mhrNumberData.mhrNumberNILSearch)

        mhrSearchPage.clickSearchResultsBreadcrumb(mhrNumberData.mhrNumberSearch)

    })

    //Serial Number Multiple Results

    it('Serial Number Multiple Results Test Case', function () {

        mhrSearchPage.selectSearchCategoryDropdown()

        mhrSearchPage.selectSerialNumber()

        mhrSearchPage.verifySerialNumberHint(serialNumberData.serialNumberSearch)

        mhrSearchPage.setFolioNumber(serialNumberData.serialNumberSearch)

        mhrSearchPage.setSerialNumber(serialNumberData.serialNumberMultipleResults)

        mhrSearchPage.verifySearchResultsHeader(serialNumberData.serialNumberSearch)

        mhrSearchPage.verifySerialNumberMultipleResultsTableBeforeSelection(serialNumberData.serialNumberMultipleResults)

        mhrSearchPage.clickReviewAndConfirmButton()

        feeSummaryPage.verifyFeeSummaryModalWithoutHomes(feeSummaryData.mhrNumberWithoutHomes)

        mhrSearchPage.clickBackButton()

        mhrSearchPage.clickSelectAllCheckbox()

        mhrSearchPage.clickReviewAndConfirmButton()

        feeSummaryPage.verifyFeeSummaryModal(feeSummaryData.serialNumberMultipleResults)

        mhrSearchPage.clickBackButton()

        mhrSearchPage.verifySerialNumberMultipleResultsTableAfterSelection(serialNumberData.serialNumberMultipleResults)

        mhrSearchPage.clickReviewAndConfirmButton()

        mhrSearchPage.verifySerialNumberReviewSearchResultScreen(serialNumberData.serialNumberMultipleResults)

        mhrSearchPage.verifyFolioNumber(mhrNumberData.mhrNumberSearch)

        mhrSearchPage.clickPayAndDownloadResultButton()

        mhrSearchPage.verifySerialNumberSearchHistoryTable(serialNumberData.serialNumberMultipleResults)

    })

    //Serial Number Combo Search

    it('Serial Number Combo Search Test Case', function () {

        mhrSearchPage.selectSearchCategoryDropdown()

        mhrSearchPage.selectSerialNumber()

        mhrSearchPage.verifySerialNumberHint(serialNumberData.serialNumberSearch)

        mhrSearchPage.setFolioNumber(serialNumberData.serialNumberSearch)

        mhrSearchPage.setSerialNumber(serialNumberData.serialNumberComboSearch)

        mhrSearchPage.verifySearchResultsHeader(serialNumberData.serialNumberSearch)

        mhrSearchPage.verifySerialNumberSearchResultsTableBeforeSelection(serialNumberData.serialNumberComboSearch)

        mhrSearchPage.clickReviewAndConfirmButton()

        feeSummaryPage.verifyFeeSummaryModalWithoutHomes(feeSummaryData.mhrNumberWithoutHomes)

        mhrSearchPage.clickBackButton()

        mhrSearchPage.clickSelectAllCheckbox()

        mhrSearchPage.clickReviewAndConfirmButton()

        feeSummaryPage.verifyFeeSummaryModal(feeSummaryData.serialNumber)

        mhrSearchPage.clickBackButton()

        mhrSearchPage.clickSelectAllLienCheckbox()

        mhrSearchPage.verifySerialNumberComboResultsTableAfterSelection(serialNumberData.serialNumberComboSearch)

        mhrSearchPage.clickReviewAndConfirmButton()

        feeSummaryPage.verifyFeeSummaryModal(feeSummaryData.serialNumberComboSearch)

        mhrSearchPage.verifySerialNumberReviewSearchResultScreen(serialNumberData.serialNumberComboSearch)

        mhrSearchPage.verifyFolioNumber(mhrNumberData.mhrNumberSearch)

        mhrSearchPage.clickPayAndDownloadResultButton()

        mhrSearchPage.verifySerialNumberSearchHistoryTable(serialNumberData.serialNumberComboSearch)

    })


})