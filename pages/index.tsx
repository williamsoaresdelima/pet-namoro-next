import { GetStaticProps,  } from "next";
import { apolloClient, gql } from '../src/apolloClient'
import { IPagination } from "../src/components/Pagination/IPagination";

import ProfileHeader from "../src/components/ProfileHeader/ProfileHeader";
import Feed from "../src/components/Feed/Feed";
import IFeed from "../src/components/Feed/IFeed";
import Pagination from "../src/components/Pagination/Pagination";
import IProfileHeader from "../src/components/ProfileHeader/IProfileHeader";

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
    <ProfileHeader { ...data }/>
    <Feed data={ posts }/>
    <Pagination  data={ pagination }/>
  </>
  )
}

export const getStaticProps: GetStaticProps<any> = async () => {
  const userInfo = await getUserInfo();
  console.log(userInfo)
  const {posts, pagination} = await getPosts();
  return {
    props: {
      posts,
      pagination,
    }
  };
};



const getUserInfo = async ()  => {
  const result = await apolloClient.query({
    query: gql`
      query {
        petUser {
          data{
            attributes {
              name
              title
              breed
              description
              ocupation
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
    `
  });
  const 
    { name,
      title,
      breed,
      description,
      ocupation,
      image:
        { data:
          { attributes:
            { url: imageUrl }
          }
        }
      }
       = await result.data.petUser.data.attributes

   return {name, title, breed, description, ocupation, image: `https://webservices.jumpingcrab.com/${imageUrl}` };
};

const getPosts = async () => {
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

  const pagination = {
    currentPage,
    pageCount,
    hasNextPage: pageCount > currentPage,
    hasPreviousPage: false,
  };

  return {posts, pagination};
};