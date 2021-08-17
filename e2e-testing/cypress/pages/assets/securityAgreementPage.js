/// <reference types="Cypress" />
const log = require("log");

export class SecurityAgreementPage {

    constructor() {

        //Registration Length and Trust Indenture 

        this.registrationLengthRadioButton = 'input#length-in-years'
        this.lengthInYearsText = 'input#life-years-field'
        this.lengthInfiniteRadioButton = 'input#length-infinite'
        this.trustIndentureCheckbox = 'input#trust-indenture-checkbox'
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
        this.partyLastName = 'input#txt-last-party'

        //Same for Individual & Business Party

        this.partyEmailAddress = 'input#txt-email-party'
        this.partyAddressCountryDropdown = '.v-select__slot'
        this.partyAddressLine1Text = 'input#street-address-6'
        this.partyAddressCityText = 'input#input-3932'
        this.partyAddressRegionText = 'input#input-3935'
        this.partyAddressPostalCodeText = 'input#input-3938'
        this.partyDeliveryInstructions = 'textarea#input-3941'
        this.partyDoneButton = 'button#done-btn-party'

        //Party Business

        this.partyBusinessRadioButton = 'input#party-business'
        this.partyBusinessLegalName = 'input#txt-name-party'

        //Debtor Individual
        this.addIndividualDebtor = 'button#btn-add-individual'
        this.debtorFirstName = 'input#txt-first-debtor'
        this.debtorMiddleName = 'input#txt-middle-debtor'
        this.debtorLastname = 'input#txt-last-debtor'
        this.debtorBirthdateMonthDropdown = 'input#txt-month'
        this.debtorBirthdateDay = 'input#txt-day'
        this.debtorBirthdateYear = 'input#txt-year'

        //Common fields for Individual & Business Debtor

        this.debtorEmailAddress = 'input#txt-email-debtor'
        this.debtorAddressCountry = '.v-select__slot'
        this.debtorAddressLine1Text = 'input#street-address-7'
        this.debtorAddressCityText = 'input#input-3994'
        this.debtorAddressRegionText = 'input#input-3997'
        this.debtorAddressPostalCodeText = 'input#input-4000'
        this.debtorDeliveryInstructions = 'textarea#input-4003'
        this.debtorDoneButton = 'button#done-btn-debtor'

        //Debtor Business

        this.addBusinessDebtor = 'button#btn-add-business'
        this.debtorBusinessLegalName = 'input#txt-name-debtor'

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
        log.info("Registration Length radio button got clicked")
    }

    setLengthInYearsTextField(data) {
        cy.get(this.lengthInYearsText).type(data)
        log.info("Value is entered in the Length Field")
    }

    clickRegistrationLengthInfiniteButton() {
        cy.get(this.lengthInfiniteRadioButton).click()
        log.info("Infinite button got clicked")
    }

    clickTrustIndentureCheckbox() {
        cy.get(this.trustIndentureCheckbox).click()
        log.info("Trust Indenture Check Box got clicked")
    }

    clickAddSecuredPartiesAndDebtorsButton() {
        cy.get(this.addSecuredPartiesAndDebtorsButton).click()
        log.info("Add Secured Parties and Debtors button got clicked")
    }


    //Party Methods

    setSecuredPartyCodeOrName(data) {
        cy.get(this.securedPartyCodeOrName).type(data)
        log.info("Secured Party Code or Name got entered")
    }

    clickAddSecuredPartyOrName() {
        cy.get(this.addSecuredPartyCodeOrName).click()
        log.info("Secured Party or Name got selected")
    }

    clickRegisteringPartyAsSecuredPartyCheckbox() {
        cy.get(this.addRegisteringPartyAsSecuredPartyCheckbox).click()
        log.info("Checkbox of Registering Party as Secured Party got clicked")
    }

    clickAddSecuredPartyLink() {
        cy.get(this.addSecuredPartyLink).click()
        log.info("Secured Party Link got clicked")
    }

    clickPartyIndividualPersonButton() {
        cy.get(this.partyIndividualPersonRadioButton).click()
        log.info("Clicked on Party Individual Person")
    }

    setPartyFirstName(data) {
        cy.get(this.partyFirstName).type(data)
        log.info("Entered Party First Name")
    }

    setPartyMiddleName(data) {
        cy.get(this.partyMiddleName).type(data)
        log.info("Entered Party Middle Name")
    }

    setPartyLastName(data) {
        cy.get(this.setPartyLastName).type(data)
        log.info("Entered Party Last Name")
    }

    setPartyEmailAddress(data) {
        cy.get(this.partyEmailAddress).type(data)
        log.info("Entered Party Email Address")
    }

    clickPartyAddressCountryDropdown() {
        cy.get(this.partyAddressCountryDropdown).click()
        log.info("Country Dropdown got clicked for Party")
    }

    setPartyAddressLine1Text(data) {
        cy.get(this.partyAddressLine1Text).type(data)
        log.info("Entered Address Line1 for Party")
    }

    setPartyAddressCity(data) {
        cy.get(this.partyAddressCityText).type(data)
        log.info("Entered the City for Party")
    }

    setPartyAddressRegion(data) {
        cy.get(this.partyAddressRegionText).type(data)
        log.info("Entered Region for Party")
    }

    setPartyAddressPostalCode(data) {
        cy.get(this.partyAddressPostalCodeText).type(data)
        log.info("Entered Postal Code for Party")
    }

