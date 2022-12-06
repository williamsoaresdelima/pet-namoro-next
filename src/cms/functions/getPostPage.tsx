import { apolloClient, gql } from "../../apolloClient";
import { decodePosts } from "../decoders/decodePosts";
import { queryPostPage } from "../querys/postPage";

export async function getPostPage(page: number): Promise<any> {
  const { data } = await apolloClient.query({
    query: queryPostPage,
    variables: {
      page,
    },
  });
  return decodePosts(data);
}