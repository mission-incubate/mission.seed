export const Config = {
    SSL_CERTIFICATE_PATH: '',
    SSL_KEY_PATH: '',
    PORT: this.SSL_CERTIFICATE_PATH ? 443 : 3000,
    DEFAULT_PAGE_SIZE: 50,
    WEB_APPLICATION_PATH: '/www',
    API_DOCUMENT_PATH: '/docs',
    CORS_ENABLED: false,
    /************* Database config **************/
    DATABASE_DIALECT: 'mysql',
    DATABASE_NAME: 'natarajan',
    DATABASE_USER_NAME: 'root',
    DATABASE_PASSWORD: 'irtt',
    DATABASE_HOST_NAME: 'localhost',
    DATABASE_PORT: 3306,
    /************* Redis config **************/
    REDIS_HOST_NAME: 'localhost',
    REDIS_AUTH: '',
    REDIS_PORT: 6379,
    REDIS_SSH_PORT: 22,
    /************* Cache config **************/
    CACHE_ENABLED: true,
    CACHE_PROVIDER: 'rediscacheprovider',
    /************* Session config **************/
    SESSION_SECRET: 'SecretKey',
    SESSION_MAX_AGE: 1000 * 60 * 10,
    /************* Email - SMTP config **************/
    SMPT_HOST: 'smtp.gmail.com',
    SMPT_PORT: 465,
    SMTP_SECURE: true, // use SSL 
    SMTP_USER: 'user@gmail.com',
    SMTP_PASSWORD: 'mission.api',
    /************* Elasticsearch  config **************/

    /************* Log  config **************/
    LOG_FOLDER_PATH: './Logs/',
    STARTUP_LOG_LEVEL: 'error',
    EXCEPTION_LOG_LEVEL: 'error',
    SQL_LOG_LEVEL: 'error',
    LOG_ENABLED: true,
    LOG_LEVEL: 'error',
    LOGGER_NAME: 'ConsoleLogger',
    FALL_BACK_LOGGER_NAME: 'ConsoleLogger',
    INSTRUMENTATION_LOGGER_NAME: 'ConsoleLogger',
    SQL_QUERY_LOGGER_NAME: 'ConsoleLogger',
}
