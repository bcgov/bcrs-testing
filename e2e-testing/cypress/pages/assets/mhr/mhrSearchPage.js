/// <reference types="Cypress" />

export class MHRSearchPage {

    constructor() {

        this.selectSearchCategory = '.ml-n6 > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections'
        this.pprDropdown = '#srch-type-drop-1 > .col-11'
        this.mhrNumber = '#list-mhr-mhr-number'
        this.ownerName = '#list-mhr-owner-name'
        this.orgName = '#list-mhr-organization-name'
        this.serialNumber = '#list-mhr-serial-number'
        this.searchBarField = '#search-bar-field'
        this.searchButton = '#SearchBar_search-btn_1WRSN'
        this.firstName = '#first-name-field'
        this.middleName = '#second-name-field'
        this.lastName = '#last-name-field'
        this.searchHeader = '#search-header'
        this.folioText = '#folio-edit-txt'

        //Search Results
        this.searchResultsBreadcrumb = '.Breadcrumb_breadcrumb-text_2jfZ3'
        this.searchResultsPageTitle = '.MHRSearch_search-title_3HmOy'
        this.searchResultsInfo = '#results-info'
        this.searchSubTitle = '.search-sub-title'
        this.folioNumberField = '.v-text-field__slot'
        this.reviewAndConfirmButton = '#review-confirm-btn'
        this.reviewSearchResultTitle = 'h1:contains("Review Search Result")'
        this.reviewSearchResultInfo = ':nth-child(2) > .ma-0'
        this.reviewSubTitle = 'label:contains("Search Results Summary")'
        this.hintMessage = '.v-messages__message'
        this.confirmFolioNumber = '#txt-folio'
        this.homeResultsCount = '#home-results-count'
        this.activeResultsCount = '#active-results-count'
        this.selectedResultsCount = '#selected-results-count'
        this.selectAllCheckbox = '.column-mdl'
        this.selectAllLienCheckbox = 'label:contains("Include lien information for all selections")'
        this.backButton = '#btn-stacked-back'
        this.cancelButton = '#btn-stacked-cancel'
        this.payAndDownloadResultButton = '#btn-stacked-submit'
        this.searchResultsSummaryTitle = '.summary-header'
        this.folioNumberTitle = 'h2:contains("1. Folio or Reference Number")'
        this.folioInfo = '.pb-6 > .col'
        this.reviewResultsCount = '#review-results-count'
        this.dashboardBreadcrumb = ':nth-child(3) > .v-breadcrumbs__item > .Breadcrumb_underlined_3aQWa'

        //fee summary

        this.title = '.pt-5 > .FeeSummary_fee-list__item-name_2kw-n'
        this.titleAmount = '.pt-5 > .FeeSummary_fee-list__item-value_1l2Y6'
        this.hint = '.fee-list__hint'
        this.serviceFee = '.py-4 > .FeeSummary_fee-list__item-name_2kw-n'
        this.serviceFeeAmount = '.py-4 > .FeeSummary_fee-list__item-value_1l2Y6'
        this.totalFees = '.FeeSummary_fee-total__name_2oa5u'
        this.currency = '.FeeSummary_fee-total__currency_v1YAJ'
        this.totalAmount = '.FeeSummary_fee-total__value_2fczQ'

        //Search History Table

        this.matchesFound = '#search-history-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(6)'
        this.matchesSelected = '#search-history-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(8)'
        this.folio = '#search-history-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(5)'
        this.searchValue = '#search-history-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(1)'
        this.type = '#search-history-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(2)'
        this.registry = '#search-history-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(3)'

        //NIL Search

        this.noResultsTitle = '.no-results-title'
        this.noResultsInfo = '.pt-2'
        this.noSearchResultInfo = '#no-results-info'
    }

    selectSearchCategoryDropdown() {

        cy.get(this.selectSearchCategory).click()
        cy.log("Clicked Search Category dropdown")
        cy.wait(2000)

    }

    selectMHRNumber() {
        cy.get(this.mhrNumber).click()
        cy.log("Selected MHR Number Search")
    }

    selectOwnerName() {
        cy.get(this.ownerName).click()
        cy.log("Selected Owner Name Search")
    }

