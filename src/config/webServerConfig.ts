import { WebServerConfig } from 'mission.core';

export const WebConfig: WebServerConfig = {
    apiPort: App.Config.PORT,
    isHttpsEnabled: !!App.Config.SSL_CERTIFICATE_PATH,
    httpsCertificatepath: App.Config.SSL_CERTIFICATE_PATH,
    httpsKeypath: App.Config.SSL_KEY_PATH,
    staticFileConfig: {
        dotfiles: 'ignore',
        etag: false,
        extensions: ['htm', 'html'],
        index: ['index.html', 'index.htm'],
        maxAge: '1d',
        redirect: false,
        setHeaders: function (res: any, path: string, stat: string) {
            res.set('x-timestamp', Date.now().toString());
        }
    },
    corsOptions: {
        origin: '*',
        methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Authorization', 'Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
        exposedHeaders: [],
        credentials: true,
        maxAge: 3600
    },
    webBasePath: App.Config.WEB_APPLICATION_PATH,
    docsBasepath: App.Config.API_DOCUMENT_PATH
};
