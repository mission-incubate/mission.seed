import * as redisStore from 'connect-redis';
import * as session from 'express-session';
import { ApplicationRoutes, AuthMiddleware, GetRouter, Router, TransactioniMiddleware } from 'mission.core';
import * as passport from 'passport';

import { RedisSessionConfig, SessionConfig } from '../config';
import './app-manager/service';
import auth from './app-manager/service/auth.service';

const RedisStore = redisStore(session);
SessionConfig.store = new RedisStore(RedisSessionConfig);

const route: Router = GetRouter();
route.use(session(SessionConfig));
route.use(passport.initialize());
route.use(passport.session());
route.use(auth);
route.use(AuthMiddleware);
route.use(TransactioniMiddleware);
route.use(ApplicationRoutes);
export { route as AppRouter };
