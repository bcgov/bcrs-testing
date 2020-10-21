import { group } from 'k6'
import { Options } from 'k6/options'

import { createRequestConfigWithTag } from '../helpers/request'
import { setSleep } from '../helpers/sleep'

import * as authApiAction from '../actions/auth-api.action'
import * as payApiAction from '../actions/pay-api.action'
import * as legalApiAction from '../actions/legal-api.action'


export let options: Partial<Options> = {
    vus: 1, // 1 user looping for 30s
    duration: '30s',
    thresholds: {
        http_req_duration: ['avg<800', 'p(95)<1000'], // 95% of requests must complete below 1000ms
    },
};


// The Setup Function is run once before the Load Test https://docs.k6.io/docs/test-life-cycle
export function setup () {

}

export default () => {

    let httpParams = createRequestConfigWithTag('')
    group('Smoke Testing', () => {
        authApiAction.healthCheck(httpParams)
        payApiAction.healthCheck(httpParams)
        legalApiAction.healthCheck(httpParams)
    })

    setSleep()
}

// The Teardown Function is run once after the Load Test https://docs.k6.io/docs/test-life-cycle
export function teardown () {


}
