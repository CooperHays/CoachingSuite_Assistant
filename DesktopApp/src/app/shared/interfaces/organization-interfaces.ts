/* 
    1. Separate out enums into a shared folder?
    2. Should IDs be string or number values?
*/

export interface Organization {
    id: number,
    type: OrganizationType,
    name: string,
    street: string,
    street2?: string,
    city: string,
    state: string,
    zip: number,
    phone: number
}

export enum OrganizationType {
    club,
    school
}

export interface Program {
    organization: number,
    type: ProgramType,
    levels: string, // maybe this should be a json object?
    contact: string // maybe this should be its own interface?
}

export enum ProgramType {
    boys,
    girls
}

export interface Team {
    program: number,
    level: TeamType,
    contact: string
}

export enum TeamType { // add in club levels too
    varsity,
    jv,
    sophomore,
    freshman
}

export interface TeamSocialMedia {
    team: number,
    platform: SocialMediaType,
    handle: string,
    preferred: boolean
}

export enum SocialMediaType {
    Facebook,
    Twitter,
    Instagram,
    Snapchat
}
