import type {
    NextApiRequest,
    NextApiResponse,
    GetServerSidePropsContext,
  } from "next";
  import { getSession } from "next-auth/react";
  
  export async function getServerSession (
    req: NextApiRequest | GetServerSidePropsContext["req"],
    res: NextApiResponse | GetServerSidePropsContext["res"]
  ) {
    return await getSession();
  }