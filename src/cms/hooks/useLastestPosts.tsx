import { useQuery } from "../../apolloClient";
import { queryLatestPosts } from "../querys/lastestPosts";
import { decodePosts } from "../decoders/decodePosts";
import { mapPostsToFeedItems } from "../functions/mapPostsToFeedItems";

export function useLatestPosts() {
  const { data, loading } = useQuery(queryLatestPosts);
  const results = decodePosts(data);
  const posts = mapPostsToFeedItems(results.posts);
  console.log(posts)
  return { posts, loading };
}