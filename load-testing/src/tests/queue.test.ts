import { group } from 'k6'
import { Options } from 'k6/options'

import { createRequestConfigWithTag } from '../helpers/request'
import { setSleep } from '../helpers/sleep'


import * as tokenAction from '../actions/token.action'
import * as namexApiAction from '../actions/namex-api.action'

import { Trend } from 'k6/metrics'
let groupDuration = new Trend('groupDuration');

export let options: Partial<Options> = {
    stages: [
        { duration: '1m', target: 50 }, // simulate ramp-up of traffic from 1 to 50 users over 3 minutes.
        { duration: '1m', target: 50 }, // stay at 50 users for 6 minutes
        { duration: '1m', target: 0 }, // ramp-down to 0 users
    ],
    thresholds: {
        http_req_duration: ['avg<15000', 'p(95)<10000'], // 95% of requests must complete below 800ms
        'groupDuration{groupName:Queue Testing}': ['avg < 15000'],
    },
}

function groupWithDurationMetric (name, group_function) {
    let start: any = new Date()
    group(name, group_function)
    let end: any = new Date()
    groupDuration.add(end - start, { groupName: name })
}

// The Setup Function is run once before the Load Test https://docs.k6.io/docs/test-life-cycle
export function setup () {
    let token: string  = tokenAction.get_token()
    return token
}

export default (_token: any) => {

    let httpParams = createRequestConfigWithTag(_token)
    groupWithDurationMetric('Queue Testing', () => {
        namexApiAction.processNamerequest(httpParams)
    })

    setSleep()
}

// The Teardown Function is run once after the Load Test https://docs.k6.io/docs/test-life-cycle
export function teardown () {


}
