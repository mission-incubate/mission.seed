import { WebServerConfig } from 'mission.core';

export const WebConfig: WebServerConfig = {
    apiPort: Number(process.env.WEB_PORT),
    corsOptions: {
        allowedHeaders: (process.env.CORS_ALLOWED_HEADERS || '').split(','),
        credentials: Boolean(process.env.CORS_CREDENTIALS),
        exposedHeaders: (process.env.CORS_EXPOSED_HEADERS || '').split(','),
        maxAge: Number(process.env.CORS_MAX_AGE),
        methods: (process.env.CORS_METHODS || '').split(','),
        origin: process.env.CORS_ORIGIN,
    },
    httpsCertificatepath: process.env.WEB_SSL_CERTIFICATE_PATH || '',
    httpsKeypath: process.env.WEB_SSL_KEY_PATH || '',
    isHttpsEnabled: !!process.env.WEB_SSL_CERTIFICATE_PATH,
};
