import { GetServerSideProps } from "next";
import React from "react"

import ProfileView from "../src/auth/components/profileView/ProfileView";
import { getServerSession } from "../src/auth/getServerSession";
import Head from "../src/components/Head/Head";
import * as userRepository from "../src/user/userRepository"

export default function Profile({ user }: IProfile) {
  return (
    <>
      <Head title={`${user.name} ${user.lastname} | Namoro-Pet`}/>
      <ProfileView {...user} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<IProfile> = async ({
  req,
  res,
}) => {
  const session = await getServerSession(req, res);
  const user = (await userRepository.findById(session?.user.userId as unknown as number, {
    select: {
      id: true,
      name: true,
      lastname: true,
      email: true,
    },
  })) as userRepository.User;
  return { props: { user } };
};

interface IProfile {
  user: userRepository.User;
}