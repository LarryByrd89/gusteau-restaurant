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

  type Auth {
    token: ID!
    profile: Profile
    context: Profile
  }

  type Reservation {
    _id: ID
    firstName: String
    lastName: String
    selectedDate: String
    selectedTime: String
    email: String
  }

  type Query {
    profile(profileId: ID!): Profile
    reservations: [Reservation!]!
    me: Profile
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
    createReservation(
      firstName: String!
      lastName: String!
      selectedDate: String!
      selectedTime: String!
      email: String!
    ): Reservation
    login(userName: String!, password: String!): Auth
    updateMemberType(profileId: ID!, memberType: String!): Profile
    removeProfile(profileId: ID!): Profile
  }
`;

module.exports = typeDefs;
