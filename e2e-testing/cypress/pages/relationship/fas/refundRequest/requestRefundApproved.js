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
        cy.get('[data-test=btn-edit]').click()
    }

    statusDropDown()
    {
        cy.get('.v-select__selections').click()
    }

    refundRequestOption()
    {
        cy.get('#list-item-211-7 > .v-list-item__content').click() // Select Refund Request
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