    selectOrgName() {
        cy.get(this.orgName).click()
        cy.log("Selected Organization Name Search")
    }

    selectSerialNumber() {
        cy.get(this.serialNumber).click()
        cy.log("Selected Serial Number Search")
    }

    setMHRNumber(data) {
        cy.get(this.searchBarField).type(data.mhrNumber)
        cy.tab().click()
        cy.log("Entered MHR Number")
        cy.wait(2000)
    }

    setOwnerName(data) {
        cy.get(this.firstName).type(data.firstName)
        //cy.get(this.middleName).type(data.middleName)
        cy.get(this.lastName).type(data.lastName)
        cy.tab().click()
        cy.log("Entered Owner Name")
        cy.wait(2000)
    }

    setOrgName(data) {
        cy.get(this.searchBarField).type(data.orgName)
        cy.tab().click()
        cy.log("Entered Organization Name")
        cy.wait(2000)
    }

    setSerialNumber(data) {
        cy.get(this.searchBarField).type(data.serialNumber)
        cy.tab().click()
        cy.log("Entered Serial Number")
        cy.wait(2000)
    }

    clickSearchButton() {
        cy.wait(2000)
        cy.get(this.searchButton).click
        cy.log("Clicked on the Search Button")
    }

    verifyMHRHint(data) {
        cy.get(this.hintMessage).should('have.text', data.mhrHintMessage)
        cy.log("Verified MHR Hint Message")
        cy.wait(2000)
    }

    verifyOwnerNameHint(data) {
        cy.get(this.hintMessage).should('have.text', data.ownerNameHint)
        cy.log("Verified Owner Name Hint Message")
        cy.wait(2000)
    }

    verifyOrgNameHint(data) {
        cy.get(this.hintMessage).should('have.text', data.orgNameHint)
        cy.log("Verified Org Name Hint Message")
        cy.wait(2000)
    }

    verifySerialNumberHint(data) {
        cy.get(this.hintMessage).should('have.text', data.serialNumberHint)
        cy.log("Verified Serial Number Hint Message")
        cy.wait(2000)
    }

    verifySearchResultsHeader(data) {
        cy.wait(2000)
        cy.get(this.searchResultsPageTitle).should('have.text', data.searchResultsPageTitle)
        cy.get(this.searchResultsInfo).should('have.text', data.searchResultsInfo)
        cy.log("Verified Search Results Header")
    }

    setFolioNumber(data) {
        cy.get(this.folioText).type(data.folioNumber)
        cy.log("Folio Number is set")
    }

    clickSelectAllCheckbox() {
        cy.get(this.selectAllCheckbox).click()
        cy.log("Clicked on Select All Checkbox")

    }

    clickReviewAndConfirmButton() {
        cy.get(this.reviewAndConfirmButton).click()
        cy.log("Clicked on Review and Confirm Button")
    }

    clickBackButton() {
        cy.get(this.backButton).click()
        cy.log("Clicked on the Back Button")
    }

    clickSelectAllLienCheckbox() {
        cy.get(this.selectAllLienCheckbox).click()
        cy.log("Selected All Lien Checkbox")
    }

    clickPayAndDownloadResultButton() {
        cy.get(this.payAndDownloadResultButton).click()
        cy.log("Pay and Download button clicked")
    }

    verifyMHRSearchHistoryTable(data) {
        cy.get(this.searchHeader).should('have.text', data.searchHeader)
        cy.get(this.searchValue).should('have.text', ' ' + data.mhrNumber + ' ')
        cy.get(this.type).should('have.text', data.searchType)
        cy.get(this.registry).should('have.text', data.registry)
        cy.get(this.folio).should('have.text', ' ' + data.folioNumber + ' ')
        cy.get(this.matchesFound).should('have.text', ' ' + data.homeResultsNumber + ' ')
        cy.get(this.matchesSelected).should('have.text', ' ' + data.selectedHomesNumber + ' ')
        cy.log("Verified Search History Table of MHR Number")
    }

