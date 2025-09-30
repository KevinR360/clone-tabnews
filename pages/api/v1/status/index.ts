//@ts-check

import { NextApiRequest, NextApiResponse } from "next";
import database from "infra/database.js";

async function status(req: NextApiRequest, res: NextApiResponse) {
  const result = await database.query("SELECT 1 + 1 AS sum;");
  console.log(result.rows);
  res.status(200).json({ message: "mêsVersário" });
}

export default status;
