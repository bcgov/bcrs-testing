import {decideBusiness} from '../../pages/entity/decideBusinessName'

const testData = require('../../fixtures/entity/nameRequestData.json');

let json = testData.newRequestDetailsForm.scenarios;
let loginData = require('../../fixtures/relationship/bcsc-2027.json');


function testRequestCreation(scenario) {
    it('Create name request for ' + json[scenario], function () {
        decideBusiness.visit(Cypress.env('BCRS_LOGIN_NAME_REQUEST'));
        //decideBusiness.navigateToRequestANamePage();
        decideBusiness.newRequestDetailsForm(json[scenario][0], json[scenario][1], json[scenario][2], json[scenario][3], json[scenario][4]);
        decideBusiness.continueRequestCreation(testData);
    });
}

describe('Request A Name feature', function () {
    describe('Test functionality for request a name feature', function () {
        before(function () {
            cy.fixture('relationship/bcsc-2027').then(function (data) {
                this.data = data
                this.loginUrl = Cypress.env('BCRS_LOGIN');
                cy.bcscLogin(this.loginUrl, data.username,data.password);
            });
        });

        for (let scenario in json) {
            testRequestCreation(scenario);
        }
    });
});