    verifyOwnerNameSearchHistoryTable(data) {
        cy.get(this.searchHeader).should('have.text', data.searchHeader)
        cy.get(this.searchValue).should('have.text', ' ' + data.ownerName + ' ')
        cy.get(this.type).should('have.text', data.searchType)
        cy.get(this.registry).should('have.text', data.registry)
        cy.get(this.folio).should('have.text', ' ' + data.folioNumber + ' ')
        cy.get(this.matchesFound).should('have.text', ' ' + data.homeResultsNumber + ' ')
        cy.get(this.matchesSelected).should('have.text', ' ' + data.selectedHomesNumber + ' ')
        cy.log("Verified Search History Table of Owner Name")
    }

    verifyOrgNameSearchHistoryTable(data) {
        cy.get(this.searchHeader).should('have.text', data.searchHeader)
        cy.get(this.searchValue).should('have.text', ' ' + data.orgName + ' ')
        cy.get(this.type).should('have.text', data.searchType)
        cy.get(this.registry).should('have.text', data.registry)
        cy.get(this.folio).should('have.text', ' ' + data.folioNumber + ' ')
        cy.get(this.matchesFound).should('have.text', ' ' + data.homeResultsNumber + ' ')
        cy.get(this.matchesSelected).should('have.text', ' ' + data.selectedHomesNumber + ' ')
        cy.log("Verified Search History Table of Org Name")
    }

    verifySerialNumberSearchHistoryTable(data) {
        cy.get(this.searchHeader).should('have.text', data.searchHeader)
        cy.get(this.searchValue).should('have.text', ' ' + data.serialNumber + ' ')
        cy.get(this.type).should('have.text', data.searchType)
        cy.get(this.registry).should('have.text', data.registry)
        cy.get(this.folio).should('have.text', ' ' + data.folioNumber + ' ')
        cy.get(this.matchesFound).should('have.text', ' ' + data.homeResultsNumber + ' ')
        cy.get(this.matchesSelected).should('have.text', ' ' + data.selectedHomesNumber + ' ')
        cy.log("Verified Search History Table of Serial Number")
    }

    verifyMHRReviewSearchResultScreen(data) {
        cy.get(this.reviewSearchResultTitle).should('have.text', data.reviewSearchResultTitle)
        cy.get(this.reviewSearchResultInfo).should('have.text', data.reviewSearchResultInfo)
        cy.get(this.searchResultsSummaryTitle).should('have.text', data.searchResultsSummaryTitle)
        cy.get(this.searchSubTitle).should('have.text', data.searchSubTitle + '"' + data.mhrNumber + '"')
        cy.get(this.reviewResultsCount).should('have.text', data.resultsCountNumber + data.resultsCountText)
        cy.log("Verified MHR Review Search Results")
    }

    verifyOwnerNameReviewSearchResultScreen(data) {
        cy.get(this.reviewSearchResultTitle).should('have.text', data.reviewSearchResultTitle)
        cy.get(this.reviewSearchResultInfo).should('have.text', data.reviewSearchResultInfo)
        cy.get(this.searchResultsSummaryTitle).should('have.text', data.searchResultsSummaryTitle)
        //cy.get(this.searchSubTitle).should('have.text', data.searchSubTitle + '"' + data.mhrNumber + '"')
        cy.get(this.reviewResultsCount).should('have.text', data.resultsCountNumber + data.resultsCountText)
        cy.log("Verified Owner Name Review Search Results")
    }

    verifyOrgNameReviewSearchResultScreen(data) {
        cy.get(this.reviewSearchResultTitle).should('have.text', data.reviewSearchResultTitle)
        cy.get(this.reviewSearchResultInfo).should('have.text', data.reviewSearchResultInfo)
        cy.get(this.searchResultsSummaryTitle).should('have.text', data.searchResultsSummaryTitle)
        cy.get(this.searchSubTitle).should('have.text', data.searchSubTitle + '"' + data.orgName + '"')
        cy.get(this.reviewResultsCount).should('have.text', data.resultsCountNumber + data.resultsCountText)
        cy.log("Verified Org Name Review Search Results")
    }

