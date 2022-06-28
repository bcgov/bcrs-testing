/// <reference types="Cypress" />
import { landingPage } from '../../../../pages/assets/landingPage'
import { mhrSearchPage } from '../../../../pages/assets/mhr/mhrSearchPage'
import mhrNumberData from '../../../../fixtures/assets/mhr/mhrNumberData.json'
import { feeSummaryPage } from '../../../../pages/assets/mhr/feeSummaryPage'
import feeSummaryData from '../../../../fixtures/assets/mhr/feeSummaryData.json'
import ownerNameData from '../../../../fixtures/assets/mhr/ownerNameData.json'
import orgNameData from '../../../../fixtures/assets/mhr/orgNameData.json'
import serialNumberData from '../../../../fixtures/assets/mhr/serialNumberData.json'


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

        mhrSearchPage.clickSearchResultsBreadcrumb(mhrNumberData.mhrNumberSearch)

    })

    it('MHR Owner Name Search Test Case', function () {

        // landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        // landingPage.clickLoginDropdown()

        // landingPage.bcscLogin(Cypress.env('BCSC_USERNAME'), Cypress.env('BCSC_PASSWORD'))

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

    it('MHR Organization Name Search Test Case', function () {

        // landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        // landingPage.clickLoginDropdown()

        // landingPage.bcscLogin(Cypress.env('BCSC_USERNAME'), Cypress.env('BCSC_PASSWORD'))

        mhrSearchPage.selectSearchCategoryDropdown()

        //mhrSearchPage.searchOrganizationName(orgNameData.orgNameSearch)

        mhrSearchPage.selectOrgName()

        mhrSearchPage.verifyOrgNameHint(orgNameData.orgNameSearch)

        mhrSearchPage.setFolioNumber(orgNameData.orgNameSearch)

        mhrSearchPage.setOrgName(orgNameData.orgNameSearch)

        mhrSearchPage.verifySearchResultsHeader(orgNameData.orgNameSearch)

        mhrSearchPage.verifyOrgNameSearchResultsTableBeforeSelection(orgNameData.orgNameSearch)

        mhrSearchPage.clickReviewAndConfirmButton()

        feeSummaryPage.verifyFeeSummaryModalWithoutHomes(feeSummaryData.mhrNumberWithoutHomes)

        mhrSearchPage.clickBackButton()

        mhrSearchPage.clickSelectAllCheckbox()

        mhrSearchPage.clickReviewAndConfirmButton()

        feeSummaryPage.verifyFeeSummaryModal(feeSummaryData.orgName)

        mhrSearchPage.clickBackButton()

        mhrSearchPage.clickSelectAllLienCheckbox()

        mhrSearchPage.verifyOrgNameSearchResultsTableAfterSelection(orgNameData.orgNameSearch)

        mhrSearchPage.clickReviewAndConfirmButton()

        feeSummaryPage.verifyFeeSummaryModal(feeSummaryData.orgNameCombo)

        mhrSearchPage.verifyOrgNameReviewSearchResultScreen(orgNameData.orgNameSearch)

        mhrSearchPage.verifyFolioNumber(mhrNumberData.mhrNumberSearch)

        mhrSearchPage.clickPayAndDownloadResultButton()

        mhrSearchPage.verifyOrgNameSearchHistoryTable(orgNameData.orgNameSearch)

        //NIL Search

        mhrSearchPage.selectSearchCategoryDropdown()

        mhrSearchPage.selectOrgName()

        mhrSearchPage.verifyOrgNameHint(orgNameData.orgNameSearch)

        mhrSearchPage.setFolioNumber(orgNameData.orgNameSearch)

        mhrSearchPage.setOrgName(orgNameData.orgNameNILSearch)

        mhrSearchPage.verifyNILSearchResultsHeader(mhrNumberData.mhrNumberNILSearch)

        mhrSearchPage.verifyOrgNameNILSearchTableHeader(orgNameData.orgNameNILSearch)

        mhrSearchPage.verifyNILSearchResultInfo(mhrNumberData.mhrNumberNILSearch)

        mhrSearchPage.clickSearchResultsBreadcrumb(mhrNumberData.mhrNumberSearch)

    })

    it('MHR Serial Number Search Test Case', function () {

        // landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        // landingPage.clickLoginDropdown()

        // landingPage.bcscLogin(Cypress.env('BCSC_USERNAME'), Cypress.env('BCSC_PASSWORD'))

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

        //NIL Search

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


})