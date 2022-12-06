import { gql } from "../../apolloClient";

export const queryUserInfo = gql`
  query {
    petUser {
      data{
        attributes {
          name
          title
          breed
          description
          ocupation
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;