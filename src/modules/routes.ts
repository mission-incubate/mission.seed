import * as passport from 'passport';
import * as session from 'express-session';
import * as redisStore from 'connect-redis';
import { SessionConfig, CacheConfig } from '../config';
import { GetRouter, Router, AuthMiddleware, ApplicationRoutes } from 'mission.core';
import Auth from './appManager/service/auth';
import './appManager/service';

let Store = redisStore(session);
SessionConfig.store = new Store(CacheConfig);

var route: Router = GetRouter();
route.use(session(SessionConfig));
route.use(passport.initialize());
route.use(passport.session());
route.use('/Auth', Auth);
route.use(AuthMiddleware);
//route.use(FacadeRoute);
//route.use('/AppManager', AppManager);
route.use(ApplicationRoutes);
export { route as AppRouter };
