import { Bootstrap } from './bootstrap';
export const server = new Bootstrap().server;
import { AppRouter } from './routes';
// server.addStaticFileRouting(this.config.webBasePath, __dirname + this.config.webBasePath,
// this.config.staticFileConfig);
// server.addStaticFileRouting(this.config.docsBasepath, __dirname + this.config.docsBasepath,
// this.config.staticFileConfig);
server.addApiRouting('/', AppRouter);
server.start();
