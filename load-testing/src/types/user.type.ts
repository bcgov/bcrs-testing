import { Contact } from './contact.type'

export interface User {
    firstname: string
    lastname: string
    username?: string
    modified?: Date
    userTerms?: UserTerms
    contacts?: Contact[]
    email?: string,
    loginSource?: string
    id?: number
}


export interface UserTerms {
    isTermsOfUseAccepted: boolean
    termsOfUseAcceptedVersion: string
}
