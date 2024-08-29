import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import Database from "./config/database";
// const app = express();
import * as dotenv from "dotenv";

dotenv.config();

console.log("===> Hello, the backend server is starting ...");
// @ts-ignore
const port: number = parseInt(process.env.SERVER_PORT) || 8000;
// const connectPg = new Client({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USERNAME,
//   port: process.env.DB_PORT,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// connectPg
//   .connect()
//   .then(() => console.log(`Database is running on ${process.env.DB_PORT}`));
//
// connectPg.query("Select * from demotable", (err: any, res: any) => {
//   if (!err) {
//     console.log(res.rows);
//   } else {
//     console.log(err.message);
//   }
//   connectPg.end;
// });

// app.get("/", async (req: any, res: any) => {
//   try {
//     const data = await myNewPool.query("SELECT * FROM schools");
//     res.status(200).send(data.rows);
//   } catch (err) {
//     console.log(err);
//     res.sendStatus(500);
//   }
// });
//
// app.post("/", async (req: any, res: any) => {
//   const { name, location } = req.body;
//   try {
//     await myNewPool.query("INSERT INTO schools (name, address) VALUES ($1, $2)", [
//       name,
//       location,
//     ]);
//     res.status(200).send({ message: "Successfully added child" });
//   } catch (err) {
//     console.log(err);
//     res.sendStatus(500);
//   }
// });
//
// app.get("/setup", async (req: any, res: any) => {
//   try {
//     await myNewPool.query(
//       "CREATE TABLE schools( id SERIAL PRIMARY KEY, name VARCHAR(100), address VARCHAR(100))",
//     );
//     res.status(200).send({ message: "Successfully created table" });
//   } catch (err) {
//     console.log(err);
//     res.sendStatus(500);
//   }
// });

const corsOptions = {
  origin: "http://localhost:4000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allow specific HTTP methods
  maxAge: 86400, // Cache the preflight response for 24 hours
  preflightContinue: true, // Pass the CORS preflight response to the next handler
};

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.app.use(cors(corsOptions));
    this.databaseSync();
    // this.plugins();
    // this.routes();
  }

  protected databaseSync(): void {
    Database.getInstance().sync().then();
  }
}

const app = new App().app;

app.listen(port, () => {
  console.log("===> Application is listening at http://localhost:" + port);
});
