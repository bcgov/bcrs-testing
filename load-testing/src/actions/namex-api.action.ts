import { group, check, fail } from "k6"
import http from "k6/http"

import { setSleep } from "../helpers/sleep"
import { generateCompanyName, generateNameAnalysisParams } from "../helpers/namerequest"
import { NAMEX_API_URL, USER_EMAIL, USER_PHONE } from "../utils/config.util"
import { User } from "../types/user.type"
import { Contact } from "../types/contact.type"
import * as tokenAction  from "./token.action"

const BASE_URL = NAMEX_API_URL

const user: User = {
    firstname: 'Leonardo',
    lastname: 'DaVinci',
}

const contact: Contact = {
    email: USER_EMAIL,
    phone: USER_PHONE,
    postalCode: 'V5M 4X6',
    phoneExtension: '',
    city: 'Vancouver',
    country: 'CA',
    street: '1234 Madeup Way',
    streetAdditional: '',
    region: 'BC'
}


export function healthCheck (_httpParams: any) {

    let url = `${BASE_URL}/api/v1/nr-ops/healthz`

    group('Namex API', () => {

        let res = http.get(url, _httpParams({ name: 'Healthcheck' }))

        // check the user is query
        if (!check(res, { 'Health Check': (r) => r.status === 200 })) {
            fail(`Unable to connect api ${res.status} ${res.body}`)
        }

        setSleep(0.5, 1)
    })
}

function nameAnalysis(name: string, analysis_type: string, _httpParams: any) {
    let params = generateNameAnalysisParams(name)

    let url = `${BASE_URL}/api/v1/name-analysis${params}${analysis_type}`
    console.log(url)

    group('Namex API', () => {
        let res = http.get(url)
        if (!check(res, { 'Namerequest analysis performed correctly': (r) => r.status === 200 })) {
            fail(`Unable to perform name analysis ${res.status} ${res.body}`)
        }

        setSleep(0.5, 1)

    })
}


function exactNameMatch(name: string, _httpParams: any) {

    let url = `${BASE_URL}/api/v1/exact-match?query=${encodeURI(name.toUpperCase())}`
    console.log(url)

    group('Namex API', () => {

        let res = http.get(url, _httpParams({ name: 'exactNameMatch' }))
        if (!check(res, { 'Namerequest name exact match performed correctly': (r) => r.status === 200 })) {
            fail(`Unable to perform name exact match ${res.status} ${res.body}`)
        }

        setSleep(0.5, 1)

    })
}


function createNamerequest(name: string, _httpParams: any) {

    let url = `${BASE_URL}/api/v1/namerequests`
    console.log(url)
    
    let data = {
        "applicants": [{    "addrLine1":contact.street,
                            "city":contact.city,
                            "countryTypeCd":contact.country,
                            "declineNotificationInd":"",
                            "emailAddress":contact.email,
                            "firstName":user.firstname,
                            "lastName":user.lastname,
                            "phoneNumber":contact.phone,
                            "postalCd":contact.postalCode,
                            "stateProvinceCd":contact.region
                        }],
        "names":[{
            "name": name,
            "designation":"LIMITED",
            "choice":1,
            "name_type_cd":"CO",
            "consent_words":"",
            "conflict1":"",
            "conflict1_num":"",
        }],
        "natureBusinessInfo":"TESTING",
        "priorityCd":"N",
        "entity_type_cd":"CR",
        "request_action_cd":"NEW",
        "conversion_type_cd":null,
        "stateCd":"DRAFT",
        "english":true,
        "nameFlag":false,
        "submit_count":0,
        "additionalInfo":"*** New Request ***"}

    let resp: any = null
    let json: string = JSON.stringify(data)


    group('Namex API', () => {
        let res = http.post(url, json, { headers: { 'Content-Type': 'application/json' }})
        resp = JSON.parse(res.body as string)
        // check the user is created
        if (!check(res, { 'Namerequest created correctly': (r) => r.status === 201 })) {
            fail(`Unable to create namerequest ${res.status} ${res.body}`)
        }

        setSleep(10, 30)

    })

    return resp
}


function getNamerequestFees(nr: string) {

    let url = `${BASE_URL}/api/v1/payments/fees`
    console.log(url)

    let data = {
        "filing_type_code":"NM620",
        "jurisdiction":"BC",
        "date":"2024-05-16T18:45:06.000Z",
        "priority":false
    }

    let json: string = JSON.stringify(data)

    group('Namex API', () => {

        let res = http.post(url, json, { headers: { 'Content-Type': 'application/json', 'BCREG-NR': nr,  'BCREG-User-Email': contact.email, 'BCREG-User-Phone': contact.phone}})
        if (!check(res, { 'Namerequest retrieved fees correctly': (r) => r.status === 200 })) {
            fail(`Unable to retrieve fees ${res.status} ${res.body}`)
        }

        setSleep(5, 10)

    })
}

function createPayment(nd_id: string, _httpParams: any) {

    let url = `${BASE_URL}/api/v1/payments/${nd_id}/CREATE`
    console.log(url)
    let token = tokenAction.get_token()
    let token_str = `Bearer ${token}`
    
    let data = { "filingInfo": {
        "filingTypes": [
            {
                "filingTypeCode": "NM620",
                "priority": false
            }
        ]},
        "headers": {
            'Content-Type': 'application/json', 'waiveFees': true, 'Authorization': token_str
        }
    }

    let resp: any = null
    let json: string = JSON.stringify(data)


    group('Namex API', () => {
        let res = http.post(url, json, _httpParams({ name: 'PaymentCheck' }))

        resp = JSON.parse(res.body as string)
        // check the user is created
        if (!check(res, { 'Payment processed correctly': (r) => r.status === 201 })) {
            fail(`Unable to process payment ${res.status} ${res.body}`)
        }
        setSleep(10, 30)

    })


    return resp
}

function getPayments(nr: string, nrNUm: string) {

    let url = `${BASE_URL}/api/v1/payments/${nr}`

    group('Namex API', () => {

        let res = http.get(url, { headers: { 'Content-Type': 'application/json', 'BCREG-NR': nrNUm,  'BCREG-User-Email': contact.email, 'BCREG-User-Phone': contact.phone}})
        if (!check(res, { 'Namerequest payment retrieved correctly': (r) => r.status === 200 })) {
            fail(`Unable to retrieve payment ${res.status} ${res.body}`)
        }

        setSleep(0.5, 1)

    })
}


function processPaymentRefund(nr: string, nrNUm: string) {

    let url = `${BASE_URL}/api/v1/namerequests/${nr}/REQUEST_REFUND`
    console.log(url)

    group('Namex API', () => {

        let res = http.patch(url, JSON.stringify({}), { headers: { 'Content-Type': 'application/json', 'BCREG-NR': nrNUm,  'BCREG-User-Email': contact.email, 'BCREG-User-Phone': contact.phone}})

        if (!check(res, { 'Namerequest payment refunded correctly': (r) => r.status === 200 })) {
            fail(`Unable to process refund ${res.status} ${res.body}`)
        }

        setSleep(10, 30)

    })
}


export function processNamerequest (_httpParams: any): any {
    let company_name = generateCompanyName() 
    nameAnalysis(company_name, 'structure', _httpParams)
    nameAnalysis(company_name, 'designation', _httpParams)
    exactNameMatch(company_name, _httpParams)
    let nr = createNamerequest(company_name, _httpParams)
    getNamerequestFees(nr.nrNum)
    let pay = createPayment(nr.id, _httpParams)
    getPayments(pay.nrId, pay.nrNum)
    processPaymentRefund(pay.nrId, pay.nrNum)
 }
