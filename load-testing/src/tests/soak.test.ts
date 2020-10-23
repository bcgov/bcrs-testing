import { group } from 'k6'
import { Options } from 'k6/options'

import { createRequestConfigWithTag } from '../helpers/request'
import { setSleep } from '../helpers/sleep'

import * as tokenAction from '../actions/token.action'
import * as authApiAction from '../actions/auth-api.action'
import * as payApiAction from '../actions/pay-api.action'
import * as legalApiAction from '../actions/legal-api.action'

export let options: Partial<Options> = {
    stages: [
        { duration: '2m', target: 50 }, // ramp up to 50 users
        { duration: '3h56m', target: 50 }, // stay at 50 for ~4 hours
        { duration: '2m', target: 0 }
    ],
    thresholds: {
        http_req_duration: ['avg<800', 'p(95)<800'], // 95% of requests must complete below 800ms
        'http_req_duration{name:GetUserProfile}': ['avg<800', 'p(90)<900'],
        'http_req_duration{name:GetFee}': ['avg<800', 'p(90)<900'],
        'http_req_duration{name:GetBusiness}': ['avg<800', 'p(90)<900'],
        'groupDuration{groupName:Soak Testing}': ['avg < 800'],
    },
}

export function setup () {
    // setup code

    let token: string = tokenAction.get_token()

    let httpParams = createRequestConfigWithTag(token)
    authApiAction.createUser(httpParams)

    setSleep()

    return token
}

export default (_token: any) => {

    let httpParams = createRequestConfigWithTag(_token)
    group('Soak Testing', () => {
        authApiAction.getUserProfile(httpParams)
        payApiAction.getFee(httpParams)
        legalApiAction.getBusiness(httpParams)
    })

    setSleep()
}


export function teardown (_token: any) {
    // teardown code
    let httpParams = createRequestConfigWithTag(_token)
    authApiAction.reset(httpParams)
}

