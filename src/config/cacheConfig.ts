import { RedisConfig, } from 'mission.core';
import { RedisStoreOptions } from 'connect-redis';
//     auth_pass?: string;
//     command_queue_high_water?: number;
//     command_queue_low_water?: number;
//     connect_timeout?: number;
//     db?: string;
//     detect_buffers?: boolean;
//     disable_resubscribing?: boolean;
//     enable_offline_queue?: boolean;
//     family?: string;
//     host?: string;
//     max_attempts?: number;
//     no_ready_check?: boolean;
//     parser?: string;
//     password?: string;
//     path?: string;
//     port?: number;
//     prefix?: string;
//     rename_commands?: any;
//     retry_max_delay?: number;
//     retry_strategy?: RetryStrategy;
//     retry_unfulfilled_commands?: boolean;
//     return_buffers?: boolean;
//     socket_keepalive?: boolean;
//     socket_nodelay?: boolean;
//     string_numbers?: boolean;
//     tls?: any;
//     url?: string;


export const CacheConfig: RedisConfig = {
    host: App.Config.REDIS_HOST_NAME,
    port: App.Config.REDIS_PORT,
    connect_timeout: 60000,
    db: 'cache'
};


//  interface RedisStoreOptions {
//     client?: redis.RedisClient;
//     host?: string;
//     port?: number;
//     socket?: string;
//     url?: string;
//     ttl?: number;
//     disableTTL?: boolean;
//     db?: number;
//     pass?: string;
//     prefix?: string;
//     unref?: boolean;
//     serializer?: Serializer | JSON;
// }

export const RedisSessionConfig: RedisStoreOptions = {
    host: App.Config.REDIS_HOST_NAME,
    port: App.Config.REDIS_PORT,
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
