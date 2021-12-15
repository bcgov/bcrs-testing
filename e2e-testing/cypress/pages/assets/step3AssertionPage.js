/// <reference types="Cypress" />

const log = require("log");
const tab = require('cypress-plugin-tab')

export class Step3AssertionPage {

    constructor() {

        //step3

        this.addCollateralStepper = '#step-3-btn'

        //Vehicle Collateral

        this.addVehicleCollateral = 'button#btn-add-collateral'
        this.vehicleTypeDropdown = '.v-select__slot'
        this.mv = '#txt-type-drop-Motor Vehicle (MV)'
        this.bo = '#txt-type-drop-Boat (BO)'
        this.serialOrVINNumber = 'input#txt-serial'
        this.manufacturedHomeRegistrationNumber = 'input#txt-man'
        this.yearText = 'input#txt-years'
        this.makeText = 'input#txt-make'
        this.modelText = 'input#txt-model'
        this.collateralDoneButton = 'button#done-btn-collateral'
        this.generalCollateralText = '#general-collateral-new-desc'
        this.generalCollateralDescription = '.general-collateral-summary > .ma-0'

        // Verification

        this.editButton = '#class-0-change-added-btn'
        this.editDropdownButton = ':nth-child(1) > .actions-width > .actions > .actions-border > .smaller-actions'
        this.dropdownRemoveButton = '.v-list'
        this.serialNumberValidationText = ':nth-child(2) > .col > .v-input > .v-input__control > .v-text-field__details'
        this.makeValidationText = ':nth-child(4) > .col > .v-input > .v-input__control > .v-text-field__details'
        this.modelValidationText = ':nth-child(5) > .col > .v-input > .v-input__control > .v-text-field__details'
        this.cancelButton = '#cancel-btn-collateral'
        this.removeButton = '#remove-btn-collateral'



    }

    clickStep3() {
        cy.get(this.addCollateralStepper).click()
        cy.log("Entered to Step3")
    }

    setVehicleTypeDropdown(data) {
        cy.wait(2000)
        cy.get(this.vehicleTypeDropdown).click()
        cy.wait(2000)
        const element = 'span:contains("' + data + '")'
        cy.get(element).click()
        cy.log("Clicked on Vehicle Type Dropdown")
    }

    clickCollateralDoneButton() {
        cy.wait(2000)
        cy.get(this.collateralDoneButton).click()
        cy.log("Clicked on Collateral Done Button")
    }


    // setVehicleCollateral(data, setVehicleType) {
    //     cy.get(this.addVehicleCollateral).click()

    //     if (setVehicleType === true) {
    //         this.setVehicleTypeDropdown(data.type)
    //     }

    //     cy.get(this.serialOrVINNumber).type(data.seialOrVINNumber)


    //     if (data.type == "Manufactured Home (MH)") {
    //         cy.get(this.manufacturedHomeRegistrationNumber).type(data.mhrNumber)
    //     }

    //     cy.get(this.yearText).type(data.year)
    //     cy.get(this.makeText).type(data.make)
    //     cy.get(this.modelText).type(data.model)
    //     this.clickCollateralDoneButton()
    // }

    setVehicleCollateral(data) {
        cy.get(this.addVehicleCollateral).click()
        this.setVehicleTypeDropdown(data.type)
        cy.get(this.serialOrVINNumber).type(data.seialOrVINNumber)
        if (data.type == "Manufactured Home (MH)") {
            cy.get(this.manufacturedHomeRegistrationNumber).type(data.mhrNumber)
        }

        cy.get(this.yearText).type(data.year)
        cy.get(this.makeText).type(data.make)
        cy.get(this.modelText).type(data.model)
        this.clickCollateralDoneButton()
    }


    verifyVehicleCollateralEditModal(data) {
        cy.get(this.editButton).click()
        cy.get(this.serialOrVINNumber).clear()
        cy.get(this.makeText).clear()
        cy.get(this.modelText).clear()
        cy.get(this.collateralDoneButton).click()
        cy.get(this.serialNumberValidationText).should('have.text', data.serialNumberValidation)
        cy.get(this.makeValidationText).should('have.text', data.makeValidationText)
        cy.get(this.modelValidationText).should('have.text', data.modelValidationText)
        cy.get(this.cancelButton).click()
        cy.log("Verified Collateral Edit Modal")
    }

    verifyVehicleCollateral(data) {
        const vehicleType = ':nth-child(1) > .pl-4'
        const vehicleYear = 'tbody > :nth-child(1) > :nth-child(2)'
        const vehicleMake = 'tbody > :nth-child(1) > :nth-child(3)'
        const vehicleModel = 'tbody > :nth-child(1) > :nth-child(4)'
        const vehicleSerialNumber = ':nth-child(1) > .vehicle-cell'
        cy.get(vehicleType).should('have.text', " " + data.type + " ")
        cy.get(vehicleYear).should('have.text', " " + data.year + " ")
        cy.get(vehicleMake).should('have.text', data.make)
        cy.get(vehicleModel).should('have.text', data.model)
        cy.get(vehicleSerialNumber).should('have.text', " " + data.seialOrVINNumber + " ")
        cy.log("Verified Vehicle Collateral")
    }

}
export const step3AssertionPage = new Step3AssertionPage()