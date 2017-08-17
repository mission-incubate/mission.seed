import { DatabaseConfig } from 'mission.core';

export const DbConfig: DatabaseConfig = {
    database: process.env.DATABASE_NAME || '',
    options: {
        benchmark: true,
        dialect: process.env.DATABASE_DIALECT || '',
        force: true,
        host: process.env.DATABASE_HOST_NAME || '',
        logging: false,
        port: Number(process.env.DATABASE_PORT) || -1,
        timezone: process.env.DATABASE_TIME_ZONE || '+12:00',
    },
    password: process.env.DATABASE_PASSWORD || '',
    userName: process.env.DATABASE_USER_NAME || '',
};
