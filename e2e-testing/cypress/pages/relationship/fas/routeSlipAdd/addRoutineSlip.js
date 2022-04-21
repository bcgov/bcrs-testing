// Add Routine Slip
export class AddRoutineSlip
{
    constructor()
    {
    }

    routineDetailsCheque ()
    {
        
        cy.get('.col-sm-4 > .v-btn > .v-btn__content').click() //Add Routine Slip Button
        cy.get('.col-12 > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type('600000001') //Enter routine Slip
        cy.get('.row > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > [data-test=input-date-picker]').click() //Date Picker
        cy.get(':nth-child(3) > :nth-child(3) > .v-btn > .v-btn__content').click() //Select Date
        cy.get('.row > :nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type('Test Business') //Name of Person/Business
        cy.get('.pa-0 > .d-flex > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type('873521') //Cheque Number
        cy.get('.pa-0 > .d-flex > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').click()//Cheque Date Picker
        cy.get('.menuable__content__active > [data-test=date-date-picker] > .v-picker__body > :nth-child(1) > .v-date-picker-table > table > tbody > :nth-child(4) > :nth-child(3) > .v-btn > .v-btn__content').click() //Select Date
        cy.get('[data-test=paidAmount-0]').type('100') //Enter Amount
        cy.wait(3000)
        cy.get('[data-test=btn-create-routing-slip] > .v-btn__content > span').click() //Navigate to Review and Create Screen
    }

    addExtraCheque()
    {
        cy.get('.v-btn__content > .font-weight-bold').click() //Add Extra/More Cheques
    }

    routineDetailsCash ()
    {
        cy.get('.col-sm-4 > .v-btn > .v-btn__content').click() //Add Routine Slip Button
        cy.get('.col-12 > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type('600000002') //Enter routine Slip
        cy.get('.row > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > [data-test=input-date-picker]').click() //Date Picker
        cy.get(':nth-child(3) > :nth-child(3) > .v-btn > .v-btn__content').click() //Select Date
        cy.get('.row > :nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type('Test Business') //Name of Person/Business
        cy.get(':nth-child(2) > .v-radio > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click() // Select Cash
        cy.get('[data-test=txtReceiptNumber]').type('54665') //Receipt Number
        cy.get('[data-test=txtPaidAmount]').type('1000') //Enter Amount
        cy.wait(3000)
        cy.get('[data-test=btn-create-routing-slip] > .v-btn__content > span').click() //Navigate to Review and Create Screen
    }
}
export const addRoutineSlip = new AddRoutineSlip()