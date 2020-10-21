import { group } from 'k6'
import { Options } from 'k6/options'

import { createRequestConfigWithTag } from '../helpers/request'
import { setSleep } from '../helpers/sleep'

import * as tokenAction from '../actions/token.action'
import * as authApiAction from '../actions/auth-api.action'
import * as payApiAction from '../actions/pay-api.action'
import * as legalApiAction from '../actions/legal-api.action'

/**
 * A spike test that runs through some common api actions
 */

// Test Options https://docs.k6.io/docs/options
export let options: Partial<Options> = {
    stages: [
        { duration: '2m', target: 10 }, // below normal load
        { duration: '5m', target: 10 },
        { duration: '2m', target: 10 }, // normal load
        { duration: '5m', target: 25 },
        { duration: '2m', target: 25 }, // around the breaking point
        { duration: '5m', target: 25 },
        { duration: '2m', target: 50 }, // beyond the breaking point
        { duration: '5m', target: 50 },
        { duration: '10m', target: 0 }, // scale down. Recovery stage.
    ],
    // test thresholds https://docs.k6.io/docs/thresholds
    thresholds: {
        http_req_duration: ['avg<800', 'p(95)<900'], // 95% of requests must complete below 800ms
        'http_req_duration{name:GetUserProfile}': ['avg<800', 'p(90)<900'],
        'http_req_duration{name:GetFee}': ['avg<800', 'p(90)<900'],
        'http_req_duration{name:GetBusiness}': ['avg<800', 'p(90)<900'],
        'groupDuration{groupName:Spike Testing}': ['avg < 800'],
    },
}

export function setup() {
        // setup code

        let token: string = tokenAction.get_token()

    let httpParams = createRequestConfigWithTag(token)
    authApiAction.createUser(httpParams)

setSleep()

return token
}

export default (_token: any) => {

    let httpParams = createRequestConfigWithTag(_token)
    group('Spike Testing', () => {
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