    verifySerialNumberReviewSearchResultScreen(data) {
        cy.get(this.reviewSearchResultTitle).should('have.text', data.reviewSearchResultTitle)
        cy.get(this.reviewSearchResultInfo).should('have.text', data.reviewSearchResultInfo)
        cy.get(this.searchResultsSummaryTitle).should('have.text', data.searchResultsSummaryTitle)
        cy.get(this.searchSubTitle).should('have.text', data.searchSubTitle + '"' + data.serialNumber + '"')
        cy.get(this.reviewResultsCount).should('have.text', data.resultsCountNumber + data.resultsCountText)
        cy.log("Verified Serial Number Review Search Results")
    }

    verifyFolioNumber(data) {
        cy.get(this.folioNumberTitle).should('have.text', data.folioNumberTitle)
        cy.get(this.folioInfo).should('have.text', data.folioInfo)
        cy.log("Verified Folio Number")
    }

    verifyMHRSearchResultsTableBeforeSelection(data) {
        cy.get(this.searchSubTitle).should('have.text', data.searchSubTitle + '"' + data.mhrNumber + '"')
        cy.get(this.homeResultsCount).should('have.text', data.homeResultsNumber + data.homeResultsText)
        cy.get(this.activeResultsCount).should('have.text', data.activeHomesNumber + data.activeHomesText)
        cy.get(this.selectedResultsCount).should('have.text', data.selectedHomesNumberInitial + data.selectedHomesText + data.lienSearchNumberInitial + data.lienSearchText)
        cy.log("Verified Search Results Table Before Selection")

    }

    verifyOrgNameSearchResultsTableBeforeSelection(data) {
        cy.get(this.searchSubTitle).should('have.text', data.searchSubTitle + '"' + data.orgName + '"')
        cy.get(this.homeResultsCount).should('have.text', data.homeResultsNumber + data.homeResultsText)
        cy.get(this.activeResultsCount).should('have.text', data.activeHomesNumber + data.activeHomesText)
        cy.get(this.selectedResultsCount).should('have.text', data.selectedHomesNumberInitial + data.selectedHomesText + data.lienSearchNumberInitial + data.lienSearchText)
        cy.log("Verified Search Results Table Before Selection")

    }

    verifyOwnerNameSearchResultsTableBeforeSelection(data) {
        //cy.get(this.searchSubTitle).should('have.text', data.searchSubTitle + '"' + data.mhrNumber + '"')
        cy.get(this.homeResultsCount).should('have.text', data.homeResultsNumber + data.homeResultsText)
        cy.get(this.activeResultsCount).should('have.text', data.activeHomesNumber + data.activeHomesText)
        cy.get(this.selectedResultsCount).should('have.text', data.selectedHomesNumberInitial + data.selectedHomesText + data.lienSearchNumberInitial + data.lienSearchText)
        cy.log("Verified Search Results Table Before Selection")

    }

    verifySerialNumberSearchResultsTableBeforeSelection(data) {
        cy.get(this.searchSubTitle).should('have.text', data.searchSubTitle + '"' + data.serialNumber + '"')
        cy.get(this.homeResultsCount).should('have.text', data.homeResultsNumber + data.homeResultsText)
        cy.get(this.activeResultsCount).should('have.text', data.activeHomesNumber + data.activeHomesText)
        cy.get(this.selectedResultsCount).should('have.text', data.selectedHomesNumberInitial + data.selectedHomesText + data.lienSearchNumberInitial + data.lienSearchText)
        cy.log("Verified Search Results Table Before Selection")

    }

    verifyMHRSearchResultsTableAfterSelection(data) {
        cy.get(this.searchSubTitle).should('have.text', data.searchSubTitle + '"' + data.mhrNumber + '"')
        cy.get(this.homeResultsCount).should('have.text', data.homeResultsNumber + data.homeResultsText)
        cy.get(this.activeResultsCount).should('have.text', data.activeHomesNumber + data.activeHomesText)
        cy.get(this.selectedResultsCount).should('have.text', data.selectedHomesNumber + data.selectedHomesText + data.lienSearchNumber + data.lienSearchText)
        cy.log("Verified Search Results Table Before Selection")

    }

