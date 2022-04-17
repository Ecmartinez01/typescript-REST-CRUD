"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AddDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Roloo321010",
    database: "typeormdb",
    synchronize: true,
    logging: true,
    entities: [],
});
