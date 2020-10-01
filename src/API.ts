/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStartupInput = {
  name: string,
  site?: string | null,
  facebook?: string | null,
  twitter?: string | null,
  instagram?: string | null,
  founder?: string | null,
  founderLinkedIn?: string | null,
  phone?: string | null,
  email?: string | null,
  founded?: string | null,
  address?: string | null,
  addressLatitude?: number | null,
  addressLongitude?: number | null,
  type?: Type | null,
  customer?: Customer | null,
  category?: Category | null,
  sector?: Sector | null,
  stage?: Stage | null,
  incubator?: string | null,
  description?: string | null,
};

export enum Type {
  PRODUCT = "PRODUCT",
  SERVICE = "SERVICE",
  PLATFORM = "PLATFORM",
  OTHER = "OTHER",
}


export enum Customer {
  B2B = "B2B",
  B2C = "B2C",
}


export enum Category {
  APP = "APP",
  ECOMMERCE = "ECOMMERCE",
  PLATFORM = "PLATFORM",
  PRODUCT = "PRODUCT",
  SERVICE = "SERVICE",
}


export enum Sector {
  FINTECT = "FINTECT",
  AGRITECH = "AGRITECH",
  LIFESTYLE = "LIFESTYLE",
  HEALTH = "HEALTH",
  CONVENIENCE = "CONVENIENCE",
  LOGISTICS = "LOGISTICS",
  SERVICE = "SERVICE",
  OTHER = "OTHER",
}


export enum Stage {
  BOOTSTRAPPING = "BOOTSTRAPPING",
  SEED = "SEED",
  GROWTH = "GROWTH",
  EXPANSION = "EXPANSION",
  MEZZANINE = "MEZZANINE",
  IPO = "IPO",
}


export type UpdateStartupInput = {
  id: string,
  name?: string | null,
  site?: string | null,
  facebook?: string | null,
  twitter?: string | null,
  instagram?: string | null,
  founder?: string | null,
  founderLinkedIn?: string | null,
  phone?: string | null,
  email?: string | null,
  founded?: string | null,
  address?: string | null,
  addressLatitude?: number | null,
  addressLongitude?: number | null,
  type?: Type | null,
  customer?: Customer | null,
  category?: Category | null,
  sector?: Sector | null,
  stage?: Stage | null,
  incubator?: string | null,
  description?: string | null,
};

export type DeleteStartupInput = {
  id: string,
};

