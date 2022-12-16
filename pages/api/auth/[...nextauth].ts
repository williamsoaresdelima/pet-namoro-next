import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import * as userService from "../../../src/user/userService";

export const authOptions: AuthOptions = {
  callbacks: {
    redirect() {
      return "/";
    },
    async session({ session }) {
      const userSession = await userService.getUserSession(session.user.email);
      session.user = userSession;
      return session;
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
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Email", type: "text", placeholder: "" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials, req) {
        if (
          credentials?.username === undefined ||
          credentials.password === undefined
        ) {
          return null;
        }

        const { username: email, password } = credentials;
        const { success, id } = await userService.credentialsLogin(
          email,
          password
        );
        if (success) {
          return {
            id,
            email,
          };
        }

        return null;
      },
    }),
  ],
};

export default NextAuth(authOptions);