/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStartup = /* GraphQL */ `
  query GetStartup($id: ID!) {
    getStartup(id: $id) {
      id
      name
      site
      facebook
      twitter
      instagram
      founder
      founderLinkedIn
      phone
      email
      founded
      address
      addressLatitude
      addressLongitude
      type
      customer
      category
      sector
      stage
      incubator
      description
    }
  }
`;
export const listStartups = /* GraphQL */ `
  query ListStartups(
    $filter: TableStartupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStartups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        site
        facebook
        twitter
        instagram
        founder
        founderLinkedIn
        phone
        email
        founded
        address
        addressLatitude
        addressLongitude
        type
        customer
        category
        sector
        stage
        incubator
        description
      }
      nextToken
    }
  }
`;