export type TableStartupFilterInput = {
  id?: TableIDFilterInput | null,
  name?: TableStringFilterInput | null,
  site?: TableStringFilterInput | null,
  facebook?: TableStringFilterInput | null,
  twitter?: TableStringFilterInput | null,
  instagram?: TableStringFilterInput | null,
  founder?: TableStringFilterInput | null,
  founderLinkedIn?: TableStringFilterInput | null,
  phone?: TableStringFilterInput | null,
  email?: TableStringFilterInput | null,
  founded?: TableStringFilterInput | null,
  address?: TableStringFilterInput | null,
  addressLatitude?: TableFloatFilterInput | null,
  addressLongitude?: TableFloatFilterInput | null,
  type?: TableStringFilterInput | null,
  customer?: TableStringFilterInput | null,
  category?: TableStringFilterInput | null,
  sector?: TableStringFilterInput | null,
  stage?: TableStringFilterInput | null,
  incubator?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableFloatFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type CreateStartupMutationVariables = {
  input: CreateStartupInput,
};

export type CreateStartupMutation = {
  createStartup:  {
    __typename: "startup",
    id: string,
    name: string,
    site: string | null,
    facebook: string | null,
    twitter: string | null,
    instagram: string | null,
    founder: string | null,
    founderLinkedIn: string | null,
    phone: string | null,
    email: string | null,
    founded: string | null,
    address: string | null,
    addressLatitude: number | null,
    addressLongitude: number | null,
    type: Type | null,
    customer: Customer | null,
    category: Category | null,
    sector: Sector | null,
    stage: Stage | null,
    incubator: string | null,
    description: string | null,
  } | null,
};

export type UpdateStartupMutationVariables = {
  input: UpdateStartupInput,
};

export type UpdateStartupMutation = {
  updateStartup:  {
    __typename: "startup",
    id: string,
    name: string,
    site: string | null,
    facebook: string | null,
    twitter: string | null,
    instagram: string | null,
    founder: string | null,
    founderLinkedIn: string | null,
    phone: string | null,
    email: string | null,
    founded: string | null,
    address: string | null,
    addressLatitude: number | null,
    addressLongitude: number | null,
    type: Type | null,
    customer: Customer | null,
    category: Category | null,
    sector: Sector | null,
    stage: Stage | null,
    incubator: string | null,
    description: string | null,
  } | null,
};

export type DeleteStartupMutationVariables = {
  input: DeleteStartupInput,
};

export type DeleteStartupMutation = {
  deleteStartup:  {
    __typename: "startup",
    id: string,
    name: string,
    site: string | null,
    facebook: string | null,
    twitter: string | null,
    instagram: string | null,
    founder: string | null,
    founderLinkedIn: string | null,
    phone: string | null,
    email: string | null,
    founded: string | null,
    address: string | null,
    addressLatitude: number | null,
    addressLongitude: number | null,
    type: Type | null,
    customer: Customer | null,
    category: Category | null,
    sector: Sector | null,
    stage: Stage | null,
    incubator: string | null,
    description: string | null,
  } | null,
};

export type GetStartupQueryVariables = {
  id: string,
};

export type GetStartupQuery = {
  getStartup:  {
    __typename: "startup",
    id: string,
    name: string,
    site: string | null,
    facebook: string | null,
    twitter: string | null,
    instagram: string | null,
    founder: string | null,
    founderLinkedIn: string | null,
    phone: string | null,
    email: string | null,
    founded: string | null,
    address: string | null,
    addressLatitude: number | null,
    addressLongitude: number | null,
    type: Type | null,
    customer: Customer | null,
    category: Category | null,
    sector: Sector | null,
    stage: Stage | null,
    incubator: string | null,
    description: string | null,
  } | null,
};

export type ListStartupsQueryVariables = {
  filter?: TableStartupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStartupsQuery = {
  listStartups:  {
    __typename: "startupConnection",
    items:  Array< {
      __typename: "startup",
      id: string,
      name: string,
      site: string | null,
      facebook: string | null,
      twitter: string | null,
      instagram: string | null,
      founder: string | null,
      founderLinkedIn: string | null,
      phone: string | null,
      email: string | null,
      founded: string | null,
      address: string | null,
      addressLatitude: number | null,
      addressLongitude: number | null,
      type: Type | null,
      customer: Customer | null,
      category: Category | null,
      sector: Sector | null,
      stage: Stage | null,
      incubator: string | null,
      description: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateStartupSubscriptionVariables = {
  id?: string | null,
};

export type OnCreateStartupSubscription = {
  onCreateStartup:  {
    __typename: "startup",
    id: string,
    name: string,
    site: string | null,
    facebook: string | null,
    twitter: string | null,
    instagram: string | null,
    founder: string | null,
    founderLinkedIn: string | null,
    phone: string | null,
    email: string | null,
    founded: string | null,
    address: string | null,
    addressLatitude: number | null,
    addressLongitude: number | null,
    type: Type | null,
    customer: Customer | null,
    category: Category | null,
    sector: Sector | null,
    stage: Stage | null,
    incubator: string | null,
    description: string | null,
  } | null,
};

export type OnUpdateStartupSubscriptionVariables = {
  id?: string | null,
};

export type OnUpdateStartupSubscription = {
  onUpdateStartup:  {
    __typename: "startup",
    id: string,
    name: string,
    site: string | null,
    facebook: string | null,
    twitter: string | null,
    instagram: string | null,
    founder: string | null,
    founderLinkedIn: string | null,
    phone: string | null,
    email: string | null,
    founded: string | null,
    address: string | null,
    addressLatitude: number | null,
    addressLongitude: number | null,
    type: Type | null,
    customer: Customer | null,
    category: Category | null,
    sector: Sector | null,
    stage: Stage | null,
    incubator: string | null,
    description: string | null,
  } | null,
};

export type OnDeleteStartupSubscriptionVariables = {
  id?: string | null,
};

export type OnDeleteStartupSubscription = {
  onDeleteStartup:  {
    __typename: "startup",
    id: string,
    name: string,
    site: string | null,
    facebook: string | null,
    twitter: string | null,
    instagram: string | null,
    founder: string | null,
    founderLinkedIn: string | null,
    phone: string | null,
    email: string | null,
    founded: string | null,
    address: string | null,
    addressLatitude: number | null,
    addressLongitude: number | null,
    type: Type | null,
    customer: Customer | null,
    category: Category | null,
    sector: Sector | null,
    stage: Stage | null,
    incubator: string | null,
    description: string | null,
  } | null,
};
