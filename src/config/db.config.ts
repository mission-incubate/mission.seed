import { DatabaseConfig } from 'mission.core';

export const DbConfig: DatabaseConfig = {
    userName: process.env.DATABASE_USER_NAME || '',
    password: process.env.DATABASE_PASSWORD || '',
    database: process.env.DATABASE_NAME || '',
    options: {
        host: process.env.DATABASE_HOST_NAME || '',
        port: Number(process.env.DATABASE_PORT) || -1,
        dialect: process.env.DATABASE_DIALECT || '',
        logging: console.warn,
        force: true,
        timezone: '+12:00',
        benchmark: true
    }
};
