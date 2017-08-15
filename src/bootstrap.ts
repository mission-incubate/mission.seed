import { WebServer, Request, Response, NextFunction, LoggerFactory, Repository } from 'mission.core';
import { Paginator, ApiResponse, IBaseDto } from 'mission.common';
import { join } from 'path';
import { LoggerConfig, DbConfig, WebConfig } from './config';

export class Bootstrap {
    public server: WebServer;
    public constructor() {
        const logger = LoggerFactory.getLogger(LoggerConfig.ExceptionLoggerConfig);
        const startupLogger = LoggerFactory.getLogger(LoggerConfig.StartUpLoggerConfig);
        Paginator.init(Number(process.env.APP_DEFAULT_PAGE_SIZE));
        let modelPattern = join(__dirname, 'modules', '**/*.model.js');
        Repository.init(DbConfig, modelPattern, logger);
        const server = new WebServer(WebConfig, startupLogger);
        server.errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
            const msg = typeof err === 'string' ? err : err.message;
            const out: ApiResponse<IBaseDto> = {
                data: undefined,
                pageContext: undefined,
                error: { name: err.name, message: err.message, stack: process.env.NODE_ENV === 'development' ? err.stack : undefined }
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
