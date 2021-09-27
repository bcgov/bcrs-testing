/// <reference types="Cypress" />


const log = require("log");
const tab = require('cypress-plugin-tab')

export class SecurityAgreementPage {

    constructor() {

        //Registration Length and Trust Indenture 

        this.registrationLengthRadioButton = 'input#length-in-years'
        this.lengthInYearsText = 'input#life-years-field'
        this.lengthInfiniteRadioButton = '#length-infinite'
        this.trustIndentureCheckbox = '#trust-indenture-checkbox'
        this.addSecuredPartiesAndDebtorsButton = 'button#reg-next-btn'

        //Add Secured Parties and Debtors
        //Party Individual

        this.securedPartyCodeOrName = 'input#txt-code'
        this.addSecuredPartyCodeOrName = 'div#party-search-auto-complete'
        this.addRegisteringPartyAsSecuredPartyCheckbox = 'input#add-registering-party'
        this.addSecuredPartyLink = 'a#add-party'
        this.partyIndividualPersonRadioButton = 'input#party-individual'
        this.partyFirstName = 'input#txt-first-party'
        this.partyMiddleName = 'input#txt-middle-party'
        this.partyLastName = '#txt-last-party'

        //Same for Individual & Business Party

        this.partyEmailAddress = 'input#txt-email-party'
        this.partyAddressCountryDropdown = '.v-select__slot'
        this.partyAddressCountry = '[role = "listbox"]'
        this.partyAddressLine1Text = 'input[id^="street-address"]'
        this.partyAddress = '[title = "799 McCallum Rd"]'
        this.partyAddressCityText = 'input#input-3932'
        this.partyAddressRegionText = 'input#input-3935'
        this.partyAddressPostalCodeText = 'input#input-3938'
        this.partyDeliveryInstructions = 'textarea#input-3941'
        this.partyDoneButton = '#done-btn-party'

        //Party Business

        this.partyBusinessRadioButton = 'input#party-business'
        this.partyBusinessLegalName = 'input#txt-name-party'
        this.partyBusiness = ':nth-child(1) > .v-list-item__content'

        //Debtor Individual
        this.addIndividualDebtor = 'button#btn-add-individual'
        this.debtorFirstName = 'input#txt-first-debtor'
        this.debtorMiddleName = 'input#txt-middle-debtor'
        this.debtorLastName = 'input#txt-last-debtor'
        this.debtorBirthdateMonthDropdown = 'input#txt-month'
        this.debtorBirthMonthText = '.v-list-item__title'
        this.debtorBirthdateDay = 'input#txt-day'
        this.debtorBirthdateYear = 'input#txt-year'

        //Common fields for Individual & Business Debtor

        this.debtorEmailAddress = 'input#txt-email-debtor'
        this.debtorAddressCountryDropdown = '.v-form > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-select__slot'
        this.debtorAddressCountry = '.v-list-item__title'
        this.debtorAddressLine1Text = 'input[id^="street-address"]'
        this.debtorAddress = '[title = "3320 Jacombs Rd"]'
        this.debtorAddressCityText = 'input#input-3994'
        this.debtorAddressRegionText = 'input#input-3997'
        this.debtorAddressPostalCodeText = 'input#input-4000'
        this.debtorDeliveryInstructions = 'textarea#input-4003'
        this.debtorDoneButton = 'button#done-btn-debtor'

        //Debtor Business

        this.addBusinessDebtor = 'button#btn-add-business'
        this.debtorBusinessLegalName = 'input#txt-name-debtor'
        this.debtorBusinessText = '.v-item-group > :nth-child(1)'

        //Add Collateral Next Button

        this.addCollateralButton = 'button#reg-next-btn'

        //Add Collateral

        this.addVehicleCollateral = 'button#btn-add-collateral'
        this.vehicleTypeDropdown = '.v-select__slot'
        this.serialOrVINNumber = 'input#txt-serial'
        this.manufacturedHomeRegistrationNumber = 'input#txt-man'
        this.yearText = 'input#txt-years'
        this.makeText = 'input#txt-make'
        this.modelText = 'input#txt-model'
        this.collateralDoneButton = 'button#done-btn-collateral'
        this.generalCollateralText = 'textarea#generalCollateral'

        //Review and Confirm Next Button

        this.reviewAndConfirmButton = 'button#reg-next-btn'

        //Folio Number

        this.folioNumberText = 'input#txt-folio'

        //Register and Pay Button

        this.registerAndPayButton = 'button#reg-next-btn'

        //Save and Resume Later Button

        this.saveAndResumeLaterButton = 'button#reg-save-resume-btn'

        //Save Button

        this.saveButton = 'button#reg-save-btn'

        //Back Button

        this.backButton = 'button#reg-back-btn'

        //Cancel Button

        this.cancelButton = 'button#reg-cancel-btn'

    }

    //Registration Length and Trust Indenture Methods

    clickRegistrationLengthRadioButton() {
        cy.get(this.registrationLengthRadioButton).click()
        cy.log("Registration Length radio button got clicked")
    }

    setLengthInYearsTextField(data) {
        cy.get(this.lengthInYearsText).type(data)
        cy.log("Value is entered in the Length Field")
    }

