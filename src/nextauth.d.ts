import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      userId: string;
      email: string;
    };
  }
}