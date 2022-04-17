import { DataSource } from "typeorm";
import { User } from './entities/User';

export const AddDataSource = new DataSource({
    type:"postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Roloo321010",
    database: "typeormdb",
    synchronize: true,
    logging: true,
    entities: [User],
})