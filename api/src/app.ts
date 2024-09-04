// import express, { Application, Request, Response } from "express";
// import cors from "cors";
// import helmet from "helmet";
// import Database from "./config/database";
// // const app = express();
// import * as dotenv from "dotenv";
//
// dotenv.config();
//
// console.log("===> Hello, the backend server is starting ...");
// // @ts-ignore
// const port: number = parseInt(process.env.SERVER_PORT) || 8000;
//
// const corsOptions = {
//   // // cors
//   // app.use(
//   //   cors({
//   //     // allow to access to all domain
//   //     origin: "*",
//   //     // allow access to methods
//   //     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   //     // allow access to headers
//   //     headers: ["Content-Type", "Authorization"],
//   //   }),
//   // );
//   // origin: "http://localhost:5173",
//   origin: "*",
//   headers: ["Content-Type", "Authorization"],
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allow specific HTTP methods
//   maxAge: 86400, // Cache the preflight response for 24 hours
//   preflightContinue: true, // Pass the CORS preflight response to the next handler
// };
//
// class App {
//   public app: Application;
//
//   /**
//    * the construction of App class, init db, plugin and routes
//    * Step 1
//    */
//   constructor() {
//     this.app = express();
//     this.app.use(cors(corsOptions));
//     this.databaseSync();
//     // this.plugins();
//     this.routes();
//   }
//
//   /**
//    * Step 2
//    * @protected
//    */
//   protected databaseSync(): void {
//     Database.getInstance().sync().then();
//   }
//
//   /**
//    * Step 4
//    * @protected
//    */
//   protected routes(): void {
//     this.app.route("/").get((req: Request, res: Response) => {
//       res.send("<h1>welcome home</h1>");
//     });
//     // this.app.use(`${ServiceEndPointsConstants.API_USERS}`, UserRoute);
//     // add more route modules ...
//   }
// }
// /**
//  * Step 0 entrance  new application instance
//  */
// const app = new App().app;
//
// app.listen(port, () => {
//   console.log("===> Application is listening at http://localhost:" + port);
// });

import Koa from "koa";
import bodyParser from "koa-bodyparser";
import router from "./routes";
import cors from "koa-cors";
import * as dotenv from "dotenv";
dotenv.config();

const app = new Koa();
// cors
app.use(
  cors({
    // allow to access to all domain
    origin: "*",
    // allow access to methods
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    // allow access to headers
    headers: ["Content-Type", "Authorization"],
  }),
);

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

// @ts-ignore
const port: number = parseInt(process.env.SERVER_PORT);
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
