import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as userService from "../../../src/user/userService"
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
	callbacks: {
		redirect() {
			return "/";
		},
		async signIn({ account, profile }) {
			if (
        account?.provider === "google" &&
        profile?.email &&
        (profile as any)?.given_name &&
        (profile as any)?.family_name
      ) {
        const {
          email,
          given_name: name,
          family_name: lastname,
        } = profile as any;
        const { success } = await userService.googleLogin(email, {
          name,
          lastname,
          email,
          provider: "google",
        });
        return success;
      }
      return true;
		},
	},
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
		}),
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