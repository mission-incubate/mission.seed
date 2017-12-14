import { ApiResponse, IBaseDto, Paginator } from 'mission.common';
import { LoggerFactory, NextFunction, Repository, Request, Response, WebServer } from 'mission.core';
import { join } from 'path';

import { DbConfig, LoggerConfig, WebConfig } from './config';

export class Bootstrap {
    public server: WebServer;
    public constructor() {
        const logger = LoggerFactory.getLogger(LoggerConfig.ExceptionLoggerConfig);
        const startupLogger = LoggerFactory.getLogger(LoggerConfig.StartUpLoggerConfig);
        Paginator.init(Number(process.env.APP_DEFAULT_PAGE_SIZE));
        const modelPattern = [
            join(__dirname, '../../node_modules/mission.seed.*', '**/*.model.js'),
        ];
        Repository.init(DbConfig, modelPattern, startupLogger);
        const server = new WebServer(WebConfig, startupLogger);
        server.errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
            const msg = typeof err === 'string' ? err : err.message;
            const out: ApiResponse<IBaseDto> = {
                data: undefined,
                error: {
                    message: err.message,
                    name: err.name,
                    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
                },
                pageContext: undefined,
            };
            logger.error(msg, err.stack);
            res.status(404).json(out);
        };
        startupLogger.info(JSON.stringify(process.env));
        server.init();
        this.server = server;
        return this;
    }
}
