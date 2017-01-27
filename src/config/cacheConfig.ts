import { RedisConfig, } from 'mission.core';

export const CacheConfig: RedisConfig = {
    auth: App.Config.REDIS_AUTH,
    host: App.Config.REDIS_HOST_NAME,
    keys_pattern: '*',
    name: 'Cache',
    namespace_separator: ':',
    port: App.Config.REDIS_PORT,
    ssh_port: App.Config.REDIS_SSH_PORT,
    timeout_connect: 60000,
    timeout_execute: 60000,
    db: 0
};

// export const CachePolicy: CachingPolicyDict = {
//     Default: <ICachingPolicy>{
//         expire: 0
//     },
//     ShortTime: {
//         expire: 60
//     },
//     Average: {
//         expire: 60 * 60
//     },
//     LongTime: {
//         expire: 60 * 60 * 24
//     }
// };

/*
Ref. to start redis server
http://richardsumilang.com/server/redis/install-redis-on-os-x/
*/
