export class LandingPage {
    constructor() {
    }

    visit(url) {
        cy.visit(url)
    }
}