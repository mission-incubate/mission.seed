import { RedisConfig, } from 'mission.core';
import { RedisStoreOptions } from 'connect-redis';

export const CacheConfig: RedisConfig = {
    host: process.env.REDIS_HOST_NAME || 'localhost',
    port: Number(process.env.REDIS_PORT),
    connect_timeout: 60000,
    db: 'cache'
};

export const RedisSessionConfig: RedisStoreOptions = {
    host: process.env.REDIS_HOST_NAME || 'localhost',
    port: Number(process.env.REDIS_PORT)
};
