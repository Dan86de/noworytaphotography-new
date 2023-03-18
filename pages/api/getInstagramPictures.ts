import type { NextApiRequest, NextApiResponse } from "next";

type Data = any;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const url = `https://graph.instagram.com/me/media?fields=id,caption&access_token=${process.env.INSTAGRAM_KEY}&limit=12`; 
  const data = await fetch(url);
  const feed = await data.json();
  return res.status(200).json(feed);
}
