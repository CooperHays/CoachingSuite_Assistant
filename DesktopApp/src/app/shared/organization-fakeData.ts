import { OrganizationType, Organization, State, Address, Program, ProgramType, Contact, Team, TeamType, TeamSocialMedia, SocialMediaType } from "./interfaces/organization-interfaces";

// Fake Org and Team Contacts
let fakeOrgContactAddress: Address = {
    street: '301 Westwood Plaza',
    city: 'Los Angeles',
    state: State.CA,
    zip: '90095'
}

let fakeOrgContact: Contact = {
    firstName: 'John',
    lastName: 'Wooden',
    phone: '555-555-5555',
    email: 'john@wooden.com',
    address: fakeOrgContactAddress
};

let fakeTeamContactAddress: Address = {
    street: '100 Legends Way',
    city: 'Boston',
    state: State.MA,
    zip: '02114'
}

let fakeTeamContact: Contact = {
    firstName: 'Red',
    lastName: 'Auerbach',
    phone: '123-456-7890',
    email: 'red@auerbach.com',
    address: fakeOrgContactAddress
};

// Fake Org Types
let lehiOrgType: OrganizationType = OrganizationType.SCHOOL;
let salemOrgType: OrganizationType = OrganizationType.SCHOOL;
let sampleOrgType: OrganizationType = OrganizationType.SCHOOL;

// Fake Org Addresses
let lehiOrgAddress: Address = {
    street: '180 N 500 E',
    city: 'Lehi',
    state: State.UT,
    zip: '84043'
};

let salemOrgAddress: Address = {
    street: '150 Skyhawk Blvd',
    city: 'Salem',
    state: State.UT,
    zip: '84653'
};

let sampleOrgAddress: Address = {
    street: '123 Championship Way',
    city: 'Titlesville',
    state: State.MT,
    zip: '12345'
}

// Fake Orgs
let lehiOrg: Organization = {
    id: 0,
    type: lehiOrgType,
    name: 'Lehi High School',
    address: lehiOrgAddress,
    phone: '801-610-8805'
};

let salemOrg: Organization = {
    id: 1,
    type: salemOrgType,
    name: 'Salem High School',
    address: salemOrgAddress,
    phone: '801-423-3200'
}

let sampleOrg: Organization = {
    id: 2,
    type: sampleOrgType,
    name: 'Sample Club',
    address: sampleOrgAddress,
    phone: '555-867-5309'
}

// Fake Programs
let lehiOrgProgram: Program = {
    organization: 0,
    type: ProgramType.GIRLS,
    levels: 'varsity, jv, sophomore',
    contact: fakeOrgContact
}

let salemOrgProgram: Program = {
    organization: 1,
    type: ProgramType.BOYS,
    levels: 'varsity, jv, sophomore',
    contact: fakeOrgContact
}

let sampleOrgProgram: Program = {
    organization: 2,
    type: ProgramType.BOYS,
    levels: 'u17',
    contact: fakeOrgContact
};

// Fake Org Teams
let lehiOrgGirlsVarsity: Team = {
    program: 0,
    level: TeamType.VARSITY,
    contact: fakeTeamContact
};

let salemOrgBoysJV: Team = {
    program: 1,
    level: TeamType.JV,
    contact: fakeTeamContact
};

let sampleOrgBoysU17: Team = {
    program: 2,
    level: TeamType.U17,
    contact: fakeTeamContact
};

// Fake Org Team Social Media
let lehiOrgGirlsVarsitySocialMediaFacebook: TeamSocialMedia = {
    team: 0,
    platform: SocialMediaType.FACEBOOK,
    handle: 'Lehi GBB',
    preferred: false
};

let lehiOrgGirlsVarsitySocialMediaTwitter: TeamSocialMedia = {
    team: 0,
    platform: SocialMediaType.TWITTER,
    handle: '@lehigbb',
    preferred: true
};

let salemOrgBoysJVSocialMediaInstagram: TeamSocialMedia = {
    team: 1,
    platform: SocialMediaType.INSTAGRAM,
    handle: '@salemboysJV',
    preferred: true
};

let sampleOrgBoysU17SocialMediaSnapchat: TeamSocialMedia = {
    team: 2,
    platform: SocialMediaType.SNAPCHAT,
    handle: '@sampleOrgBoysU17',
    preferred: true
}

