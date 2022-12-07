import type { GetStaticProps, GetStaticPaths } from "next";
import { apolloClient } from '../../src/apolloClient'

import { decodePagination } from "../../src/cms/decoders/decodePagination";
import { getPostPage } from "../../src/cms/functions/getPostPage";
import { mapPostsToFeedItems } from "../../src/cms/functions/mapPostsToFeedItems";
import { queryPostPageCount } from "../../src/cms/querys/postPageCount";
import { IPagination } from "../../src/components/Pagination/IPagination";
import Feed from "../../src/components/Feed/Feed";
import IFeed from "../../src/components/Feed/IFeed";
import Pagination from "../../src/components/Pagination/Pagination";
import Head from "../../src/components/Head/Head";

export type PostPageProps = {
	posts: IFeed[],
  pagination: IPagination
}

export type PostPageQuery = {
  page: string;
};

export default function PostPage({ posts, pagination }: PostPageProps) {
	return (
    <div className="post-page">
      <h1 >Página {pagination.currentPage} de {pagination.total}</h1>
      <Head title={`Namoro-Pet | Página ${pagination.currentPage}`}/>
      <Feed data={ posts }/>
      <Pagination  data={ pagination }/>
      <style jsx>{`
        .post-page h1 {
          padding-top: 24px;
        }
      `}</style>
    </div>
  );
};

export const getStaticProps: GetStaticProps<
  PostPageProps,
  PostPageQuery
> = async ({ params }) => {
  const props = await getPostPageProps(Number(params?.page ?? 1));
  return {
    props,
  };
};

export const getStaticPaths: GetStaticPaths<PostPageQuery> = async () => {
  const { data } = await apolloClient.query({
    query: queryPostPageCount,
  });
  const { pageCount } = decodePagination(data);
  const postsPage: string[] = Array.from({ length: pageCount + 1 }, (_, index) =>
    (index + 1).toString()
  );

  return {
    paths: postsPage.map((page) => ({ params: { page } })),
    fallback: false,
  };
};

async function getPostPageProps(page: number): Promise<PostPageProps> {
  const results = await getPostPage(page);
  const posts = mapPostsToFeedItems(results.posts);

  const { pageCount, page: currentPage, total } = results.pagination;

  const pagination = {
    currentPage,
    pageCount,
    hasNextPage: pageCount > currentPage,
    hasPreviousPage: currentPage > 1,
    total: Math.ceil(total / 6)
  };

  return { posts, pagination };
}