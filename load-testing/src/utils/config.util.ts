
export const ENVIRONMENT = process.env.NODE_ENV
const prod = ENVIRONMENT === "production"

export const TOKEN_URL = process.env.TOKEN_URL
export const SERVICE_CLIENT_ID = process.env.SERVICE_CLIENT_ID
export const SERVICE_CLIENT_SECRET = process.env.SERVICE_CLIENT_SECRET

export const AUTH_API_URL = process.env.AUTH_API_URL
export const PAY_API_URL = process.env.PAY_API_URL
export const LEGAL_API_URL = process.env.LEGAL_API_URL
