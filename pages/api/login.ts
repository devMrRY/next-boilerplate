import type { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "cookies-next";

type Data = {
  name: string,
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === "GET") {
    setCookie("my-cookie", "auth", { req, res, maxAge: 60 * 60 * 24 });
    res.status(200).json({ name: "rahul" });
  } else {
    // Handle any other HTTP method
  }
}