    setPartyDeliveryInstructions(data) {
        cy.get(this.partyDeliveryInstructions).type(data)
        log.info("Entered Delivery Instructions for party")
    }

    clickPartyDoneButton() {
        cy.get(this.partyDoneButton).click()
        log.info("Clicked on Party Done Button")
    }

    //Business

    clickPartyBusinessButton() {
        cy.get(this.partyBusinessRadioButton).click()
        log.info("Clicked on Party Business Button")
    }

    setPartyBusinessLegalName(data) {
        cy.get(this.partyBusinessLegalName).type(data)
        log.info("Entered Party Business Name")
    }

    //Debtor Methods
    //Debtor Individual

    clickAddIndividualDebtor() {
        cy.get(this.addIndividualDebtor).click()
        log.info("Clicked on Add an Individual Debtor")
    }

    setDebtorFirstName(data) {
        cy.get(this.debtorFirstName).type(data)
        log.info("Entered Debtor First Name")
    }

    setDebtorMiddleName(data) {
        cy.get(this.debtorMiddleName).type(data)
        log.info("Entered Debtor Middle Name")
    }

    setDebtorLastName(data) {
        cy.get(this.debtorLastName).type(data)
        log.info("Entered Debtor Last Name")
    }

    setDebtorEmailAddress(data) {
        cy.get(this.debtorEmailAddress).type(data)
        log.info("Entered Debtor Email Address")
    }

    clickDebtorAddressCountryDropdown() {
        cy.get(this.debtorAddressCountry).click()
        log.info("Debtor Country Dropdown got clicked")
    }

    setDebtorAddressLine1(data) {
        cy.get(this.debtorAddressLine1Text).type(data)
        log.info("Entered Debtor Address Line1")
    }

    setDebtorAddressCity(data) {
        cy.get(this.debtorAddressCityText).type(data)
        log.info("Entered Debtor Address City")
    }

    setDebtorAddressRegion(data) {
        cy.get(this.debtorAddressRegionText).type(data)
        log.info("Entered Debtor Address Region")
    }

    setDebtorAddressPostalCode(data) {
        cy.get(this.debtorAddressPostalCodeText).type(data)
        log.info("Entered Debtor Address Postal Code")
    }

    setDebtorDeliveryInstructions(data) {
        cy.get(this.debtorDeliveryInstructions).type(data)
        log.info("Entered Debtor Delivery Instructions")
    }

    clickDebtorDoneButton() {
        cy.get(this.debtorDoneButton).click()
        log.info("Debtor Done Button got clicked")
    }

    //Debtor Business

    clickAddBusinessDebtor() {
        cy.get(this.addBusinessDebtor).click()
        log.info("Clicked on Add Business Debtor")
    }

    setDebtorBusinessLegalName(data) {
        cy.get(this.debtorBusinessLegalName).type(data)
        log.info("Entered Debtor Business Legal Name")
    }

    //Add Collateral Method

    clickAddCollateralButton() {
        cy.get(this.addCollateralButton).click()
        log.info("Clicked on Add Collateral Button")
    }

    clickAddVehicleCollateral() {
        cy.get(this.addVehicleCollateral).click()
        log.info("Clicked on Add Vehicle Collateral")
    }

    clickVehicleTypeDropdown() {
        cy.get(this.vehicleTypeDropdown).click()
        log.info("Clicked on Vehicle Type Dropdown")
    }

    setSerialOrVINNumber(data) {
        cy.get(this.serialOrVINNumber).type(data)
        log.info("Entered Serial or VIN Number")
    }

    setManufacturedHomeRegistrationNumber(data) {
        cy.get(this.manufacturedHomeRegistrationNumber).type(data)
        log.info("Entered Manufacured Home registration Number")
    }

    setYearText(data) {
        cy.get(this.yearText).type(data)
        log.info("Entered Vehicle Year")
    }

    setMakeText(data) {
        cy.get(this.makeText).type(data)
        log.info("Entered Vehicle Make")
    }

    setModelText(data) {
        cy.get(this.modelText).type(data)
        log.info("Entered Vehicle Model")
    }

    clickCollateralDoneButton() {
        cy.get(this.collateralDoneButton).click()
        log.info("Clicked on Collateral Done Button")
    }

    setGeneralCollateralText(data) {
        cy.get(this.generalCollateralText).type(data)
        log.info("Entered General Collateral Text")
    }

    clickReviewAndConfirmButton() {
        cy.get(this.reviewAndConfirmButton).click()
        log.info("Clciked on Review and Confirm Button")
    }

    //Review and Confirm Methods

    setFolioNumberText(data) {
        cy.get(this.folioNumberText).type(data)
        log.info("Entered Folio Number")
    }

    clcikRegisterAndPayButton() {
        cy.get(this.registerAndPayButton).click()
        log.info("Clicked on Register and Pay Button")
    }

    clickBackButton() {
        cy.get(this.backButton).click()
        log.info("Clicked on Back Button")
    }

    clickSaveAndResumeLaterButton() {
        cy.get(this.saveAndResumeLaterButton).click()
        log.info("Clicked on Register and Save Later Button")
    }

    clickSaveButton() {
        cy.get(this.saveButton).click()
        log.info("Clicked on Save Button")
    }

    clickCancelButton() {
        cy.get(this.cancelButton).click()
        log.info("Clicked on Cancel Button")
    }

}
export const securityAgreementPage = new SecurityAgreementPage()