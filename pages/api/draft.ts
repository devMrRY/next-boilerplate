import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest & { query: { slug: string } },
  res: NextApiResponse,
) {
  let redirectUrl = req.query.slug;
  res.setDraftMode({ enable: true });
  res.redirect(`http://localhost:3000${redirectUrl}`);
}
