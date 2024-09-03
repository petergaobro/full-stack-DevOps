import pool from "../db";
import * as fs from "fs";
// Instalation and usage
import { Guid } from "guid-typescript";
export interface Result {
  id: Guid;
  status: string;
  repositoryName: string;
  findings: [];
}

export const scanJson = async (resultBo: Result): Promise<void> => {
  // read json file
  const jsonData = fs.readFileSync("path/example.json", "utf-8");
  const jsonObject = JSON.parse(jsonData);
  // print content from json file
  console.log(jsonObject.findings);
  const findings = jsonObject.findings;
  resultBo.findings = findings;
  resultBo.id = Guid.create();
  const result = await pool.query(
    'INSERT INTO "result" (id, status,repositoryName,findings) VALUES ($1, $2, $3, $4) RETURNING *',
    [resultBo.id, resultBo.status, resultBo.repositoryName, resultBo.findings],
  );
  return result.rows[0];
};

export const getList = async (): Promise<Result[]> => {
  const result = await pool.query('SELECT * FROM "result"');
  return result.rows;
};

export const userInfo = async (id: string): Promise<Object[] | null> => {
  console.log(id);
  const result = await pool.query(
    'SELECT findings FROM "result" WHERE id = $1',
    [id],
  );
  console.log(result);

  return result.rows[0].findings || null;
};
