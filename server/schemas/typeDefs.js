const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    _id: ID
    userName: String
    password: String
    email: String
    firstName: String
    lastName: String
    memberType: String
  }

  type Query {
    profile(userName: String!, password: String!): Profile
  }

  type Mutation {
    addProfile(
      userName: String!
      password: String!
      email: String!
      firstName: String!
      lastName: String!
      memberType: String!
    ): Profile

    updateMemberType(profileId: ID!, memberType: String!): Profile
    removeProfile(profileId: ID!): Profile
  }
`;

module.exports = typeDefs;
