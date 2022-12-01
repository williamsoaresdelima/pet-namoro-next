import { GetStaticProps,  } from "next";
import { apolloClient, gql } from '../src/apolloClient'
import { IPagination } from "../src/components/Pagination/IPagination";

import ProfileHeader from "../src/components/ProfileHeader/ProfileHeader";
import Feed from "../src/components/Feed/Feed";
import IFeed from "../src/components/Feed/IFeed";
import Pagination from "../src/components/Pagination/Pagination";

const data = {
  imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKW_TpB7R9Wd5VV8f1Ckp-JhR8_G_OA-MB-Q&usqp=CAU',
  title: 'test',
  name: 'test',
  breed: 'test',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius, velit vel dictum aliquam, est ex condimentum odio, sit amet sodales risus velit a ante. Fusce rutrum quam in vulputate commodo. Nullam vestibulum justo neque.',
  ocupation: 'test'
}

type HomeProps = {
  posts: IFeed[],
  pagination: IPagination
}

export default function Home ({ posts, pagination }: HomeProps ) {
  return (
  <>
    <ProfileHeader { ...data }/>
    <Feed data={ posts }/>
    <Pagination  data={ pagination }/>
  </>
  )
}

export const getStaticProps: GetStaticProps<any> = async () => {
  const result = await apolloClient.query({
    query: gql`
      query {
        posts(pagination: { pageSize: 9, page: 1 }) {
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

  const posts: any["items"] = result.data.posts.data.map(
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
    console.log(currentPage, pageCount)
  return {
    props: {
      posts,
      pagination: {
        currentPage,
        pageCount,
        hasNextPage: pageCount > currentPage,
        hasPreviousPage: false,
      },
    },
  };
};