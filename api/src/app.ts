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

const corsOptions = {
  origin: "http://localhost:5173",
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

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the backend!");
})

app.listen(port, () => {
  console.log("===> Application is listening at http://localhost:" + port);
});
