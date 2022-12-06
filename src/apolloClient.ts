import { ApolloClient, InMemoryCache } from '@apollo/client';
export { gql } from '@apollo/client';

const serverUrl = "https://webservices.jumpingcrab.com";

export const apolloClient = new ApolloClient({
    uri: 'https://webservices.jumpingcrab.com/graphql',
    cache: new InMemoryCache(),
  });

export function getImageUrl(path: string) {
  return `${serverUrl}${path}`;
}