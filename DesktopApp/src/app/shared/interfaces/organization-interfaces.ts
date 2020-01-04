/* 
    1. Separate out enums into a shared folder?
    2. Should IDs be string or number values?
*/

export interface Organization {
    id: number,
    type: OrganizationType,
    name: string,
    address: Address,
    phone: string
}

export enum OrganizationType {
    CLUB = 'club',
    SCHOOL = 'school'
}

export enum State {
    AL = "AL",
    AK = "AK",
    AZ = "AZ",
    AR = "AR",
    CA = "CA",
    CO = "CO",
    CT = "CT",
    DE = "DE",
    DC = "DC",
    FL = "FL",
    GA = "GA",
    HI = "HI",
    ID = "ID",
    IL = "IL",
    IN = "IN",
    IA = "IA",
    KS = "KS",
    KY = "KY",
    LA = "LA",
    ME = "ME",
    MD = "MD",
    MA = "MA",
    MI = "MI",
    MN = "MN",
    MS = "MS",
    MO = "MO",
    MT = "MT",
    NE = "NE",
    NV = "NV",
    NH = "NH",
    NJ = "NJ",
    NM = "NM",
    NY = "NY",
    NC = "NC",
    ND = "ND",
    OH = "OH",
    OK = "OK",
    OR = "OR",
    PA = "PA",
    RI = "RI",
    SC = "SC",
    SD = "SD",
    TN = "TN",
    TX = "TX",
    UT = "UT",
    VT = "VT",
    VA = "VA",
    WA = "WA",
    WV = "WV",
    WI = "WI",
    WY = "WY"
}

export interface Program {
    organization: number,
    type: ProgramType,
    levels: string, // maybe this should be a json object?
    contact: Contact // maybe this should be its own interface?
}

export interface Contact {
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    address: Address
}

export interface Address {
    street: string,
    street2?: string,
    city: string,
    state: State,
    zip: string
}

export enum ProgramType {
    BOYS = 'boys',
    GIRLS = 'girls'
}

export interface Team {
    program: number,
    level: TeamType,
    contact: Contact
}

export enum TeamType { // add in club levels too
    VARSITY = 'varsity',
    JV = 'jv',
    SOPHOMORE = 'sophomore',
    FRESHMAN = 'freshman',
    U17 = 'u17'
}

export interface TeamSocialMedia {
    team: number,
    platform: SocialMediaType,
    handle: string,
    preferred: boolean
}

export enum SocialMediaType {
    FACEBOOK = 'facebook',
    TWITTER = 'twitter',
    INSTAGRAM = 'instagram',
    SNAPCHAT = 'snapchat'
}
