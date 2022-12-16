import type {
    NextApiRequest,
    NextApiResponse,
    GetServerSidePropsContext,
  } from "next";
  import { authOptions } from "../../pages/api/auth/[...nextauth]";
  import { getSession } from "next-auth/react";
  
  export async function getServerSession  (
    req: NextApiRequest | GetServerSidePropsContext["req"],
    res: NextApiResponse | GetServerSidePropsContext["res"]
  ) {
    return await getSession();
    //return unstable_getServerSession(req, res, authOptions);
  }