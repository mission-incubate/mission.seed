
import { RedisStoreOptions } from 'connect-redis';
// import { RedisConfig, } from 'mission.core';

// export const CacheConfig: RedisConfig = {
//     host: process.env.REDIS_HOST_NAME || 'localhost',
//     port: Number(process.env.REDIS_PORT),
//     connect_timeout: 60000
// };

export const RedisSessionConfig: RedisStoreOptions = {
    host: process.env.REDIS_HOST_NAME || 'localhost',
    port: Number(process.env.REDIS_PORT),
    db: 0
};
