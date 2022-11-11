/// <reference types="Cypress" />

export class MHRRegistrationPage {

    constructor() {

        this.mhrTab = 'b:contains("Manufactured Home Registrations")'
        this.mhrRegistrationButton = '.mhr-registration-bar-btn'
        this.addMHRegistration = '#my-reg-add'
        this.registrationHeader = '#registration-header'

        //Step1 - Describe your Home

        //Manufacturer, Make, and Model
        this.mhrMakeModelHeader = 'h2:contains("Manufacturer, Make, and Model")'
        this.mhrMakeModelTitle = '#mhr-make-model > .mb-6'
        this.manufacturerName = '#manufacturer-name'
        this.manufacturerYear = '#manufacturer-year'
        this.circaYear = '.col-6 > .v-input > .v-input__control > .v-input__slot > .v-label'
        this.yearCheckbox = 'label:contains("This Year of Manufacture is approximate")'
        this.manufacturerMake = '#manufacturer-make'
        this.manufacturerModel = '#manufacturer-model'

        //Home Sections
        this.mhrHomeSectionsHeader = 'h2:contains("Home Sections")'
        this.homeSectionsTitle = '#mhr-home-sections > p.mt-2'
        this.addHomeSectionButton = '.mt-1'
        this.serialNumber = '#serial-number'
        this.lengthFeet = '#length-feet'
        this.lengthInches = '#length-inches'
        this.widthFeet = '#width-feet'
        this.widthInches = '.col-sm-10 > :nth-child(6) > :nth-child(2) > .v-input > .v-input__control > .v-input__slot'
        this.doneButton = '#done-btn-party'
        this.cancelButton = '#cancel-btn-party'
        this.removeButton = '#remove-btn-party'
        this.editButton = 'span:contains("Edit")'

        //Home Certification
        this.homeCertificationHeader = 'h2:contains("Home Certification")'
        this.homeCertificationTitle = '#mhr-describe-your-home > :nth-child(3) > .mt-2'
        this.csaNumberOption = '.csa-radio'
        this.csaNumber = '#csa-number'
        this.csaStandard = '#csa-form > .v-select > .v-input__control > .v-input__slot'
        this.csaStandardOption1 = 'html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1)'
        this.csaStandardOption2 = 'html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2)'
        this.engineerInspectionOption = '.engineer-radio'
        this.engineerName = '#engineer-name'
        this.engineerDate = '#date-text-field'

        //Rebuilt Status
        this.rebuitStatusHeader = 'h2:contains("Rebuilt Status")'
        this.rebuitStatusTitle = ':nth-child(4) > .mt-2'
        this.rebuiltDescription = '#rebuilt-status-text'

        //Other Information
        this.otherInfoHeader = 'h2:contains("Other Information")'
        this.otherInfoTitle = '#mhr-other-information > .mt-2'
        this.otherDetails = '#other-remarks'
        this.regNextButton = '#reg-next-btn'

        //Step2 - Submitting Party

        //Submitting Party
        this.submittingPartyHeader = 'h2:contains("Submitting Party")'
        this.submittingPartyTitle = '#mhr-add-submitting-party > .mt-2'
        this.submittingPartyCode = '#txt-code'
        this.individualPersonOption = '.person-radio'
        this.individualPersonFirstName = '#first-name'
        this.individualPersonMiddleName = '#middle-name'
        this.individualPersonLastName = '#last-name'
        this.submittingPartyEmail = '#submitting-party-email'
        this.submittingPartyPhone = '#submitting-party-phone'
        this.submittingPartyPhoneExtention = '#submitting-party-phone-ext'
        this.mailingAddressTitle = '.py-1'
        // this.country = '.v-form > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-select__slot'
        this.submittingPartyAddressLine1 = '#street-address-1'
        this.businessOption = '.business-radio'
        this.businessName = '#business-name'
        this.submittingPartyDropdownList = ''
        this.deliveryInstructions = ':nth-child(5) > .v-input > .v-input__control > .v-input__slot'
        this.countryDropdown = '.v-form > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-select__slot'
        this.country = '.v-list-item__mask'
        this.partyAddressLine1Text = 'input[id^="street-address"]'

        //Document ID
        this.documentIDHeader = 'h2:contains("Document ID")'
        this.documentIDTitle = '#mhr-submitting-party-doc-id > .mt-2'
        this.documentIDNumber = '#doc-id-num'

        //Attention or Reference Number
        this.referenceNumberHeader = 'h2:contains("Attention or Reference Number")'
        this.referenceNumberTitle = '#mhr-submitting-party-reference > .mt-2'
        this.referenceNumberText = '#attention-or-reference-number'
        this.backButton = '#reg-back-btn'

        //Step3 - Home Owners

        //Owners
        this.ownersHeader = 'h2:contains("1. Owners")'
        this.ownersTitle = '#mhr-owners > .mt-2'
        this.addPersonButton = '#add-person-btn'
        this.addOrganizationButton = '#add-org-btn'
        this.personFirstName = '#first-name'
        this.personMiddleName = '#middle-name'
        this.personLastName = '#last-name'
        this.suffix = '#suffix'
        this.phoneNumber = '#phone-number'
        this.phoneExtension = '#phone-ext'
        this.addressLine1 = '#street-address-3'
        this.homeOwnerGroups = '#home-owner-groups'
        this.orgName = '#org-name'

        //Step4 - Location of Home

        //Location Type
        this.locationTypeHeader = 'h2:contains("Location Type")'
        this.locationTypeTitle = '#mhr-home-location-type-wrapper > .mt-2'
        this.dealersLotOption = '#lot-option'
        this.dealerName = 'label:contains("Dealer / Manufacturer Name")'
        this.homeParkOption = '#home-park-option'
        this.parkName = 'label:contains("Park Name")'
        this.padNumber = 'label:contains("Pad (Optional)")'
        this.otherOption = '#other-option'
        this.reserveOption = '#reserve-option'
        this.strataOption = '#strata-option'
        this.otherLandOption = '#other-land-option'
        this.pidOneInput = '#pid-one-input'
        this.pidTwoInput = '#pid-two-input'
        this.pidThreeInput = '#pid-three-input'

        //Civic Address of the Home
        this.civicAddressHeader = 'h2:contains("Civic Address of the Home")'
        this.civicAddressTitle = '#mhr-home-civic-address-wrapper > .mt-2'
        this.streetAddress = '#street'
        this.streetAdditional = '#streetAdditional'
        this.city = '#city'

        //Step5 - Review & confirm

        this.reviewAndConfirmHeader = 'h2:contains("Review and Confirm")'
        this.reviewAndConfirmTitle = 'div.mt-10 > .mt-4'
        this.mhrRegistrationSummary = 'label:contains("Your Home")'
        this.errorText = '.error-text mx-1'

    }

