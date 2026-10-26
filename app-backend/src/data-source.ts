import { DataSource } from "typeorm";
import { config } from "dotenv";
config({ path: "../.env" });

const dbURL = process.env.DB_URL;
if (!dbURL) {
    throw new Error('Environment variable DB_URL is not set');
}

export const AppDataSource = new DataSource({
    type: 'postgres',
    url: dbURL,
    ssl: {
        rejectUnauthorized: false,
    },
    entities: [__dirname + '/modules/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
    synchronize: false,
});