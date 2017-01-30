import { DatabaseConfig } from 'mission.core';

export const DbConfig: DatabaseConfig = {
    userName: App.Config.DATABASE_USER_NAME,
    password: App.Config.DATABASE_PASSWORD,
    database: App.Config.DATABASE_NAME,
    options: {
        host: App.Config.DATABASE_HOST_NAME,
        port: App.Config.DATABASE_PORT,
        dialect: App.Config.DATABASE_DIALECT,
        logging: false,
        force: true,
        timezone: '+12:00'
    }
};
