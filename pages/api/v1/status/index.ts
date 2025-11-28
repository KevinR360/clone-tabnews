//@ts-check

import { NextApiRequest, NextApiResponse } from "next";
import database from "infra/database.js";

async function status(req: NextApiRequest, res: NextApiResponse) {
  const updatedAt = new Date().toISOString();

  const dependencies = await getDependencies();

  res.status(200).json({ updated_at: updatedAt, dependencies });
}

async function getDependencies(queryParameters?: {
  [key: string]: string | string[];
}) {
  const databaseName = process.env.POSTGRES_DB;
  const databaseResult = await database.query("SHOW server_version;");
  const databaseMaxConnections = await database.query("SHOW max_connections;");
  const databaseOpenedConnections = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });

  return {
    database: {
      version: databaseResult.rows[0].server_version,
      max_connections: parseInt(
        databaseMaxConnections.rows[0].max_connections,
        10,
      ),
      open_connections: databaseOpenedConnections.rows[0].count,
    },
  };
}

export default status;
