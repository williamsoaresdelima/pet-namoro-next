import { GetServerSideProps } from "next"
import { useSession, getSession } from "next-auth/react"
import * as userRepository from "../src/user/userRepository"
import React from "react"
import { getServerSession } from "../src/auth/getServerSession"

export default function Page() {
	const { data: session, status } = useSession()

	console.log("SESSION: ", session)

	if (status === "loading") {
		return <p>Loading...</p>
	}

	if (status === "unauthenticated") {
		return <p>Access Denied</p>
	}

	return (
		<>
			<h1>Protected Page</h1>
			<p>You can view this page because you are signed in.</p>
		</>
	)
}

export const getServerSideProps: GetServerSideProps<IProfile> = async ({
	req,
	res,
}) => {
	const session = await getServerSession(req, res);
	const user = (await userRepository.findById(Number(session?.user.userId), {
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
	user: userRepository.User
}