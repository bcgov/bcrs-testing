/// <reference types="Cypress" />

export class MHRRegistrationPage {

    constructor() {

        mhrTab = 'b:contains("Manufactured Home Registrations")'
        mhrRegistrationButton = '.mhr-registration-bar-btn'
        addMHRegistration = '#my-reg-add'
        registrationHeader = '#registration-header'

        //Step1 - Describe your Home

        //Manufacturer, Make, and Model
        mhrMakeModelHeader = 'h2:contains("Manufacturer, Make, and Model")'
        mhrMakeModelTitle = '.mt-2 mb-6'
        manufacturerName = '#manufacturer-name'
        manufacturerYear = '#manufacturer-year'
        circaYear = '#circa-year'
        yearCheckbox = 'label:contains("This Year of Manufacture is approximate")'
        manufacturerMake = '#manufacturer-make'
        manufacturerModel = '#manufacturer-model'

        //Home Sections
        mhrHomeSectionsHeader = 'h2:contains("Home Sections")'
        homeSectionsTitle = '.mt-2'
        addHomeSectionButton = '.mt-1 add-home-section-btn'
        serialNumber = '#serial-number'
        lengthFeet = '#length-feet'
        lengthInches = '#length-inches'
        widthFeet = '#width-feet'
        widthInches = '#numberInput width-inches'
        doneButton = '#done-btn-party'
        cancelButton = '#cancel-btn-party'
        removeButton = '#remove-btn-party'
        editButton = 'span:contains("Edit")'

        //Home Certification
        homeCertificationHeader = 'h2:contains("Home Certification")'
        homeCertificationTitle = 'mt-2'
        csaNumberOption = '#csa-option'
        csaNumber = '#csa-number'
        csaStandard = '#csa-standard'
        engineerInspectionOption = '#engineer-option'
        engineerName = '#engineer-name'
        engineerDate = '#date-text-field'

        //Rebuilt Status
        rebuitStatusHeader = 'h2:contains("Rebuilt Status")'
        rebuitStatusTitle = '.mt-2'
        rebuiltDescription = '#rebuilt-status-text'

        //Other Information
        otherInfoHeader = 'h2:contains("Other Information")'
        otherInfoTitle = '.mt-2'
        otherDetails = '#other-remarks'
        regNextButton = '#reg-next-btn'

        //Step2 - Submitting Party

        //Submitting Party
        submittingPartyHeader = 'h2:contains("Submitting Party")'
        submittingPartyTitle = '.mt-2'
        submittingPartyCode = '#txt-code'
        individualPersonOption = '#person-option'
        individualPersonFirstName = '#first-name'
        individualPersonMiddleName = '#middle-name'
        individualPersonLastName = '#last-name'
        submittingPartyEmail = '#submitting-party-email'
        submittingPartyPhone = '#submitting-party-phone'
        submittingPartyPhoneExtention = '#submitting-party-phone-ext'
        mailingAddressTitle = '.py-1'
        country
        addressLine1 = '#street-address-1'
        businessOption = '#business-option'
        businessName = '#business-name'

        //Document ID
        documentIDHeader = 'h2:contains("Document ID")'
        documentIDTitle = '.mt-2'
        documentIDNumber = '#doc-id-num'

        //Attention or Reference Number
        referenceNumberHeader = 'h2:contains("Attention or Reference Number")'
        referenceNumberTitle = '.mt-2'
        referenceNumberText = '#attention-or-reference-number'
        backButton = '#reg-back-btn'

        //Step3 - Home Owners

        //Owners
        ownersHeader = 'h2:contains("1. Owners")'
        ownersTitle = '.mt-2 mb-0'
        addPersonButton = '#add-person-btn'
        addOrganizationButton = '#add-org-btn'
        personFirstName = '#first-name'
        personMiddleName = '#middle-name'
        personLastName = '#last-name'
        suffix = '#suffix'
        phoneNumber = '#phone-number'
        phoneExtension = '#phone-ext'
        addressLine1 = '#street-address-3'
        homeOwnerGroups = '#home-owner-groups'
        orgName = '#org-name'

        //Step4 - Location of Home

        //Location Type
        locationTypeHeader = 'h2:contains("Location Type")'
        locationTypeTitle = '.mt-2 mb-6'
        dealersLotOption = '#lot-option'
        dealerName = 'label:contains("Dealer / Manufacturer Name")'
        homeParkOption = '#home-park-option'
        parkName = 'label:contains("Park Name")'
        padNumber = 'label:contains("Pad (Optional)")'
        otherOption = '#other-option'
        reserveOption = '#reserve-option'
        strataOption = '#strata-option'
        otherLandOption = '#other-land-option'
        pidOneInput = '#pid-one-input'
        pidTwoInput = '#pid-two-input'
        pidThreeInput = '#pid-three-input'

        //Civic Address of the Home
        civicAddressHeader = 'h2:contains("Civic Address of the Home")'
        civicAddressTitle = '.mt-2'
        streetAddress = '#street'
        streetAdditional = '#streetAdditional'
        city = '#city'

        //Step5 - Review & confirm

        reviewAndConfirmHeader = 'h2:contains("Review and Confirm")'
        reviewAndConfirmTitle = '.mt-4'
        mhrRegistrationSummary = 'label:contains("Your Home")'
        errorText = '.error-text mx-1'

    }

    selectMHRTab() {
        cy.get(this.mhrTab).click()
        cy.log("Clicked on MHR Tab")
    }

    clickRegisterMHButton() {
        cy.get(this.mhrRegistrationButton).click()
        cy.log("Clicked on MH Registration Button")
    }

    setManufacturerMakeAndModel(data) {
        cy.get(this.mhrMakeModelHeader).should('have.text', data.mhrMakeModelHeader)
        cy.get(this.mhrMakeModelTitle).should('have.text', data.mhrMakeModelTitle)
        cy.get(this.manufacturerName).type(data.manufacturerName)
        cy.get(this.manufacturerYear).type(data.manufacturerYear)
        cy.get(this.circaYear).click()
        cy.get(this.manufacturerMake).type(data.manufacturerMake)
        cy.get(this.manufacturerModel).type(data.manufacturerModel)
        cy.log("Manufacturer, Make and Model Details got Entered")
    }

    setHomeSections() {
        cy.get(this.mhrHomeSectionsHeader).should('have.text', data.mhrHomeSectionsHeader)
        //cy.get(this.)
    }

}
export const mhrRegistrationPage = new MHRRegistrationPage()