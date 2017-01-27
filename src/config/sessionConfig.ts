import { SessionOptions } from 'mission.core';
import { WebConfig } from './WebServerConfig';

export const SessionConfig: SessionOptions = {
    secret: App.Config.SESSION_SECRET,
    cookie: {
        secure: WebConfig.isHttpsEnabled,
        maxAge: App.Config.SESSION_MAX_AGE,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: true
};
