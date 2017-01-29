interface Models { }

declare var App: {
    Config?: AppSettings;
    Models?: Models
}

interface AppSettings {
    /************* Web Server config **************/
    SSL_CERTIFICATE_PATH: string;
    SSL_KEY_PATH: string;
    PORT: number;
    DEFAULT_PAGE_SIZE: number;
    WEB_APPLICATION_PATH: string;
    API_DOCUMENT_PATH: string;
    CORS_ENABLED: boolean;
    /************* Database config **************/
    DATABASE_DIALECT: string;
    DATABASE_NAME: string;
    DATABASE_USER_NAME: string;
    DATABASE_PASSWORD: string;
    DATABASE_HOST_NAME: string;
    DATABASE_PORT: number;
    /************* Cache config **************/
    CACHE_ENABLED: boolean;
    CACHE_PROVIDER: string;
    /************* Redis config **************/
    REDIS_HOST_NAME: string;
    REDIS_PORT: number;
    REDIS_SSH_PORT: number;
    /************* Session config **************/
    SESSION_SECRET: string;
    SESSION_MAX_AGE: number;
    /************* Email - SMTP config **************/
    SMPT_HOST: string;
    SMPT_PORT: number;
    SMTP_SECURE: boolean;
    SMTP_USER: string;
    SMTP_PASSWORD: string;
    /************* Elasticsearch  config **************/

    /************* Log  config **************/
    LOG_FOLDER_PATH: string;
    STARTUP_LOG_LEVEL: string;
    EXCEPTION_LOG_LEVEL: string;
    SQL_LOG_LEVEL: string;

    LOG_ENABLED: boolean;
    LOG_LEVEL: string;
    LOGGER_NAME: string;
    FALL_BACK_LOGGER_NAME: string;
    INSTRUMENTATION_LOGGER_NAME: string;
    SQL_QUERY_LOGGER_NAME: string;

}