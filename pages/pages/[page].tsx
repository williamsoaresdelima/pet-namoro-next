import type { GetStaticProps, GetStaticPaths } from "next";
import { apolloClient, gql } from '../../src/apolloClient'
import IFeed from "../../src/components/Feed/IFeed";
import { IPagination } from "../../src/components/Pagination/IPagination";

export type PostPageProps = {
	posts: IFeed[],
  pagination: IPagination
}

export type PostPageQuery = {
  page: string;
};

export default function PostPage() {
	return null
}

export const getStaticProps: GetStaticProps<
  PostPageProps,
  PostPageQuery
> = async ({ params }) => {
	const result = await apolloClient.query({
		query: gql`
			query {
				posts(pagination: { pageSize: 9, page: ${params?.page ?? 1} }) {
					meta {
						pagination {
							page
							pageCount
						}
					}
					data {
						attributes {
							title
							slug
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

	const posts = result.data.posts.data.map(
    ({
      attributes: {
        title,
        slug,
        image: {
          data: {
            attributes: { url },
          },
        },
      },
    }: any) => ({
			feedImageURL: `https://webservices.jumpingcrab.com${url}`,
      feedLink: `/posts/${slug}`,
      feedTitle: title,
    })
  );

  const { page: currentPage, pageCount } = result.data.posts.meta.pagination;

  return {
    props: {
      posts,
      pagination: {
        currentPage,
        pageCount,
        hasNextPage: pageCount > currentPage,
        hasPreviousPage: currentPage > 1,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths<PostPageQuery> = async () => {
	const result = await apolloClient.query({
    query: gql`
      query {
        posts(pagination: { pageSize: 9, page: 1 }) {
          meta {
            pagination {
              pageCount
            }
          }
        }
      }
    `,
  });

  const {
    data: {
      posts: {
        meta: {
          pagination: { pageCount },
        },
      },
    },
  } = result;
  const postsPage: string[] = Array.from({ length: pageCount }, (_, index) =>
    (index + 1).toString()
  );

  return {
    paths: postsPage.map((page) => ({ params: { page } })),
    fallback: false,
  };
}