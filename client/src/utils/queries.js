import { gql } from "@apollo/client";

export const QUERY_SINGLE_PROFILE = gql`
  query profile($profileId: ID!) {
    profile(profileId: $profileId) {
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
