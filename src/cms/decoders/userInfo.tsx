import { getImageUrl } from "../../apolloClient";

import IProfileHeader from "../../components/ProfileHeader/IProfileHeader";

export function decodeUserInfo(data: any): IProfileHeader {
  const {
    name = "",
    title = "",
    description = "",
    ocupation = "",
    breed = "",
  } = data?.userInfo.data.attributes ?? {};

  const image =
    data && data.userInfo.data.attributes.image
      ? getImageUrl(data.userInfo.data.attributes.image.data.attributes.url)
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