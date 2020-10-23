import { group, check, fail } from "k6"
import http from "k6/http"

import { setSleep } from "../helpers/sleep"
import { LEGAL_API_URL } from "../utils/config.util";

const BASE_URL = LEGAL_API_URL


export function healthCheck (_httpParams: any) {

    let url = `${BASE_URL}/ops/healthz`

    group('Legal API', () => {

        let res = http.get(url, _httpParams({ name: 'Healthcheck' }))

        // check the user is query
        if (!check(res, { 'Health Check': (r) => r.status === 200 })) {
            fail(`Unable to connect api ${res.status} ${res.body}`)
        }

        setSleep(0.5, 1)
    })
}

export function getBusiness (_httpParams: any) {

    let url = `${BASE_URL}/api/v1/businesses/CP0001847`

    group('Legal API', () => {

        let res = http.get(url, _httpParams({ name: 'GetBusiness' }))

        // check the user is query
        if (!check(res, { 'Get Business': (r) => r.status === 200 })) {
            fail(`Unable to get business ${res.status} ${res.body}`)
        }

        setSleep(0.5, 1)
    })
}
