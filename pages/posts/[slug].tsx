import type { GetStaticPaths, GetStaticProps } from "next";
import { apolloClient } from "../../src/apolloClient";

import Post from "../../src/components/Post/Post";
import IPost from "../../src/components/Post/IPost";
import Head from "../../src/components/Head/Head";
import { queryPostsBySlug } from "../../src/cms/querys/postsBySlug";
import { decodePosts } from "../../src/cms/decoders/decodePosts";
import { queryPostsSlugs } from "../../src/cms/querys/postsSlug";
import { processMarkdown } from "../../src/processMarkdown";
import Feed from "../../src/components/Feed/Feed";
import { useLatestPosts } from "../../src/cms/hooks/useLastestPosts";

export type PostPageProps = IPost;

export type PostPageQuery = {
  slug: string;
};

export default function PostPage(props: PostPageProps) {
  const { posts, loading } = useLatestPosts();
  return (
    <>
      <Head title={`Namoro-Pet | ${props.title}`}/>
      <Post data={ props } />
      <h1>Ultimos Posts</h1>
      <div className="latest-posts">{!loading && <Feed data={posts} />}</div>
      <style jsx>{`
        h1 {
          margin-top: 32px;
          margin-bottom: -16px;
        }
      `}</style>
    </>
  );
};

export const getStaticProps: GetStaticProps<
  PostPageProps,
  PostPageQuery
> = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: queryPostsBySlug,
    variables: {
      slug: params?.slug,
    },
  });

  const {
    posts: [post],
  } = decodePosts(data);
  const content = await processMarkdown(post.html);

  return {
    props: {
      ...post,
      content,
    },
  };
};

export const getStaticPaths: GetStaticPaths<PostPageQuery> = async () => {
  const { data } = await apolloClient.query({
    query: queryPostsSlugs,
  });

  const { posts } = decodePosts(data);
  const paths = posts.map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};