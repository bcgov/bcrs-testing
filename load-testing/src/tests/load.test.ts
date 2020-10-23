import { group } from 'k6'
import { Options } from 'k6/options'

import { createRequestConfigWithTag } from '../helpers/request'
import { setSleep } from '../helpers/sleep'

import * as tokenAction from '../actions/token.action'
import * as authApiAction from '../actions/auth-api.action'
import * as payApiAction from '../actions/pay-api.action'
import * as legalApiAction from '../actions/legal-api.action'

import { Trend } from 'k6/metrics'
let groupDuration = new Trend('groupDuration');

export let options: Partial<Options> = {
    stages: [
        { duration: '3m', target: 50 }, // simulate ramp-up of traffic from 1 to 50 users over 3 minutes.
        { duration: '5m', target: 50 }, // stay at 50 users for 6 minutes
        { duration: '3m', target: 0 }, // ramp-down to 0 users
    ],
    thresholds: {
        http_req_duration: ['avg<800', 'p(95)<1000'], // 95% of requests must complete below 800ms
        'http_req_duration{name:GetUserProfile}': ['avg<800', 'p(90)<900'],
        'http_req_duration{name:GetFee}': ['avg<800', 'p(90)<900'],
        'http_req_duration{name:GetBusiness}': ['avg<800', 'p(90)<900'],
        'groupDuration{groupName:Load Testing}': ['avg < 800'],
    },
}

function groupWithDurationMetric (name, group_function) {
    let start: any = new Date()
    group(name, group_function)
    let end: any = new Date()
    groupDuration.add(end - start, { groupName: name })
}

export function setup () {
    // setup code

    let token: string  = tokenAction.get_token()

    let httpParams = createRequestConfigWithTag(token)
    authApiAction.createUser(httpParams)

    setSleep()

    return token
}

export default (_token: any) => {

    let httpParams = createRequestConfigWithTag(_token)
    groupWithDurationMetric('Load Testing', () => {
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
