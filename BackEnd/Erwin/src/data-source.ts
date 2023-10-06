import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "ticket",
  synchronize: true,
  logging: false,
  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"],
  subscribers: [],
});
