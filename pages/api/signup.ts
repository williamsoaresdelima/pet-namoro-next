import type { NextApiRequest, NextApiResponse } from "next";

import * as UserRepository from "../../src/user/userRepository"

export default async function signupHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const results = await UserRepository.create(req.body, {
      select: {
        id: true,
      },
    });
    res.status(200).json(req.body);
  }

  res.status(200).json({});
}