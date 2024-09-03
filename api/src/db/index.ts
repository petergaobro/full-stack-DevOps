import * as dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

// connecting to a PostgreSQL database using the pg library
// @ts-ignore
const pool = new Pool({
  host: process.env.POSTGRES_HOST as string,
  port: process.env.POSTGRES_PORT as unknown as number,
  database: process.env.POSTGRES_DB as string,
  user: process.env.POSTGRES_USER as unknown as string,
  password: process.env.POSTGRES_PASSWORD as unknown as string,
});

export default pool;
