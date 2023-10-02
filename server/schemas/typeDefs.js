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
    profile(profileId: ID!): Profile
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
    login(userName: String!, password: String!): Profile
    updateMemberType(profileId: ID!, memberType: String!): Profile
    removeProfile(profileId: ID!): Profile
  }
`;

module.exports = typeDefs;