    verifyOWnerNameSearchResultsTableAfterSelection(data) {
        //cy.get(this.searchSubTitle).should('have.text', data.searchSubTitle + '"' + data.mhrNumber + '"')
        cy.get(this.homeResultsCount).should('have.text', data.homeResultsNumber + data.homeResultsText)
        cy.get(this.activeResultsCount).should('have.text', data.activeHomesNumber + data.activeHomesText)
        cy.get(this.selectedResultsCount).should('have.text', data.selectedHomesNumber + data.selectedHomesText + data.lienSearchNumber + data.lienSearchText)
        cy.log("Verified Search Results Table Before Selection")

    }

    verifyOrgNameSearchResultsTableAfterSelection(data) {
        cy.get(this.searchSubTitle).should('have.text', data.searchSubTitle + '"' + data.orgName + '"')
        cy.get(this.homeResultsCount).should('have.text', data.homeResultsNumber + data.homeResultsText)
        cy.get(this.activeResultsCount).should('have.text', data.activeHomesNumber + data.activeHomesText)
        cy.get(this.selectedResultsCount).should('have.text', data.selectedHomesNumber + data.selectedHomesText + data.lienSearchNumber + data.lienSearchText)
        cy.log("Verified Search Results Table Before Selection")

    }

    verifySerialNumberSearchResultsTableAfterSelection(data) {
        cy.get(this.searchSubTitle).should('have.text', data.searchSubTitle + '"' + data.serialNumber + '"')
        cy.get(this.homeResultsCount).should('have.text', data.homeResultsNumber + data.homeResultsText)
        cy.get(this.activeResultsCount).should('have.text', data.activeHomesNumber + data.activeHomesText)
        cy.get(this.selectedResultsCount).should('have.text', data.selectedHomesNumber + data.selectedHomesText + data.lienSearchNumber + data.lienSearchText)
        cy.log("Verified Search Results Table Before Selection")

    }

    verifySearchResultsBreadcrumb(data) {
        cy.get(this.searchResultsBreadcrumb).should('have.text', data.searchResultsBreadcrumb)
        cy.log("Verified Search Results Breadcrumb")
    }

    verifyReviewSearchResultsBreadcrumb(data) {
        cy.get(this.searchResultsBreadcrumb).should('have.text', data.searchResultsBreadcrumb)
        cy.log("Verified Search Results Page Breadcrumb")
    }

    verifyNILSearchResultsHeader(data) {
        cy.wait(2000)
        cy.get(this.searchResultsPageTitle).should('have.text', data.searchResultsPageTitle)
        cy.get(this.noSearchResultInfo).should('have.text', data.noSearchResultInfo)
        cy.log("Verified NIL Search Results Header")
    }

    verifyMHRNILSearchTableHeader(data) {
        cy.get(this.searchSubTitle).should('have.text', data.searchSubTitle + '"' + data.mhrNumber + '"')
        cy.get(this.homeResultsCount).should('have.text', data.homeResultsNumber + data.homeResultsText)
        cy.get(this.activeResultsCount).should('have.text', data.activeHomesNumber + data.activeHomesText)
        cy.get(this.selectedResultsCount).should('have.text', data.selectedHomesNumber + data.selectedHomesText + data.lienSearchNumber + data.lienSearchText)
        cy.log("Verified MHR NIL Search Results Table Header")

    }

    verifyOwnerNameNILSearchTableHeader(data) {
        //cy.get(this.searchSubTitle).should('have.text', data.searchSubTitle + '"' + data.ownerName + '"')
        cy.get(this.homeResultsCount).should('have.text', data.homeResultsNumber + data.homeResultsText)
        cy.get(this.activeResultsCount).should('have.text', data.activeHomesNumber + data.activeHomesText)
        cy.get(this.selectedResultsCount).should('have.text', data.selectedHomesNumber + data.selectedHomesText + data.lienSearchNumber + data.lienSearchText)
        cy.log("Verified MHR NIL Search Results Table Header")

    }

    verifyOrgNameNILSearchTableHeader(data) {
        cy.get(this.searchSubTitle).should('have.text', data.searchSubTitle + '"' + data.orgName + '"')
        cy.get(this.homeResultsCount).should('have.text', data.homeResultsNumber + data.homeResultsText)
        cy.get(this.activeResultsCount).should('have.text', data.activeHomesNumber + data.activeHomesText)
        cy.get(this.selectedResultsCount).should('have.text', data.selectedHomesNumber + data.selectedHomesText + data.lienSearchNumber + data.lienSearchText)
        cy.log("Verified MHR NIL Search Results Table Header")

    }

