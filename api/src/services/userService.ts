import pool from "../db";
import * as fs from "fs";
import path from "path";
import { Guid } from "guid-typescript";
export interface Result {
  id: Guid;
  status: string;
  repositoryName: string;
  findings: [];
}

export const scanJson = async (resultBo: Result): Promise<void> => {
  // find the file
  const absolutePath = path.join(__dirname, "../../", "example.json");
  // read json file
  const jsonData = fs.readFileSync(absolutePath, "utf-8");
  const jsonObject = JSON.parse(jsonData);
  const findings = jsonObject.findings;
  // store jsonB findings
  resultBo.findings = findings;
  resultBo.id = Guid.create();
  // insert related data into a PostgreSQL database (result table)
  const result = await pool.query(
    'INSERT INTO "result" (id, status,"repositoryName",findings) VALUES ($1, $2, $3, $4) RETURNING *',
    [
      resultBo.id.toString(),
      resultBo.status,
      resultBo.repositoryName,
      JSON.stringify(resultBo.findings),
    ],
  );
  // return the first row
  return result.rows[0];
};

export const getList = async (): Promise<Result[]> => {
  // fetch data from a PostgreSQL
  const result = await pool.query(
    'SELECT id, status,"repositoryName",findings FROM "result"',
  );
  return result.rows;
};

export const userInfo = async (id: string): Promise<Object[] | null> => {
  console.log(id);
  // SELECT query to fetch the findings column from the "result" table for a specific id
  const result = await pool.query(
    'SELECT findings FROM "result" WHERE id = $1',
    [id],
  );
  console.log(result);
  // return the findings about first row
  return result.rows[0].findings || null;
};
