//@ts-check

import { NextApiRequest, NextApiResponse } from "next";

function status(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'mêsVersário' });
}

export default status;