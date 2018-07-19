import {
    BoFactory, GetRouter, NextFunction, Request, Response, Router, Wrap,
} from 'mission.core';
import * as passport from 'passport';
import * as local from 'passport-local';

import { UserBo } from '../business';
import { UserInstance } from '../model/interface/user.interface';

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

passport.use(new local.Strategy({ usernameField: 'userName', passwordField: 'password' },
    (userName: string, password: string, done: Function) => {
        const userBo = BoFactory.getBo(UserBo);
        userBo.findOne({ where: { UserName: userName }, attributes: ['Id', 'UserName', 'Password'] })
            .then((user: UserInstance) => {
                if (!user || !user.dataValues || user.dataValues.Password !== password) {
                    return done(null, false);
                }
                const value = user.dataValues;
                return done(null, {
                    UserId: (value as any).Id,
                    UserName: value.UserName,
                });
            }).catch((err: Error) => done(err, { UserName: userName }, { message: 'Can not find the user' }));
    }));

// @Routable('/AppManager/Department')
export class Auth {
    public static async login(req: Request, res: Response, next: NextFunction): Promise<void> {
        res.data = { result: 'Login success' };
    }
    public static async logout(req: Request, res: Response, next: NextFunction): Promise<void> {
        req.logout();
        res.data = { result: 'Logout success' };
    }
}

const router: Router = GetRouter();
router.post('/' + Auth.login.name, passport.authenticate('local') as any, Wrap(Auth.login));
router.post('/' + Auth.logout.name, Wrap(Auth.logout));
export default router;
