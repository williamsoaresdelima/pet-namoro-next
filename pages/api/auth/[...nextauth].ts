import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as userService from "../../../src/user/userService"

export const authOptions: AuthOptions = {
	callbacks: {
		redirect() {
			return "/";
		}
	},
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: { label: "Email", type: "text", placeholder: "email@email.com" },
				password: { label: "Senha", type: "password" }
			},
			async authorize(credentials, req) {
				if (
					credentials?.username === undefined ||
					credentials.password === undefined
				) {
					return null;
				}

				const { username: email, password } = credentials;
				const { success, userSession } = await userService.login(
					email,
					password
				);
				if (success) {
					return {
						id: userSession.userId,
						...userSession
					};
				}

				return null;
			},
		})
	],
}

export default NextAuth(authOptions)