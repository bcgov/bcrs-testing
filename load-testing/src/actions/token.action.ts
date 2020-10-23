import http  from "k6/http";

import { TOKEN_URL, SERVICE_CLIENT_ID, SERVICE_CLIENT_SECRET } from "../utils/config.util"

export function get_token () : string {

    const url: string = TOKEN_URL

    const requestBody = {
        grant_type: 'client_credentials',
        client_id: (SERVICE_CLIENT_ID as string),
        client_secret: (SERVICE_CLIENT_SECRET as string)
    }

    let httpRes: any = http.post(url, requestBody,{tags: {name: 'GetBearToken' }})

    let token: string = httpRes.json().access_token

    return token

}