    clickRegistrationLengthInfiniteButton() {
        cy.get(this.lengthInfiniteRadioButton).click()
        cy.log("Infinite button got clicked")
    }

    clickTrustIndentureCheckbox() {
        cy.get(this.trustIndentureCheckbox).check({ force: true })
        cy.log("Trust Indenture Check Box got clicked")
    }

    clickAddSecuredPartiesAndDebtorsButton() {
        cy.get(this.addSecuredPartiesAndDebtorsButton).click()
        cy.log("Add Secured Parties and Debtors button got clicked")
    }


    //Party Methods

    setSecuredPartyCodeOrName(data) {
        cy.get(this.securedPartyCodeOrName).type(data)
        cy.log("Secured Party Code or Name got entered")
    }

    clickAddSecuredPartyOrName() {
        cy.get(this.addSecuredPartyCodeOrName).click()
        cy.log("Secured Party or Name got selected")
    }

    clickRegisteringPartyAsSecuredPartyCheckbox() {
        cy.get(this.addRegisteringPartyAsSecuredPartyCheckbox).click()
        cy.log("Checkbox of Registering Party as Secured Party got clicked")
    }

    clickAddSecuredPartyLink() {
        cy.get(this.addSecuredPartyLink).click()
        cy.log("Secured Party Link got clicked")
    }

    clickPartyIndividualPersonButton() {
        cy.get(this.partyIndividualPersonRadioButton).check({ force: true })
        cy.log("Clicked on Party Individual Person")
    }

    setPartyFirstName(data) {
        cy.get(this.partyFirstName).type(data)
        cy.log("Entered Party First Name")
    }

    setPartyMiddleName(data) {
        cy.get(this.partyMiddleName).type(data)
        cy.log("Entered Party Middle Name")
    }

    setPartyLastName(data) {
        cy.get(this.partyLastName).type(data)
        cy.log("Entered Party Last Name")
    }

    setPartyEmailAddress(data) {
        cy.get(this.partyEmailAddress).type(data)
        cy.log("Entered Party Email Address")
    }

    setPartyAddressCountry(data) {
        cy.get(this.partyAddressCountryDropdown).type(data)
        cy.log("Country Dropdown got clicked for Party")
    }

    clickPartyAddressCountry(){
        cy.get(this.partyAddressCountry).click()
        cy.log("Selected Country")
    }

    setPartyAddressLine1Text(data) {
        cy.get(this.partyAddressLine1Text).type(data)
        cy.log("Entered Address Line1 for Party")
    }

    clickPartyAddressText(){
        cy.wait(2000)
        cy.get(this.partyAddress).click()
        cy.log("Entered the Party Address")
    }

    setPartyAddressCity(data) {
        cy.get(this.partyAddressCityText).type(data)
        cy.log("Entered the City for Party")
    }

    setPartyAddressRegion(data) {
        cy.get(this.partyAddressRegionText).type(data)
        cy.log("Entered Region for Party")
    }

    setPartyAddressPostalCode(data) {
        cy.get(this.partyAddressPostalCodeText).type(data)
        cy.log("Entered Postal Code for Party")
    }

    setPartyDeliveryInstructions(data) {
        cy.get(this.partyDeliveryInstructions).type(data)
        cy.log("Entered Delivery Instructions for party")
    }

    clickPartyDoneButton() {
        cy.wait(2000)
        cy.get(this.partyDoneButton).click()
        cy.log("Clicked on Party Done Button")
    }

    //Business

    clickPartyBusinessButton() {
        cy.get(this.partyBusinessRadioButton).check({ force: true })
        cy.log("Clicked on Party Business Button")
    }

    setPartyBusinessLegalName(data) {
        cy.get(this.partyBusinessLegalName).type(data)
        cy.log("Entered Party Business Name")
    }

    clickPartyBusinessText(data){
        cy.get(this.partyBusiness).click()
        cy.log("Entered Party Business Name")
    }

    //Debtor Methods
    //Debtor Individual

    clickAddIndividualDebtor() {
        cy.get(this.addIndividualDebtor).click()
        cy.log("Clicked on Add an Individual Debtor")
    }

    setDebtorFirstName(data) {
        cy.get(this.debtorFirstName).type(data)
        cy.log("Entered Debtor First Name")
    }

    setDebtorMiddleName(data) {
        cy.get(this.debtorMiddleName).type(data)
        cy.log("Entered Debtor Middle Name")
    }

    setDebtorLastName(data) {
        cy.get(this.debtorLastName).type(data)
        cy.log("Entered Debtor Last Name")
    }

    setDebtorBirthdateMonth(data){
        cy.get(this.debtorBirthdateMonthDropdown).type(data)
        cy.log("Birthdate Month got selected")
    }

    clickDebtorBirthMonth(){
        cy.get(this.debtorBirthMonthText).click()
        cy.log("Birth Month got entered")
    }

    setDebtorBirthdateDay(data){
        cy.get(this.debtorBirthdateDay).type(data)
        cy.log("Birth Day got entered")
    }

