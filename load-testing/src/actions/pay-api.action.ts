import { group, check, fail } from "k6"
import http from "k6/http"

import { setSleep } from "../helpers/sleep"
import { PAY_API_URL } from "../utils/config.util"

const BASE_URL = PAY_API_URL


export function healthCheck (_httpParams: any) {

    let url = `${BASE_URL}/ops/healthz`

    group('Pay API', () => {

        let res = http.get(url, _httpParams({ name: 'Healthcheck' }))

        // check the user is query
        if (!check(res, { 'Health Check': (r) => r.status === 200 })) {
            fail(`Unable to connect api ${res.status} ${res.body}`)
        }

        setSleep(0.5, 1)
    })
}


export function getFee (_httpParams: any) {

    let url = `${BASE_URL}/api/v1/fees/CP/OTADR`

    group('Pay API', () => {

        let res = http.get(url, _httpParams({ name: 'GetFee' }))

        // check the user is query
        if (!check(res, { 'Get Fee': (r) => r.status === 200 })) {
            fail(`Unable to get fee ${res.status} ${res.body}`)
        }

        setSleep(0.5, 1)
    })
}
