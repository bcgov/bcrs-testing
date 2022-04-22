export class RefundRequestDetails
{
    constructor()
    {
    }

    /*fasUrl ()
    {
        cy.fixture('relationship/fasRelationsLogin.json').then(urlData)
        {
            this.urlData = this.urlData
            this.testFas = Cypress.env('test-fas')
        }
    }*/

    editStatus()
    {
        //cy.get('[data-test=btn-edit]').click()
        cy.get('.col-sm-9 > :nth-child(2) > .v-btn > .v-btn__content').click()
    }

    statusDropDown()
    {
        cy.get('.v-select__selections').click()
    }

    placeOnHold()
    {
        cy.get('.v-list-item__title').contains('Place routing slip on hold').click()
        
    }

    placeOnActive()
    {
        cy.get('.v-list-item__title').contains('Place routing slip to active').click()
    }

    cancelWriteOffRequest()
    {
        cy.get('.v-list-item__title').contains('Cancel Write off request').click()
    }

    placeOnNSF()
    {
        cy.get('.v-list-item__title').contains('Place routing slip to NSF').click()
    }

    placeOnWriteOff()
    {
        cy.get('.v-list-item__title').contains('Write off request').click()
    }

    popUpWindowNSF()
    {
        cy.get('v-btn__content').contains('Place status to NSF').click()
    }

    popUpWindowCancel()
    {
        cy.get('v-btn__content').contains('Cancel').click()
    }

    refundRequestOption()
    {
        cy.get('.v-list-item__title').contains('Refund request').click()
    }

    /*formDetails ()
    {
        cy.fixture('relationship/refundRequestForm.json').then((detailsForm) =>
        {
            const name=detailsForm.NameOfPersonOrOrganization
            const address=detailsForm.StreetAddress
            const city=detailsForm.city
            const province=detailsForm.ProvinceOrState
            const pc=detailsForm.PostalCode
            const country=detailsForm.Country
            cy.get('[data-test=txtName]').type(name,'{tab}') //Name
            cy.get('#street-address-1').type(address,'{tab}') //Address
            cy.get('#input-287').type(city,'{tab}') //City
            cy.get('#input-290').type(province,'{tab}') //Province
            cy.get('#input-293').type(pc,'{tab}') //Postal Code
            cy.get(':nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click(country) //Country
        })
    }*/

    name()
    {
        cy.get('[data-test=txtName]').type('RA{enter}') //Name
    }

    address()
    {
        cy.get('#street-address-1').type('655 Douglas Stree{enter}') //Address
    }
    
    city()
    {
        cy.get('#input-287').type('Victoria{enter}') //City
    }

    province()
    {
        cy.get('#input-290').click('British Columbia{enter}') //Province
    }
    
    postalCode()
    {
        cy.get('#input-293').type('V8V 0B6{enter}') //Postal Code
    }        
            
    countryDropDown()
    {
        cy.get(':nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click()
    }

    selectCanada()
    {
        cy.get('#list-item-491-39 > .v-list-item__content').click()
    }

    doneButton()
    {
        cy.get('[data-test=btn-edit-routing-done]').click()
    }

    cancelButton()
    {
        cy.get('[data-test=btn-edit-routing-cancel]').click()
    }
}

export const requestRefundDetails = new RefundRequestDetails()