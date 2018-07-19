import { Options } from 'mission.core';

export const DbConfig: Options = {
    database: process.env.DATABASE_NAME || '',
    benchmark: true,
    dialect: process.env.DATABASE_DIALECT || '',
    host: process.env.DATABASE_HOST_NAME || '',
    logging: false,
    port: Number(process.env.DATABASE_PORT) || -1,
    timezone: process.env.DATABASE_TIME_ZONE || '+12:00',
    operatorsAliases: Boolean(process.env.DATABASE_OPERATORS_ALIASES || false),
    password: process.env.DATABASE_PASSWORD || '',
    username: process.env.DATABASE_USER_NAME || '',
};
