import { PostsData } from "../decoders/decodePosts";

export function mapPostsToFeedItems(posts: PostsData["posts"]) {
  return posts.map(({ image, slug, title }) => ({
    feedImageURL: image,
    feedLink: `/posts/${slug}`,
    feedTitle: title,
  }));
}