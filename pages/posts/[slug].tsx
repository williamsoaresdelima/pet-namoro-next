import type { GetStaticPaths, GetStaticProps } from "next";
import { apolloClient, gql } from "../../src/apolloClient";
import Post from "../../src/components/Post/Post";
import IPost from "../../src/components/Post/IPost";
import { remark } from "remark";
import html from "remark-html";

export type PostPageProps = IPost;

export type PostPageQuery = {
  slug: string;
};

export default function PostPage(props: PostPageProps) {
  return <Post data={ props } />;
}

export const getStaticProps: GetStaticProps<
  PostPageProps,
  PostPageQuery
> = async ({ params }) => {
  const result = await apolloClient.query({
    query: gql`
      query {
        posts(filters: {
          slug: {
            eq: "${params?.slug ?? ``}"
          }
        }) {
          data {
            attributes {
              title
              author
              slug
              content
              publishDate
              avatar {
                data {
                  attributes {
                    url
                  }
                }
              }
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
    `,
  });

  const {
    attributes: {
      title: title,
      author: authorUsername,
      content,
      publishDate,
      image: {
        data: {
          attributes: { url: imageUrl },
        },
      },
      avatar: {
        data: {
          attributes: { url: avatarUrl },
        },
      },
    },
  } = result.data.posts.data[0];

  return {
    props: {
      image: `https://webservices.jumpingcrab.com${imageUrl}`,
      authorImage: `https://webservices.jumpingcrab.com${avatarUrl}`,
      title,
      date: publishDate,
      postAuthor: authorUsername,
      html: (await remark().use(html).process(content)).toString(),
    },
  };
};

export const getStaticPaths: GetStaticPaths<PostPageQuery> = async () => {
  const result = await apolloClient.query({
    query: gql`
      query {
        posts {
          data {
            attributes {
              slug
            }
          }
        }
      }
    `,
  });

  const {
    data: {
      posts: { data: postsSlugs },
    },
  } = result;

  const slugs: string[] = postsSlugs.map(
    ({ attributes: { slug } }: any) => slug
  );

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};