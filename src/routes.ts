import * as redisStore from 'connect-redis';
import * as session from 'express-session';
import { ApplicationRoutes, GetRouter, Router, TransactioniMiddleware } from 'mission.core';
import * as passport from 'passport';

import { RedisSessionConfig, SessionConfig } from './config';

import 'mission.seed.app-manager';
// import auth from './app-manager/service/auth-local.service';
// import auth from './app-manager/service/auth-jwt.service';

const RedisStore = redisStore(session);
SessionConfig.store = new RedisStore(RedisSessionConfig);

const route: Router = GetRouter();
route.use(session(SessionConfig));
route.use(passport.initialize());
route.use(passport.session());
// route.use(auth);
// route.use(AuthMiddleware);
route.use(TransactioniMiddleware);
route.use(ApplicationRoutes);
export { route as AppRouter };