    verifySerialNumberNILSearchTableHeader(data) {
        cy.get(this.searchSubTitle).should('have.text', data.searchSubTitle + '"' + data.serialNumber + '"')
        cy.get(this.homeResultsCount).should('have.text', data.homeResultsNumber + data.homeResultsText)
        cy.get(this.activeResultsCount).should('have.text', data.activeHomesNumber + data.activeHomesText)
        cy.get(this.selectedResultsCount).should('have.text', data.selectedHomesNumber + data.selectedHomesText + data.lienSearchNumber + data.lienSearchText)
        cy.log("Verified MHR NIL Search Results Table Header")

    }

    verifyNILSearchResultInfo(data) {
        cy.get(this.noResultsTitle).should('have.text', data.noResultsTitle)
        cy.get(this.noResultsInfo).should('have.text', data.noResultsInfo)
        cy.log("Verified NIL Search Results Info")
    }

    clickSearchResultsBreadcrumb(data) {
        cy.get(this.dashboardBreadcrumb).click()
        cy.get(this.searchHeader).should('have.text', data.searchHeader)
        cy.log("Verified Search Results Breadcrumb")
    }

    //MHR Number Scenarios

    searchManufacturedHomeRegistrationNumber(data) {

        cy.get(this.mhrNumber).click()
        cy.get(this.searchBarField).type(data.mhrNumber)
        cy.get(this.hintMessage).should('have.text', data.mhrHintMessage)
        cy.get(this.searchButton).click()
        cy.get(this.searchResultsPageTitle).should('have.text', data.searchResultsPageTitle)
        cy.get(this.searchResultsInfo).should('have.text', data.searchResultsInfo)
        cy.get(this.searchSubTitle).should('have.text', data.searchSubTitle + '"' + data.mhrNumber + '"')
        cy.get(this.homeResultsCount).should('have.text', data.homeResultsNumber + data.homeResultsText)
        cy.get(this.activeResultsCount).should('have.text', data.activeHomesNumber + data.activeHomesText)
        cy.get(this.selectAllCheckbox).click()
        cy.get(this.selectAllLienCheckbox).click()
        cy.get(this.selectedResultsCount).should('have.text', data.selectedHomesNumber + data.selectedHomesText + data.lienSearchNumber + data.lienSearchText)
        cy.get(this.folioNumberField).type(data.folioNumber)
        cy.get(this.reviewAndConfirmButton).click()
        // cy.get(this.confirmFolioNumber).invoke('text').then((text1) => {
        //     expect(text1).to.eq(data.folioNumber)

        // })
        cy.log("Verified MHR Number Search")

    }

    //Owner Name Scenarios

    searchOwnerName(data) {

        cy.get(this.pprDropdown).click()
        //cy.get(this.ownerName).click()
        cy.wait(5000)
        cy.get(this.hintMessage).should('have.text', data.ownerNameHint)
        cy.get(this.firstName).type(data.firstName)
        //cy.get(this.middleName).type(data.middleName)
        cy.get(this.lastName).type(data.lastName)
        cy.get(this.searchButton).click()
        cy.get(this.searchResultsPageTitle).should('have.text', data.searchResultsPageTitle)
        cy.get(this.searchResultsInfo).should('have.text', data.searchResultsInfo)
        //cy.get(this.searchSubTitle).should('have.text', data.searchSubTitle+'"' +data.lastName+', '+data.firstName+'"')
        cy.get(this.homeResultsCount).should('have.text', data.homeResultsNumber + data.homeResultsText)
        cy.get(this.activeResultsCount).should('have.text', data.activeHomesNumber + data.activeHomesText)
        cy.get(this.selectAllCheckbox).click()
        cy.get(this.selectAllLienCheckbox).click()
        cy.get(this.selectedResultsCount).should('have.text', data.selectedHomesNumber + data.selectedHomesText + data.lienSearchNumber + data.lienSearchText)
        cy.get(this.folioNumberField).type(data.folioNumber)
        cy.get(this.reviewAndConfirmButton).click()
        //cy.get(this.confirmFolioNumber).should('have.text', data.folioNumber)
        cy.log("Verified Owner Name Search")
    }

