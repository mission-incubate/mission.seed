import { SessionOptions } from 'mission.core';
import { WebConfig } from './web-server.config';

export const SessionConfig: SessionOptions = {
    secret: process.env.SESSION_SECRET,
    cookie: {
        secure: WebConfig.isHttpsEnabled,
        maxAge: Number(process.env.SESSION_MAX_AGE),
        httpOnly: true
    },
    resave: false,
    saveUninitialized: true
};
