/// <reference types="Cypress" />
import { landingPage } from '../../../../pages/assets/landingPage'
import { mhrSearchPage } from '../../../../pages/assets/mhr/mhrSearchPage'
import orgNameData from '../../../../fixtures/assets/mhr/orgNameData.json'
import { feeSummaryPage } from '../../../../pages/assets/mhr/feeSummaryPage'
import feeSummaryData from '../../../../fixtures/assets/mhr/feeSummaryData.json'
import mhrNumberData from '../../../../fixtures/assets/mhr/mhrNumberData.json'

describe('MHR Search Test Suite ', function () {

    it('MHR Search Test Case', function () {

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

})