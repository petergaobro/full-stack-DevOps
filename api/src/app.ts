const { Client } = require("pg");
require("dotenv").config();

const connectPg = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connectPg
  .connect()
  .then(() => console.log(`Server is running on ${process.env.DB_PORT}`));

connectPg.query("Select * from demotable", (err: any, res: any) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  connectPg.end;
});

// const express = require("express");
// const app = express();
// require("dotenv").config();

// app.get("/", (req: any, res: any) => {
//   res.send("Hello, World!");
// });

// app.listen(process.env.SERVER_PORT, () => {
//   console.log(`Server is running on ${process.env.SERVER_PORT}`);
// });
