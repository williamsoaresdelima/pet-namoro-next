import { GetStaticProps,  } from "next";
import { apolloClient, gql } from '../src/apolloClient'
import { IPagination } from "../src/components/Pagination/IPagination";

import ProfileHeader from "../src/components/ProfileHeader/ProfileHeader";
import Feed from "../src/components/Feed/Feed";
import IFeed from "../src/components/Feed/IFeed";
import Pagination from "../src/components/Pagination/Pagination";
import IProfileHeader from "../src/components/ProfileHeader/IProfileHeader";
import { decodeUserInfo } from "../src/cms/decoders/userInfo";
import { queryUserInfo } from "../src/cms/querys/userInfo";
import { getPostPage } from "../src/cms/functions/getPostPage";

const data = {
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKW_TpB7R9Wd5VV8f1Ckp-JhR8_G_OA-MB-Q&usqp=CAU',
  title: 'test',
  name: 'test',
  breed: 'test',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius, velit vel dictum aliquam, est ex condimentum odio, sit amet sodales risus velit a ante. Fusce rutrum quam in vulputate commodo. Nullam vestibulum justo neque.',
  ocupation: 'test'
}

type HomeProps = {
  posts: IFeed[],
  pagination: IPagination,
  userInfo: IProfileHeader
}

export default function Home ({ posts, pagination, userInfo }: HomeProps ) {
  console.log(userInfo)
  return (
  <>
    <ProfileHeader { ...userInfo }/>
    <Feed data={ posts }/>
    <Pagination  data={ pagination }/>
  </>
  )
}

export const getStaticProps: GetStaticProps<any> = async () => {
  const {posts, pagination} = await getFeedProps();
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
}

async function getFeedProps(): Promise<{
  posts: HomeProps["posts"];
  pagination: HomeProps["pagination"];
}> {
  const results = await getPostPage(1);

  const posts = results.posts.map(
    ({title, slug, image: url}: any) => ({
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
}

// const getPosts = async () => {
//   const result = await apolloClient.query({
//     query: gql`
//       query {
//         posts(pagination: { pageSize: 9, page: 1 }) {
//           meta {
//             pagination {
//               page
//               pageCount
//             }
//           }
//           data {
//             attributes {
//               title
//               slug
//               image {
//                 data {
//                   attributes {
//                     url
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `,
//   });

//   const posts: any["items"] = result.data.posts.data.map(
//     ({
//       attributes: {
//         title,
//         slug,
//         image: {
//           data: {
//             attributes: { url },
//           },
//         },
//       },
//     }: any) => ({
//       feedImageURL: `https://webservices.jumpingcrab.com${url}`,
//       feedLink: `/posts/${slug}`,
//       feedTitle: title,
//     })
//   );
//   const { page: currentPage, pageCount } = result.data.posts.meta.pagination;

//   const pagination = {
//     currentPage,
//     pageCount,
//     hasNextPage: pageCount > currentPage,
//     hasPreviousPage: false,
//   };

//   return {posts, pagination};
// };