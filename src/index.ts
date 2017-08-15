import { Bootstrap } from './bootstrap';
const server = new Bootstrap().server;
import { AppRouter } from './modules/routes';
// server.addStaticFileRouting(this.config.webBasePath, __dirname + this.config.webBasePath, this.config.staticFileConfig);
// server.addStaticFileRouting(this.config.docsBasepath, __dirname + this.config.docsBasepath, this.config.staticFileConfig);
server.addApiRouting('/', AppRouter);
server.start();
