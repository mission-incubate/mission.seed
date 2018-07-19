import { SessionOptions } from 'express-session';
import { WebConfig } from './web-server.config';

export const SessionConfig: SessionOptions = {
    cookie: {
        httpOnly: true,
        maxAge: Number(process.env.SESSION_MAX_AGE),
        secure: WebConfig.isHttpsEnabled,
    },
    resave: true,
    saveUninitialized: false,
    rolling: true,
    secret: process.env.SESSION_SECRET || 'mission.io',
};
