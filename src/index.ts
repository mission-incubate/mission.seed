import { config, DotenvResult } from 'dotenv';
const env: DotenvResult = config();
if (env.error) {
    throw env.error;
}
// tslint:disable-next-line:no-console
console.log(env.parsed);

import { Bootstrap } from './bootstrap';
export const server = new Bootstrap().server;
import { AppRouter } from './routes';
server.addApiRouting('/', AppRouter);
server.start();
