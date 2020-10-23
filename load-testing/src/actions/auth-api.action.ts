import { group, check, fail } from "k6"
import http from "k6/http"

import { setSleep } from "../helpers/sleep"
import { User } from '../types/user.type'
import { AUTH_API_URL} from "../utils/config.util";

const BASE_URL: string = AUTH_API_URL

export function healthCheck (_httpParams: any) {

    let url = `${BASE_URL}/ops/healthz`

    group('Auth API', () => {

        let res = http.get(url, _httpParams({ name: 'Healthcheck' }))

        // check the user is query
        if (!check(res, { 'Health Check': (r) => r.status === 200 })) {
            fail(`Unable to connect auth api ${res.status} ${res.body}`)
        }

        setSleep(0.5, 1)
    })
}


export function createUser (_httpParams: any): User | null {

    let user: User | null = null
    let url = `${BASE_URL}/api/v1/users`

    group('Auth API', () => {

        let res = http.post(url, '', _httpParams({ name: 'CreateUser' }))

        user = JSON.parse(res.body as string)

        // check the user is created
        if (!check(res, { 'User created correctly': (r) => r.status === 201 })) {
            fail(`Unable to create a User ${res.status} ${res.body}`)
        }

        setSleep(0.5, 1)

    })

    return user
}

export function getUserProfile (_httpParams: any): User | null {

    let user: User | null = null
    let url = `${BASE_URL}/api/v1/users/@me`

    group('Auth API', () => {

        let res = http.get(url, _httpParams({ name: 'GetUserProfile' }))
        user = JSON.parse(res.body as string)

        // check the user is query
        if (!check(res, { 'User query correctly': (r) => r.status === 200 })) {
            fail(`Unable to query a User ${res.status} ${res.body}`)
        }

        setSleep(0.5, 1)
    })
    return user
}

export function reset (_httpParams: any) {
    let url = `${BASE_URL}/test/reset`

    group('Auth API', () => {
        let res = http.post(url, '', _httpParams({ name: 'Reset' }))

        // check the user is query
        if (!check(res, { 'User reset correctly': (r) => r.status === 204 })) {
            fail(`Unable to reset a User ${res.status} ${res.body}`)
        }

        setSleep(0.5, 1)
    })

}