    setDebtorBirthdateYear(data){
        cy.get(this.debtorBirthdateYear).type(data)
        cy.log("Birth Year got entered")
    }

    setDebtorEmailAddress(data) {
        cy.get(this.debtorEmailAddress).type(data)
        cy.log("Entered Debtor Email Address")
    }

    setDebtorAddressCountry(data){
        cy.wait(2000)
        cy.get(this.debtorAddressCountryDropdown).type(data)
        cy.wait(2000)
        const element = 'span:contains("'+data+'")'
        cy.get(element).click()
        cy.log("Entered Debtor Address")
    }

    clickDebtorAddressCountry() {
        cy.wait(2000)
        cy.get(this.debtorAddressCountry).click()
        cy.log("Debtor Country Dropdown got clicked")
    }

    setDebtorAddressLine1(data) {
        cy.get(this.debtorAddressLine1Text).type(data)
        cy.log("Entered Debtor Address Line1")
    }

    clickDebtorAddressText(){
        cy.wait(2000)
        cy.get(this.debtorAddress).click()
        cy.log("Entered the Debtor Address")
    }

    setDebtorAddressCity(data) {
        cy.get(this.debtorAddressCityText).type(data)
        cy.log("Entered Debtor Address City")
    }

    setDebtorAddressRegion(data) {
        cy.get(this.debtorAddressRegionText).type(data)
        cy.log("Entered Debtor Address Region")
    }

    setDebtorAddressPostalCode(data) {
        cy.get(this.debtorAddressPostalCodeText).type(data)
        cy.log("Entered Debtor Address Postal Code")
    }

    setDebtorDeliveryInstructions(data) {
        cy.get(this.debtorDeliveryInstructions).type(data)
        cy.log("Entered Debtor Delivery Instructions")
    }

    clickDebtorDoneButton() {
        cy.wait(2000)
        cy.get(this.debtorDoneButton).click()
        cy.log("Debtor Done Button got clicked")
    }

    //Debtor Business

    clickAddBusinessDebtor() {
        cy.get(this.addBusinessDebtor).click()
        cy.log("Clicked on Add Business Debtor")
    }

    setDebtorBusinessLegalName(data) {
        cy.get(this.debtorBusinessLegalName).type(data)
        cy.log("Entered Debtor Business Legal Name")
    }

    clickDebtorBusinessText(){
        cy.get(this.debtorBusinessText).click()
        cy.log("Business Name got entered")
    }

    //Add Collateral Method

    clickAddCollateralButton() {
        cy.get(this.addCollateralButton).click()
        cy.log("Clicked on Add Collateral Button")
    }

    clickAddVehicleCollateral() {
        cy.get(this.addVehicleCollateral).click()
        cy.log("Clicked on Add Vehicle Collateral")
    }

    setVehicleTypeDropdown(data) {
        cy.wait(2000)
        cy.get(this.vehicleTypeDropdown).click()
        cy.wait(2000)
        const element = 'span:contains("'+data+'")'
        cy.get(element).click()
        cy.log("Clicked on Vehicle Type Dropdown")
    }

    setSerialOrVINNumber(data) {
        cy.get(this.serialOrVINNumber).type(data)
        cy.log("Entered Serial or VIN Number")
    }

    setManufacturedHomeRegistrationNumber(data) {
        cy.get(this.manufacturedHomeRegistrationNumber).type(data)
        cy.log("Entered Manufacured Home registration Number")
    }

    setYearText(data) {
        cy.get(this.yearText).type(data)
        cy.log("Entered Vehicle Year")
    }

    setMakeText(data) {
        cy.get(this.makeText).type(data)
        cy.log("Entered Vehicle Make")
    }

    setModelText(data) {
        cy.get(this.modelText).type(data)
        cy.log("Entered Vehicle Model")
    }

    clickCollateralDoneButton() {
        cy.wait(2000)
        cy.get(this.collateralDoneButton).click()
        cy.log("Clicked on Collateral Done Button")
    }

    setGeneralCollateralText(data) {
        cy.get(this.generalCollateralText).type(data)
        cy.log("Entered General Collateral Text")
    }

    clickReviewAndConfirmButton() {
        cy.get(this.reviewAndConfirmButton).click()
        cy.log("Clciked on Review and Confirm Button")
    }

    //Review and Confirm Methods

    setFolioNumberText(data) {
        cy.get(this.folioNumberText).type(data)
        cy.log("Entered Folio Number")
    }

    clcikRegisterAndPayButton() {
        cy.get(this.registerAndPayButton).click()
        cy.log("Clicked on Register and Pay Button")
    }

    clickBackButton() {
        cy.get(this.backButton).click()
        cy.log("Clicked on Back Button")
    }

    clickSaveAndResumeLaterButton() {
        cy.get(this.saveAndResumeLaterButton).click()
        cy.log("Clicked on Register and Save Later Button")
    }

    clickSaveButton() {
        cy.get(this.saveButton).click()
        cy.log("Clicked on Save Button")
    }

    clickCancelButton() {
        cy.get(this.cancelButton).click()
        cy.log("Clicked on Cancel Button")
    }

}
export const securityAgreementPage = new SecurityAgreementPage()