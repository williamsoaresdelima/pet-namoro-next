import { getImageUrl } from "../../apolloClient";

export type UserInfoData = {
  name: string;
  title: string;
  description: string;
  ocupation: string;
  breed: string;
  image: string;
};

export function decodeUserInfo(data: any): UserInfoData {
  const {
    name = "",
    title = "",
    description = "",
    ocupation = "",
    breed = "",
  } = data?.petUser.data.attributes ?? {};

  const image =
    data && data.petUser.data.attributes.image.data
      ? getImageUrl(data.petUser.data.attributes.image.data.attributes.url)
      : "/image.jpeg";

  return {
    name,
    title,
    description,
    ocupation,
    breed,
    image,
  };
}