    //Org Name Scenarios

    searchOrganizationName(data) {

        cy.get(this.pprDropdown).click()
        //cy.get(this.orgName).click()
        cy.wait(5000)
        cy.get(this.hintMessage).should('have.text', data.orgNameHint)
        cy.get(this.searchBarField).type(data.orgName)
        cy.get(this.searchButton).click()
        cy.get(this.searchResultsPageTitle).should('have.text', data.searchResultsPageTitle)
        cy.get(this.searchResultsInfo).should('have.text', data.searchResultsInfo)
        cy.get(this.searchSubTitle).should('have.text', data.searchSubTitle + '"' + data.orgName + '"')
        cy.get(this.homeResultsCount).should('have.text', data.homeResultsNumber + data.homeResultsText)
        cy.get(this.activeResultsCount).should('have.text', data.activeHomesNumber + data.activeHomesText)
        cy.get(this.selectAllCheckbox).click()
        cy.get(this.selectAllLienCheckbox).click()
        cy.get(this.selectedResultsCount).should('have.text', data.selectedHomesNumber + data.selectedHomesText + data.lienSearchNumber + data.lienSearchText)
        cy.get(this.folioNumberField).type(data.folioNumber)
        cy.get(this.reviewAndConfirmButton).click()
        //cy.get(this.confirmFolioNumber).should('have.text', data.folioNumber)
        cy.log("Verified Organization Name Search")
    }

    //Serial Number Scenarios

    searchSerialNumber(data) {

        cy.get(this.pprDropdown).click()
        cy.wait(2000)
        //cy.get(this.serialNumber).click()
        cy.get(this.hintMessage).should('have.text', data.serialNumberHint)
        cy.get(this.searchBarField).type(data.serialNumber)
        cy.get(this.searchButton).click()
        cy.get(this.searchResultsPageTitle).should('have.text', data.searchResultsPageTitle)
        cy.get(this.searchResultsInfo).should('have.text', data.searchResultsInfo)
        cy.get(this.searchSubTitle).should('have.text', data.searchSubTitle + '"' + data.serialNumber + '"')
        cy.get(this.homeResultsCount).should('have.text', data.homeResultsNumber + data.homeResultsText)
        cy.get(this.activeResultsCount).should('have.text', data.activeHomesNumber + data.activeHomesText)
        cy.get(this.selectAllCheckbox).click()
        cy.get(this.selectAllLienCheckbox).click()
        cy.get(this.selectedResultsCount).should('have.text', data.selectedHomesNumber + data.selectedHomesText + data.lienSearchNumber + data.lienSearchText)
        cy.get(this.folioNumberField).type(data.folioNumber)
        cy.get(this.reviewAndConfirmButton).click()
        //cy.get(this.confirmFolioNumber).should('have.text', data.folioNumber)
        cy.log("Verified Serial Number Search")

    }

    // Multiple Results

    verifyOrgNameMultipleResultsTableBeforeSelection(data) {
        cy.get(this.searchSubTitle).should('have.text', data.searchSubTitle + '"' + data.orgName + '"')
        cy.get(this.homeResultsCount).should('have.text', data.homeResultsNumber + data.homeResultsText)
        cy.get(this.activeResultsCount).should('have.text', data.activeHomesNumber + data.activeHomesText)
        cy.get(this.selectedResultsCount).should('have.text', data.selectedHomesNumberInitial + data.selectedHomesText + data.lienSearchNumberInitial + data.lienSearchText)
        cy.log("Verified Search Results Table Before Selection")

    }

    verifyOrgNameMultipleResultsTableAfterSelection(data) {
        cy.get(this.searchSubTitle).should('have.text', data.searchSubTitle + '"' + data.orgName + '"')
        cy.get(this.homeResultsCount).should('have.text', data.homeResultsNumber + data.homeResultsText)
        cy.get(this.activeResultsCount).should('have.text', data.activeHomesNumber + data.activeHomesText)
        cy.get(this.selectedResultsCount).should('have.text', data.selectedHomesNumber + data.selectedHomesText + data.lienSearchNumberInitial + data.lienSearchText)
        cy.log("Verified Search Results Table Before Selection")

    }

