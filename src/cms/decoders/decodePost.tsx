import { getImageUrl } from "../../apolloClient";

export type PostData = {
  authorImage: string;
  image: string;
  postAuthor: string;
  slug: string;
  date: string;
  title: string;
  html: string;
};

export function decodePost(data: any): PostData {
  const baseData = data ? data.post ?? data : undefined;
  const {
    attributes: {
      author: postAuthor = "",
      content: html = "",
      publishDate: date = "",
      title = "",
      slug = "",
    },
  } = baseData ?? { attributes: {} };

  const authorImage =
    baseData && baseData.attributes.avatar
      ? getImageUrl(baseData.attributes.avatar.data.attributes.url)
      : "/avatar.jpeg";

  const image =
    baseData && baseData.attributes.image
      ? getImageUrl(baseData.attributes.image.data.attributes.url)
      : "/empty.jpg";

  return {
    postAuthor,
    authorImage,
    html,
    date,
    title,
    slug,
    image,
  };
}