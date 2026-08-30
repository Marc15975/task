import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";

const env = dotenv.config();
dotenvExpand.expand(env);

const adapter = new PrismaPg({
  connectionString: process.env["DATABASE_URL"]!,
});

export const prisma = new PrismaClient({ adapter });
