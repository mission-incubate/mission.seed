import {
    ApplicationRoutes, BoFactory, GetRouter, NextFunction, Request, Response, Routable, Router, Wrap,
} from 'mission.core';
import * as passport from 'passport';
import * as local from 'passport-local';

import { UserBo } from '../business';

// router.post('/login',
//     passport.authenticate('local', { successRedirect: '/home', failureRedirect: '/login', failureFlash: true }),
//     (req: Request, res: Response, next: NextFunction) => {
//         return res.status(200).send({ result: 'success....' });
//     }
// );

passport.serializeUser((user: any, done: (err: any, id?: any) => void) => {
    done(null, user);
});

passport.deserializeUser((user: any, done: (err: any, user?: any) => void) => {
    done(null, user);
});

passport.use(new local.Strategy({ usernameField: 'UserName', passwordField: 'Password' },
    (userName: string, password: string, done: Function) => {
        const userBo = BoFactory.getBo(UserBo);
        userBo.findOne({ where: { UserName: userName }, attributes: ['Id', 'UserName', 'Password'] })
            .then((user) => {
                if (!user || !user.dataValues || user.dataValues.Password !== password) {
                    return done(null, false);
                }
                const value = user.dataValues;
                return done(null, {
                    UserId: value.id,
                    UserName: value.UserName,
                });
            }).catch((err) => done(err, { UserName: userName }, { message: 'Can not find the user' }));
    }));

// @Routable('/AppManager/Department')
export class Auth {
    public static async login(req: Request, res: Response, next: NextFunction): Promise<void> {
        res.status(200).send({ result: 'Login success' });
    }
    public static async logout(req: Request, res: Response, next: NextFunction): Promise<void> {
        req.logout();
        res.status(200).send({ result: 'Logout success' });
    }
}

const router: Router = GetRouter();
router.post('/' + Auth.login.name, passport.authenticate('local'), Wrap(Auth.login));
router.post('/' + Auth.logout.name, Wrap(Auth.logout));
export default router;
