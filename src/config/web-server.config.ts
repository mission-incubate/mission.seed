import { WebServerConfig } from 'mission.core';

export const WebConfig: WebServerConfig = {
    apiPort: Number(process.env.WEB_PORT),
    isHttpsEnabled: !!process.env.WEB_SSL_CERTIFICATE_PATH,
    httpsCertificatepath: process.env.WEB_SSL_CERTIFICATE_PATH || '',
    httpsKeypath: process.env.SSL_KEY_PATH || '',
    corsOptions: {
        origin: process.env.CORS_ORIGIN,
        methods: (process.env.CORS_METHODS || '').split(','),
        allowedHeaders: (process.env.CORS_ALLOWED_HEADERS || '').split(','),
        exposedHeaders: (process.env.CORS_EXPOSED_HEADERS || '').split(','),
        credentials: Boolean(process.env.CORS_CREDENTIALS),
        maxAge: Number(process.env.CORS_MAX_AGE)
    }
};
