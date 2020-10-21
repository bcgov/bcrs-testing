export function createRequestConfigWithTag (_authToken: string) {
    // the headers and tags needed for logged-in request https://docs.k6.io/docs/http-requests
    return (tag: { [key: string]: string }) => ({
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${_authToken}`
        },
        tags: Object.assign({}, {
                      // all urls will be tagged with this name
                      name: 'BCRS-Load-Testing'
                    },
                    // and any other name we pass through
                    tag)
    })
}
