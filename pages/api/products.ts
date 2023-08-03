import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number,
  name: string,
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === "GET") {
    res.status(200).json([
      { id: 1, name: "Mobile" },
      { id: 2, name: "Camera" },
    ]);
  } else {
    // Handle any other HTTP method
  }
}