    selectMHRTab() {
        cy.get(this.mhrTab).click()
        cy.log("Clicked on MHR Tab")
    }

    clickRegisterMHButton() {
        cy.get(this.mhrRegistrationButton).click()
        cy.log("Clicked on MH Registration Button")
    }

    clickRegistrationNextButton() {
        cy.get(this.regNextButton).click()
        cy.log("Clicked on the registration next button")
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

    setHomeSections(data) {
        cy.get(this.mhrHomeSectionsHeader).should('have.text', data.mhrHomeSectionsHeader)
        cy.get(this.homeSectionsTitle).should('have.text', data.homeSectionsTitle)
        cy.get(this.addHomeSectionButton).click()
        cy.get(this.serialNumber).type(data.serialNumber)
        cy.get(this.lengthFeet).type(data.lengthFeet)
        cy.get(this.lengthInches).type(data.lengthInches)
        cy.get(this.widthFeet).type(data.widthFeet)
        cy.get(this.widthInches).type(data.widthInches)
        cy.get(this.doneButton).click()
        cy.log("Home Section details got Entered")

    }

    setHomeCertification(data) {
        cy.get(this.homeCertificationHeader).should('have.text', data.homeCertificationHeader)
        cy.get(this.homeCertificationTitle).should('have.text', data.homeCertificationTitle)
        cy.get(this.csaNumberOption).click()
        cy.get(this.csaNumber).type(data.csaNumber)
        cy.get(this.csaStandard).click()
        cy.get(this.csaStandardOption1).click()
        cy.log("Home Certification details got entered")
    }

    setRebuiltStatus(data) {
        cy.get(this.rebuitStatusHeader).should('have.text', data.rebuitStatusHeader)
        cy.get(this.rebuitStatusTitle).should('have.text', data.rebuitStatusTitle)
        cy.get(this.rebuiltDescription).type(data.rebuiltDescription)
        cy.log("Rebuilt Status description got entered")
    }

    setOtherInformation(data) {
        cy.get(this.otherInfoHeader).should('have.text', data.otherInfoHeader)
        cy.get(this.otherInfoTitle).should('have.text', data.otherInfoTitle)
        cy.get(this.otherDetails).type(data.otherDetails)
        cy.log("Other Info details got entered")
    }

    setSubmittingPartyCodeLookup(data) {
        cy.get(this.submittingPartyHeader).should('have.text', data.submittingPartyHeader)
        cy.get(this.submittingPartyTitle).should('have.text', data.submittingPartyTitle)
        cy.get(this.submittingPartyCode).type(data.partyCode)
        cy.wait(2000)
        const element = 'span:contains("' + data.partyCodeResult + '")'
        cy.get(element).click()
        cy.get(this.submittingPartyEmail).type(data.submittingPartyEmail)
        cy.log("Submitting Party Code got entered")
    }

    setSubmittingPartyNameLookup(data) {
        cy.get(this.submittingPartyHeader).should('have.text', data.submittingPartyHeader)
        cy.get(this.submittingPartyTitle).should('have.text', data.submittingPartyTitle)
        cy.get(this.submittingPartyCode).type(data.partyName)
        cy.wait(2000)
        const element = 'span:contains("' + data.partyCodeResult + '")'
        cy.get(element).click()
        cy.log("Submitting Party Name got entered")
        cy.get(this.submittingPartyEmail).type(data.submittingPartyEmail)
    }

    addSubmittingPartyIndividualPerson(data) {
        cy.get(this.submittingPartyHeader).should('have.text', data.submittingPartyHeader)
        cy.get(this.submittingPartyTitle).should('have.text', data.submittingPartyTitle)
        cy.get(this.personFirstName).type(data.personFirstName)
        cy.get(this.personMiddleName).type(data.personMiddleName)
        cy.get(this.personLastName).type(data.personLastName)
        cy.get(this.submittingPartyEmail).type(data.submittingPartyEmail)
        cy.get(this.submittingPartyPhone).type(data.phoneNumber)
        cy.get(this.submittingPartyPhoneExtention).type(data.phoneExtension)
        cy.get(this.mailingAddressTitle).should('have.text', data.mailingAddressTitle)
        // cy.wait(2000)
        // cy.get(this.country).type(data)
        // cy.wait(2000)
        cy.get(this.countryDropdown).type(data.country)
        cy.get(this.country).click()
        cy.wait(2000)
        cy.get(this.submittingPartyAddressLine1).type(data.partyAddressLine1)
        cy.wait(2000)
        cy.get('[title = "' + data.addressTitle + '"]').click()
        // const element = 'span:contains("' + data + '")'
        // cy.get(element).click()
        cy.get(this.deliveryInstructions).type(data.deliveryInstructions)
        cy.log("Submitting Party Individual Person details got entered")
    }

    addSubmittingPartyBusiness(data) {
        cy.get(this.submittingPartyHeader).should('have.text', data.submittingPartyHeader)
        cy.get(this.submittingPartyTitle).should('have.text', data.submittingPartyTitle)
        cy.get(this.businessOption).click()
        cy.get(this.businessName).type(data.businessName)
        cy.get(this.submittingPartyEmail).type(data.submittingPartyEmail)
        cy.get(this.submittingPartyPhone).type(data.phoneNumber)
        cy.get(this.submittingPartyPhoneExtention).type(data.phoneExtension)
        cy.get(this.mailingAddressTitle).should('have.text', data.mailingAddressTitle)
        cy.get(this.countryDropdown).type(data.country)
        cy.get(this.country).click()
        cy.wait(2000)
        cy.get(this.submittingPartyAddressLine1).type(data.partyAddressLine1)
        cy.wait(2000)
        cy.get('[title = "' + data.addressTitle + '"]').click()
        cy.get(this.deliveryInstructions).type(data.deliveryInstructions)
        cy.log("Submitting Party Business details got entered")
    }

}
export const mhrRegistrationPage = new MHRRegistrationPage()