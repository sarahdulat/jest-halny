// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Knex from "knex";

type Data = {
  result: any;
};

const knex = Knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: "postgres",
    database: "jest_halny_dev",
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const result = await knex("readings")
    .select("*")
    .where("temperature", ">", 10);

  await knex("readings").insert({
    timestamp: new Date().toISOString(),
    temperature: 122,
  });

  res.status(200).json({ result });
}