    verifyOrgNameMultipleReviewSearchResultScreen(data) {
        cy.get(this.reviewSearchResultTitle).should('have.text', data.reviewSearchResultTitle)
        cy.get(this.reviewSearchResultInfo).should('have.text', data.reviewSearchResultInfo)
        cy.get(this.searchResultsSummaryTitle).should('have.text', data.searchResultsSummaryTitle)
        cy.get(this.searchSubTitle).should('have.text', data.searchSubTitle + '"' + data.orgName + '"')
        cy.get(this.reviewResultsCount).should('have.text', data.resultsCountNumber + data.resultsCountText)
        cy.log("Verified Org Name Review Search Results")
    }

    verifySerialNumberMultipleResultsTableBeforeSelection(data) {
        cy.get(this.searchSubTitle).should('have.text', data.searchSubTitle + '"' + data.serialNumber + '"')
        cy.get(this.homeResultsCount).should('have.text', data.homeResultsNumber + data.homeResultsText)
        cy.get(this.activeResultsCount).should('have.text', data.activeHomesNumber + data.activeHomesText)
        cy.get(this.selectedResultsCount).should('have.text', data.selectedHomesNumberInitial + data.selectedHomesText + data.lienSearchNumberInitial + data.lienSearchText)
        cy.log("Verified Search Results Table Before Selection")

    }

    verifySerialNumberMultipleResultsTableAfterSelection(data) {
        cy.get(this.searchSubTitle).should('have.text', data.searchSubTitle + '"' + data.serialNumber + '"')
        cy.get(this.homeResultsCount).should('have.text', data.homeResultsNumber + data.homeResultsText)
        cy.get(this.activeResultsCount).should('have.text', data.activeHomesNumber + data.activeHomesText)
        cy.get(this.selectedResultsCount).should('have.text', data.selectedHomesNumber + data.selectedHomesText + data.lienSearchNumberInitial + data.lienSearchText)
        cy.log("Verified Search Results Table Before Selection")

    }

    //Combo Search

    verifyOrgNameComboResultsTableAfterSelection(data) {
        cy.get(this.searchSubTitle).should('have.text', data.searchSubTitle + '"' + data.orgName + '"')
        cy.get(this.homeResultsCount).should('have.text', data.homeResultsNumber + data.homeResultsText)
        cy.get(this.activeResultsCount).should('have.text', data.activeHomesNumber + data.activeHomesText)
        cy.get(this.selectedResultsCount).should('have.text', data.selectedHomesNumber + data.selectedHomesText + data.lienSearchNumber + data.lienSearchText)
        cy.log("Verified Search Results Table Before Selection")

    }

    verifySerialNumberComboResultsTableAfterSelection(data) {
        cy.get(this.searchSubTitle).should('have.text', data.searchSubTitle + '"' + data.serialNumber + '"')
        cy.get(this.homeResultsCount).should('have.text', data.homeResultsNumber + data.homeResultsText)
        cy.get(this.activeResultsCount).should('have.text', data.activeHomesNumber + data.activeHomesText)
        cy.get(this.selectedResultsCount).should('have.text', data.selectedHomesNumber + data.selectedHomesText + data.lienSearchNumber + data.lienSearchText)
        cy.log("Verified Search Results Table Before Selection")

    }

    verifyMHRNumberComboResultsTableAfterSelection(data) {
        cy.get(this.searchSubTitle).should('have.text', data.searchSubTitle + '"' + data.mhrNumber + '"')
        cy.get(this.homeResultsCount).should('have.text', data.homeResultsNumber + data.homeResultsText)
        cy.get(this.activeResultsCount).should('have.text', data.activeHomesNumber + data.activeHomesText)
        cy.get(this.selectedResultsCount).should('have.text', data.selectedHomesNumber + data.selectedHomesText + data.lienSearchNumber + data.lienSearchText)
        cy.log("Verified Search Results Table Before Selection")

    }

}
export const mhrSearchPage = new MHRSearchPage()