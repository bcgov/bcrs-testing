/// <reference types="Cypress" />


const log = require("log");
const tab = require('cypress-plugin-tab')
const dayjs = require('dayjs')

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
        this.partyAddressCityText = 'input#input-3932'
        this.partyAddressRegionText = 'input#input-3935'
        this.partyAddressPostalCodeText = 'input#input-3938'
        this.partyDeliveryInstructions = ':nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot'
        this.partyDoneButton = '#done-btn-party'

        //Party Business

        this.partyBusinessRadioButton = 'input#party-business'
        this.partyBusinessLegalName = 'input#txt-name-party'
        this.partyBusiness = ':nth-child(1) > .auto-complete-item'

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
        this.debtorDeliveryInstructions = ':nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot'
        this.debtorDoneButton = 'button#done-btn-debtor'

        //Debtor Business

        this.addBusinessDebtor = 'button#btn-add-business'
        this.debtorBusinessLegalName = 'input#txt-name-debtor'
        this.debtorBusinessText = ':nth-child(1) > .auto-complete-item'

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
        this.generalCollateralText = '.ProseMirror'
        this.generalCollateralDescription = '.general-collateral-summary > .ma-0'

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

        //Other Registration

        this.statuteName = '#dialog-text-field'
        this.startRegistrationButton = '#accept-btn'
        this.cancelRegistrationButton = '#cancel-btn'

        //MiscellaneousRegistrationsAct Secured Party

        this.securedPartyCodeDropdown = '#secured-party-autocomplete'
        this.securedPartyList = 'div.row.auto-complete-row'
        this.changeSecuredParty = '#accept-btn'
        this.cancelSecuredParty = '#cancel-btn'

        //Confirm Authorization

        this.cerifyTitle = 'h2:contains("2. Authorization")'
        this.certifyInfo = '#certify-summary > .pb-6 > .col'
        this.certifyName = '.mb-5 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > .party-row > .list-item__title > .row > .col-9 > div'
        this.certifyAccountName = '.mb-5 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > .party-row > :nth-child(2)'
        this.certifyAddress = '.mb-5 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > .party-row > :nth-child(3)'
        this.confirmAuthorizationInfo = 'label[for^="checkbox-certified"]'
        this.confirmCertifyDate = '.pl-10 > .summary-text'
        this.confirmCheckbox = '.v-input--selection-controls__ripple'

    }

    //Registration Length and Trust Indenture Methods

    clickRegistrationLengthRadioButton() {
        cy.get(this.registrationLengthRadioButton).click({ force: true })
        cy.log("Registration Length radio button got clicked")
    }

    setLengthInYearsTextField(data) {
        cy.get(this.lengthInYearsText).type(data)
        cy.log("Value is entered in the Length Field")
    }

    clickRegistrationLengthInfiniteButton() {
        cy.get(this.lengthInfiniteRadioButton).click({ force: true })
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

    clickPartyAddressCountry() {
        cy.get(this.partyAddressCountry).click()
        cy.log("Selected Country")
    }

    setPartyAddressLine1Text(data) {
        cy.get(this.partyAddressLine1Text).type(data)
        cy.log("Entered Address Line1 for Party")
    }

    clickPartyAddressText() {
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

    clickPartyBusinessText() {
        cy.wait(2000)
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

    setDebtorBirthdateMonth(data) {
        cy.get(this.debtorBirthdateMonthDropdown).type(data)
        cy.log("Birthdate Month got selected")
    }

    clickDebtorBirthMonth() {
        cy.get(this.debtorBirthMonthText).click()
        cy.log("Birth Month got entered")
    }

    setDebtorBirthdateDay(data) {
        cy.get(this.debtorBirthdateDay).type(data)
        cy.log("Birth Day got entered")
    }

    setDebtorBirthdateYear(data) {
        cy.get(this.debtorBirthdateYear).type(data)
        cy.log("Birth Year got entered")
    }

    setDebtorEmailAddress(data) {
        cy.get(this.debtorEmailAddress).type(data)
        cy.log("Entered Debtor Email Address")
    }

    setDebtorAddressCountry(data) {
        cy.wait(2000)
        cy.get(this.debtorAddressCountryDropdown).type(data)
        cy.wait(2000)
        const element = 'span:contains("' + data + '")'
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

    clickDebtorAddressText() {
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

    clickDebtorBusinessText() {
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
        const element = 'span:contains("' + data + '")'
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
        cy.get(this.generalCollateralText).click().type(data)
        cy.log("Entered General Collateral Text")
    }

    clickReviewAndConfirmButton() {
        cy.get(this.reviewAndConfirmButton).click()
        cy.log("Clciked on Review and Confirm Button")
    }

    //Review and Confirm Methods

    setFolioNumberText(data) {
        cy.get(this.folioNumberText).type(data)
        cy.wait(2000)
        cy.log("Entered Folio Number")
    }

    clickRegisterAndPayButton() {
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

    verifyFeeSummary(data) {
        const securityAgreement = '.pt-5 > .FeeSummary_fee-list__item-value_1l2Y6'
        const serviceFee = '.py-4 > .FeeSummary_fee-list__item-value_1l2Y6'
        const currencyCAD = '.FeeSummary_fee-total__currency_v1YAJ'
        const totalFees = '.float-right > b'
        cy.get(securityAgreement).should('have.text', data.securityAgreement)
        cy.get(serviceFee).should('have.text', data.serviceFee)
        cy.get(currencyCAD).should('have.text', data.currency)
        cy.get(totalFees).should('have.text', data.totalFees)

    }

    setSecuredPartyCodeOrNameLookup(data) {
        cy.get(this.securedPartyCodeOrName).type(data.partyCode)
        cy.wait(2000)
        const element = 'span:contains("' + data.partyCodeResult + '")'
        cy.get(element).click()
    }

    setPartyIndividual(data) {
        cy.get(this.partyIndividualPersonRadioButton).check({ force: true })
        cy.get(this.partyFirstName).type(data.partyFirstName)
        cy.get(this.partyMiddleName).type(data.partyMiddleName)
        cy.get(this.partyLastName).type(data.partyLastName)
        cy.get(this.partyEmailAddress).type(data.partyEmailAddress)
        cy.get(this.partyAddressCountryDropdown).type(data.partyCountry)
        cy.get(this.partyAddressCountry).click()
        cy.get(this.partyAddressLine1Text).type(data.partyAddressLine1)
        cy.wait(2000)
        cy.get('[title = "' + data.addressTitle + '"]').click()
        cy.get(this.partyDeliveryInstructions).type(data.partyDeliveryInstructions)
        this.clickPartyDoneButton()
        cy.log("Entered Party Individual Details")
    }

    verifyPartyIndividual(data) {
        const partyIndividualName = '.pt-2 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > .list-item__title > .row > .col-9 > div'
        const partyIndividualAddress = '.pt-2 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(2) > .base-address > .address-block > .address-block__info > :nth-child(1)'
        const partyIndividualEmail = '.pt-2 > .col > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(3)'

    }

    setPartyBusiness(data) {
        cy.get(this.partyBusinessRadioButton).check({ force: true })
        cy.get(this.partyBusinessLegalName).type(data.partyBusinessName)
        this.clickPartyBusinessText()
        cy.get(this.partyEmailAddress).type(data.partyEmailAddress)
        cy.get(this.partyAddressCountryDropdown).type(data.partyCountry)
        cy.get(this.partyAddressCountry).click()
        cy.get(this.partyAddressLine1Text).type(data.partyAddressLine1)
        cy.wait(2000)
        cy.get('[title = "' + data.addressTitle + '"]').click()
        cy.get(this.partyDeliveryInstructions).type(data.partyDeliveryInstructions)
        this.clickPartyDoneButton()
        cy.log("Party Business Details got Entered")
    }

    setDebtorIndividual(data) {
        cy.get(this.addIndividualDebtor).click()
        cy.get(this.debtorFirstName).type(data.debtorFirstName)
        cy.get(this.debtorMiddleName).type(data.debtorMiddleName)
        cy.get(this.debtorLastName).type(data.debtorLastName)
        cy.get(this.debtorBirthdateMonthDropdown).type(data.debtorBirthMonth)
        cy.get(this.debtorBirthMonthText).click({multiple: true})
        cy.get(this.debtorBirthdateDay).type(data.debtorBirthDay)
        cy.get(this.debtorBirthdateYear).type(data.debtorBirthYear)
        cy.get(this.debtorEmailAddress).type(data.debtorEmailAddress)
        this.setDebtorAddressCountry(data.debtorCountry)
        cy.get(this.debtorAddressLine1Text).type(data.debtorAddressLine1)
        cy.wait(2000)
        cy.get('[title = "' + data.addressTitle + '"]').click()
        cy.get(this.debtorDeliveryInstructions).type(data.debtorDeliveryInstructions)
        this.clickDebtorDoneButton()
        cy.log("Debtor Individual Details got Entered")
    }

    setDebtorBusiness(data) {
        cy.get(this.addBusinessDebtor).click()
        cy.get(this.debtorBusinessLegalName).type(data.debtorBusinessName)
        cy.get(this.debtorBusinessText).click()
        cy.get(this.debtorEmailAddress).type(data.debtorEmailAddress)
        this.setDebtorAddressCountry(data.debtorCountry)
        cy.get(this.debtorAddressLine1Text).type(data.debtorAddressLine1)
        cy.wait(2000)
        cy.get('[title = "' + data.addressTitle + '"]').click()
        cy.get(this.debtorDeliveryInstructions).type(data.debtorDeliveryInstructions)
        this.clickDebtorDoneButton()
        cy.log("Debtor Business Details got Entered")
    }

    setVehicleCollateral(data, setVehicleType) {
        cy.get(this.addVehicleCollateral).click()

        if (setVehicleType === true) {
            this.setVehicleTypeDropdown(data.type)
        }

        cy.get(this.serialOrVINNumber).type(data.seialOrVINNumber)


        if (data.type == "Manufactured Home (MH)") {
            cy.get(this.manufacturedHomeRegistrationNumber).type(data.mhrNumber)
        }

        cy.get(this.yearText).type(data.year)
        cy.get(this.makeText).type(data.make)
        cy.get(this.modelText).type(data.model)
        this.clickCollateralDoneButton()
    }

    verifyVehicleCollateral(data) {
        const vehicleType = '.pl-4 > div'
        const vehicleYear = '.vehicle-row > :nth-child(2)'
        const vehicleMake = '.vehicle-row > :nth-child(3)'
        const vehicleModel = '.vehicle-row > :nth-child(4)'
        const vehicleSerialNumber = '.vehicle-cell'
        cy.get(vehicleType).should('have.text', " " + data.type + " ")
        cy.get(vehicleYear).should('have.text', data.year)
        cy.get(vehicleMake).should('have.text', data.make)
        cy.get(vehicleModel).should('have.text', data.model)
        cy.get(vehicleSerialNumber).should('have.text', " " + data.seialOrVINNumber + " ")
    }

    verifyGeneralCollateral(data) {
        const generalCollateralText = '.general-collateral-summary > .ma-0'
        cy.get(generalCollateralText).should('have.text', data)

    }

    clickSaveAndResumeLater(){
        cy.get(this.saveAndResumeLaterButton).click()
        cy.log("Draft got added to the table")
    }

    setOtherCrownChargeRegistration(data){
        cy.get(this.statuteName).type(data)
        cy.get(this.startRegistrationButton).click()
        cy.log("Entered Other Registration")
    }

    setSecuredParty(data) {
        cy.get(this.securedPartyCodeDropdown).type(data)
        cy.wait(2000)
        cy.get(this.securedPartyList).click()
        cy.wait(2000)
        cy.log("Entered secured Party")
    }

    verifyConfirmAuthorization(data) {
        cy.get(this.cerifyTitle).should('have.text', data.cerifyTitle)
        cy.get(this.certifyInfo).should('have.text', data.certifyInfo)
        cy.get(this.certifyName).should('have.text', data.certifyName)
        cy.get(this.certifyAccountName).should('have.text', data.certifyAccountName)
        cy.get(this.certifyAddress).should('have.text',data.certifyAddress)
        cy.get(this.confirmAuthorizationInfo).should('have.text', data.confirmAuthorizationInfo)
        const todaysDate = dayjs().format('MMMM D, YYYY')
        cy.log("todays date**********************************************************" + todaysDate)
        //const todaysDate = Cypress.clock().format('MMMM D, YYYY')
        cy.get(this.confirmCertifyDate).should('contain', todaysDate)
        cy.get(this.confirmCheckbox).click({ multiple: true })
        cy.log("Clicked on Confirm Checkbox")
        //cy.get(this.confirmCertifyDate).invoke('text').then(date)
        //log.info("Printing text" + date)
    }

}

export const securityAgreementPage = new SecurityAgreementPage()



