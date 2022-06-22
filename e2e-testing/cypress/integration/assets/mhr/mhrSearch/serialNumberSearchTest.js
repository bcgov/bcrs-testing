/// <reference types="Cypress" />
import { landingPage } from '../../../../pages/assets/landingPage'
import { mhrSearchPage } from '../../../../pages/assets/mhr/mhrSearchPage'
import serialNumberData from '../../../../fixtures/assets/mhr/serialNumberData.json'
import { feeSummaryPage } from '../../../../pages/assets/mhr/feeSummaryPage'
import feeSummaryData from '../../../../fixtures/assets/mhr/feeSummaryData.json'
import mhrNumberData from '../../../../fixtures/assets/mhr/mhrNumberData.json'

describe('MHR Search Test Suite ', function () {

    it('MHR Search Test Case', function () {

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

})