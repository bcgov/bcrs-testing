// Add Routine Slip
export class AddRoutineSlip
{
    constructor()
    {
    }

    routineDetailsCheque ()
    {
        cy.get('.col-4 > .v-btn > .v-btn__content').click() //Add Routine Slip Button
        cy.wait(2000)
        cy.get('.col-12 > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type('1094879'+10) //Enter routine Slip
        cy.wait(2000)
        cy.get('.row > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > [data-test=input-date-picker]').click() //Date Picker
        cy.wait(2000)
        cy.get(':nth-child(4) > :nth-child(3) > .v-btn > .v-btn__content').click()
        cy.get('.row > :nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type('Test Business') //Name of Person/Business
        cy.wait(2000)
        cy.get('.pa-0 > .d-flex > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type('873521') //Cheque Number
        cy.wait(2000)
        cy.get('.pa-0 > .d-flex > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').click()//Cheque Date Picker
        cy.wait(2000)
        cy.get('.menuable__content__active > [data-test=date-date-picker] > .v-picker__body > :nth-child(1) > .v-date-picker-table > table > tbody > :nth-child(4) > :nth-child(3) > .v-btn > .v-btn__content').click()
        cy.wait(2000)
        cy.get('[data-test=paidAmount-0]').type('100') //Enter Amount
        cy.wait(5000)
        //cy.get('.v-btn__content > .font-weight-bold').click() //Add Extra/More Cheques
        cy.get('[data-test=btn-create-routing-slip] > .v-btn__content > span').click() //Navigate to Review and Create Screen
    }

    routineDetailsCash ()
    {
        cy.get('.col-4 > .v-btn > .v-btn__content').click() //Add Routine Slip Button
        cy.wait(2000)
        cy.get('.col-12 > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type('6752674'+10) //Enter routine Slip
        cy.wait(2000)
        cy.get('[data-v-4bb48660=""][data-v-c098b83a=""] > .pl-0 > .v-form > .row > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').click() //Date Picker
        cy.wait(2000)
        cy.get(':nth-child(3) > :nth-child(4) > .v-btn').click() //Select Date
        cy.wait(2000)
        cy.get('.row > :nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type('Test Business') //Name of Person/Business
        cy.wait(2000)
        cy.get(':nth-child(2) > .v-radio > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click() // Select Cash
        cy.wait(2000)
        cy.get('[data-test=txtReceiptNumber]').type('873521') //Receipt Number
        cy.wait(2000)
        cy.get('[data-test=txtPaidAmount]').type('100') //Enter Amount
        cy.wait(5000)
        cy.get('[data-test=btn-create-routing-slip] > .v-btn__content > span').click() //Navigate to Review and Create Screen
    }
}
export const addRoutineSlip = new AddRoutineSlip()