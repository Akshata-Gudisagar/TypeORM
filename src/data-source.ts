import "reflect-metadata"
import { DataSource } from "typeorm"
import { jobDetail } from "./entity/JobDetail"
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    synchronize: true,//supports syncronus request
    logging: false,
    entities: [jobDetail],
    migrations: [],
    subscribers: [],
})
