import { GetStaticProps, } from "next";
import { apolloClient } from '../src/apolloClient'
import { IPagination } from "../src/components/Pagination/IPagination";
import { useSession } from 'next-auth/react'

import ProfileHeader from "../src/components/ProfileHeader/ProfileHeader";
import Feed from "../src/components/Feed/Feed";
import IFeed from "../src/components/Feed/IFeed";
import Pagination from "../src/components/Pagination/Pagination";
import IProfileHeader from "../src/components/ProfileHeader/IProfileHeader";
import { decodeUserInfo } from "../src/cms/decoders/userInfo";
import { queryUserInfo } from "../src/cms/querys/userInfo";
import { getPostPage } from "../src/cms/functions/getPostPage";
import Head from '../src/components/Head/Head'

type HomeProps = {
  posts: IFeed[],
  pagination: IPagination,
  userInfo: IProfileHeader
};

export default function Home({ posts, pagination, userInfo }: HomeProps) {
  const { data, status } = useSession();
  return (
    <>
      <Head title="Namoro-Pet | Home" />
      <ProfileHeader {...userInfo} />
      <Feed data={posts} />
      <Pagination data={pagination} />
    </>
  );
};

export const getStaticProps: GetStaticProps<any> = async () => {
  const { posts, pagination } = await getFeedProps();
  const userInfo = await getUserInfoProps(pagination.total);
  return {
    props: {
      posts,
      pagination,
      userInfo
    }
  };
};

async function getUserInfoProps(
  publishCount: number
): Promise<IProfileHeader> {
  const { data } = await apolloClient.query({
    query: queryUserInfo,
  });
  const userInfo = decodeUserInfo(data);
  return { ...userInfo, publishCount };
};

async function getFeedProps(): Promise<{
  posts: HomeProps["posts"];
  pagination: HomeProps["pagination"];
}> {

  const results = await getPostPage(1);
  const posts = results.posts.map(
    ({ title, slug, image: url }: any) => ({
      feedImageURL: url,
      feedLink: `/posts/${slug}`,
      feedTitle: title,
    })
  );

  const { pageCount, page: currentPage, total } = results.pagination;
  const pagination = {
    currentPage,
    pageCount,
    hasNextPage: pageCount > currentPage,
    hasPreviousPage: false,
    total,
  };
  return { posts, pagination };
};
