/// <reference types="Cypress" />
import { landingPage } from '../../../../pages/assets/landingPage'
import { mhrSearchPage } from '../../../../pages/assets/mhr/mhrSearchPage'
import orgNameData from '../../../../fixtures/assets/mhr/orgNameData.json'
import { feeSummaryPage } from '../../../../pages/assets/mhr/feeSummaryPage'
import feeSummaryData from '../../../../fixtures/assets/mhr/feeSummaryData.json'
import mhrNumberData from '../../../../fixtures/assets/mhr/mhrNumberData.json'

describe('MHR Search Test Suite ', function () {

    it('Org Name Single Result Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        landingPage.clickLoginDropdown()

        landingPage.bcscLogin(Cypress.env('BCSC_USERNAME'), Cypress.env('BCSC_PASSWORD'))

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

    })

    //NIL Search

    it('Org Name NIL Search Test Case', function () {

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

    //Multiple Results

    it('Org Name Multiple Results Test Case', function () {

        mhrSearchPage.selectSearchCategoryDropdown()

        mhrSearchPage.selectOrgName()

        mhrSearchPage.verifyOrgNameHint(orgNameData.orgNameSearch)

        mhrSearchPage.setFolioNumber(orgNameData.orgNameSearch)

        mhrSearchPage.setOrgName(orgNameData.orgNameMultipleSearch)

        mhrSearchPage.verifySearchResultsHeader(orgNameData.orgNameSearch)

        mhrSearchPage.verifyOrgNameSearchResultsTableBeforeSelection(orgNameData.orgNameMultipleSearch)

        mhrSearchPage.clickReviewAndConfirmButton()

        feeSummaryPage.verifyFeeSummaryModalWithoutHomes(feeSummaryData.mhrNumberWithoutHomes)

        mhrSearchPage.clickBackButton()

        mhrSearchPage.clickSelectAllCheckbox()

        mhrSearchPage.clickReviewAndConfirmButton()

        feeSummaryPage.verifyFeeSummaryModal(feeSummaryData.orgNameMultipleResults)

        mhrSearchPage.clickBackButton()

        mhrSearchPage.verifyOrgNameMultipleResultsTableAfterSelection(orgNameData.orgNameMultipleSearch)

        mhrSearchPage.clickReviewAndConfirmButton()

        feeSummaryPage.verifyFeeSummaryModal(feeSummaryData.orgNameMultipleResults)

        mhrSearchPage.verifyOrgNameMultipleReviewSearchResultScreen(orgNameData.orgNameMultipleSearch)

        mhrSearchPage.verifyFolioNumber(mhrNumberData.mhrNumberSearch)

        mhrSearchPage.clickPayAndDownloadResultButton()

        mhrSearchPage.verifyOrgNameSearchHistoryTable(orgNameData.orgNameMultipleSearch)

    })

    //Combo Search

    it('Org Name Combo Search Test Case', function () {

        mhrSearchPage.selectSearchCategoryDropdown()

        mhrSearchPage.selectOrgName()

        mhrSearchPage.verifyOrgNameHint(orgNameData.orgNameSearch)

        mhrSearchPage.setFolioNumber(orgNameData.orgNameSearch)

        mhrSearchPage.setOrgName(orgNameData.orgNameMultipleSearch)

        mhrSearchPage.verifySearchResultsHeader(orgNameData.orgNameSearch)

        mhrSearchPage.verifyOrgNameSearchResultsTableBeforeSelection(orgNameData.orgNameMultipleSearch)

        mhrSearchPage.clickReviewAndConfirmButton()

        feeSummaryPage.verifyFeeSummaryModalWithoutHomes(feeSummaryData.mhrNumberWithoutHomes)

        mhrSearchPage.clickBackButton()

        mhrSearchPage.clickSelectAllCheckbox()

        mhrSearchPage.clickReviewAndConfirmButton()

        feeSummaryPage.verifyFeeSummaryModal(feeSummaryData.orgNameMultipleResults)

        mhrSearchPage.clickBackButton()

        mhrSearchPage.clickSelectAllLienCheckbox()

        mhrSearchPage.verifyOrgNameComboResultsTableAfterSelection(orgNameData.orgNameMultipleSearch)

        mhrSearchPage.clickReviewAndConfirmButton()

        feeSummaryPage.verifyFeeSummaryModal(feeSummaryData.orgNameComboSearchResults)

        mhrSearchPage.verifyOrgNameReviewSearchResultScreen(orgNameData.orgNameMultipleSearch)

        mhrSearchPage.verifyFolioNumber(mhrNumberData.mhrNumberSearch)

        mhrSearchPage.clickPayAndDownloadResultButton()

        mhrSearchPage.verifyOrgNameSearchHistoryTable(orgNameData.orgNameMultipleSearch)


    })

})