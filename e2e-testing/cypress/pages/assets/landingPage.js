/// <reference types="Cypress" />
const log = require("log");

export class LandingPage {
    constructor() {

        this.pprLink = 'a[href = "/ppr-marketing"]'
        this.accountDropdown = 'span:contains("Log in to my BC Registries Account")'
        this.bcServicesCardMenuItem = 'div:contains("BC Services Card")'
        this.virtualCardTesting = '#tile_btn_virtual_device_div_id'
        this.cardSerialNumber = '#csn'
        this.continueNext = '#continue'
        this.passcode = '#passcode'
        this.continue = '#btnSubmit'

    }

    visit(url) {
        cy.visit(url)
    }

    clickPPRLink() {
        cy.get(this.pprLink).click()
        cy.log("Clicked on PPR Link")
    }

    clickAccountDropdown() {
        cy.get(this.accountDropdown).click()
        cy.log("Clicked on account dropdown link")
    }

    clickBCServicesCardMenuItem() {
        cy.get(this.bcServicesCardMenuItem).click()
        cy.log("Clicked on BC services card")
    }

    clickVirtualCardTestingButton() {
        cy.get(this.virtualCardTesting).click()
        cy.log("Clicked on Virtual Card Testing button")
    }

    setCardSerialNumber(data) {
        cy.wait(2000)
        cy.get(this.cardSerialNumber).type(data)
        cy.log("Entered Card Serial Number")
    }

    clickContinueButton() {
        cy.get(this.continueNext).click()
        cy.log("Clicked on Continue button")
    }

    setPasscode(data) {
        cy.get(this.passcode).type(data)
        cy.log("Passcode got entered")
    }

    clickSubmitButton() {
        cy.get(this.continue).click()
        cy.log("Clicked on submit button")
    }

    bcscLogin(data){
        cy.wait(2000)
        cy.get(this.cardSerialNumber).type(data.username)
        cy.get(this.continueNext).click()
        cy.get(this.passcode).type(data.password)
        cy.get(this.continue).click()
        cy.log("BCSC login is successful")

    }


} export const landingPage = new LandingPage()