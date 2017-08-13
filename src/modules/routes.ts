import * as passport from 'passport';
import * as session from 'express-session';
import * as redisStore from 'connect-redis';
import { GetRouter, Router, ApplicationRoutes, AuthMiddleware, TransactioniMiddleware } from 'mission.core';
import { SessionConfig, RedisSessionConfig } from '../config';
import auth from './app-manager/service/auth.service';
import './app-manager/service';

let Store = redisStore(session);
SessionConfig.store = new Store(RedisSessionConfig);

const route: Router = GetRouter();
route.use(session(SessionConfig));
route.use(passport.initialize());
route.use(passport.session());
route.use(auth);
route.use(AuthMiddleware);
route.use(TransactioniMiddleware);
route.use(ApplicationRoutes);
export { route as AppRouter };
