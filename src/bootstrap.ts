import { WebServer, Request, Response, NextFunction, WebServerConfig, LoggerInstance } from 'mission.core';
import { ApiResponse, IBaseDto } from 'mission.common';
import { AppRouter } from './modules/routes';

export class Bootstrap {
    public Server: WebServer;
    constructor(private config: WebServerConfig) { }
    public init(logger: LoggerInstance): WebServer {
        let server = new WebServer(this.config, logger, logger);
        server.errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
            let msg = typeof err === 'string' ? err : err.message;
            var out: ApiResponse<IBaseDto> = {
                data: null,
                pageContext: null,
                error: { name: err.name, message: err.message, stack: process.env.NODE_ENV === 'development' ? err.stack : null }
            };
            logger.error(msg, err.stack);
            res.status(404).json(out);
        };
        server.init();
        server.addStaticFileRouting(this.config.webBasePath, __dirname + this.config.webBasePath, this.config.staticFileConfig);
        server.addStaticFileRouting(this.config.docsBasepath, __dirname + this.config.docsBasepath, this.config.staticFileConfig);
        server.addApiRouting('/', AppRouter);
        this.Server = server;
        return this.Server;
    }
    public Start(): void {
        this.Server.start();
    }
    public Stop(): void {
        this.Server.stop();
    }
}
