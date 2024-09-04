import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
import { Result } from "../models/result.model";

dotenv.config();
// const myNewPool = new Pool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USERNAME,
//   port: process.env.DB_PORT,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });
//
// module.exports = myNewPool;

class Database {
  private static sequelize: Sequelize;

  private static POSTGRES_DB = process.env.POSTGRES_DB as string;
  private static POSTGRES_HOST = process.env.POSTGRES_HOST as string;
  private static POSTGRES_PORT = process.env.POSTGRES_PORT as unknown as number;
  private static POSTGRES_USER = process.env.POSTGRES_USER as unknown as string;
  private static POSTGRES_PASSWORD = process.env
    .POSTGRES_PASSWORD as unknown as string;

  constructor() {
    Database.connectToPostgreSQL().then();
  }

  private static async connectToPostgreSQL() {
    this.sequelize = new Sequelize({
      dialect: "postgres",
      database: this.POSTGRES_DB,
      username: this.POSTGRES_USER,
      password: this.POSTGRES_PASSWORD,
      host: this.POSTGRES_HOST,
      port: this.POSTGRES_PORT,

      define: {
        schema: "public", // Set the schema name
      },
      models: [Result],
      logging: (...msg) => console.log(msg),
    });

    // await this.sequelize.sync({alter: true});

    await this.sequelize
      .authenticate()
      .then(() => {
        console.log(
          "✅ PostgreSQL Connection has been established successfully.",
        );
      })
      .catch((err) => {
        console.error("❌ Unable to connect to the PostgreSQL database:", err);
      });
  }

  public static getInstance(): Sequelize {
    if (!this.sequelize) {
      Database.connectToPostgreSQL();
    }
    return this.sequelize;
  }
}

export default Database;
