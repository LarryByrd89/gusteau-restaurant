import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
  mutation  addProfile(
      userName: String!
      password: String!
      email: String!
      firstName: String!
      lastName: String!
      memberType: String!
    ) {
    addProfile(userName: $userName, email: $email, password: $password, firstName: $firstName, lastName: $lastName, memberType: $memberType) {
        _id
        userName
        email
        password
        firstName
        lastName
        memberType
    }
  }
`;

export const UPDATE_MEMBERTYPE = gql`
  mutation updateMemberType(profileId: ID!, memberType: String!) {
    updateMemberType(profileId: $profileId, memberType: $memberType) {
      _id
        userName
        email
        password
        firstName
        lastName
        memberType
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      _id
      userName
      email
      password
      firstName
      lastName
      memberType
    }
  }
`;

export const REMOVE_PROFILE = gql`
  mutation removeProfile(profileId: ID!) {
    removeProfile(_id: $profileId) {
      _id
      userName
      email
      password
      firstName
      lastName
      memberType
    }
  }
`;
