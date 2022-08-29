/// <reference types="Cypress" />

import { bcolStaffPage } from "../../../../pages/assets/bcolStaffPage";


describe('Staff Flow Test Suite ', function () {

    it('BCOL Staff Test Case', function () {

        bcolStaffPage.visit(Cypress.env('PPR_STAFF'))

        bcolStaffPage.idirLogin()

        bcolStaffPage.bcolStaffLogin(Cypress.env('BCOL_USERNAME'), Cypress.env('BCOL_PASSWORD'))




    })

})