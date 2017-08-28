import { sign, verify } from 'jsonwebtoken';
import {
    ApplicationRoutes, BoFactory, GetRouter, NextFunction, Request, Response, Routable, Router, Wrap,
} from 'mission.core';
import * as passport from 'passport';
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';

import { UserBo } from '../business';
import { UserInstance } from '../model/interface/user.interface';

passport.serializeUser((user: any, done: (err: any, id?: any) => void) => {
    done(null, user);
});
passport.deserializeUser((user: any, done: (err: any, user?: any) => void) => {
    done(null, user);
});

// PASSPORT JWT STRATERGY
// *************************
const ops: StrategyOptions = {
    // audience: 'localhost:3000',
    // issuer: 'localhost:3000',
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: 'secretToken',
};
const strategy = new Strategy(ops, (jwt: { id: number }, done: Function) => {
    const userBo = BoFactory.getBo(UserBo);
    userBo.findOne({ where: { Id: jwt.id }, attributes: ['Id', 'UserName', 'Password'] })
        .then((user: UserInstance) => {
            let res: any = false;
            if (user && user.dataValues) {
                const value = user.dataValues;
                res = { id: (value as any).Id, userName: value.UserName };
            }
            done(null, res);
        }).catch((err: Error) => done(err, { id: jwt.id }, { message: 'Can not find the user' }));
});
passport.use(strategy);

// @Routable('/AppManager/Department')
export class Auth {
    public static async login(req: Request, res: Response, next: NextFunction): Promise<void> {
        const userBo = BoFactory.getBo(UserBo);
        const userIns = await userBo.findOne({
            attributes: ['Id', 'UserName', 'Password'],
            where: { UserName: req.body.userName },
        });
        if (userIns) {
            const user = userIns.dataValues;
            if (user.Password === req.body.password) {
                const payload = { id: (user as any).Id };
                const token = sign(payload, 'secretToken', { expiresIn: 1440 });
                res.data = { token };
            } else {
                throw new Error('Password didnot match');
            }
        } else {
            throw new Error('User not found');
        }
    }
    public static async logout(req: Request, res: Response, next: NextFunction): Promise<void> {
        req.logout();
        res.data = { result: 'Logout success' };
    }
}

const router: Router = GetRouter();
router.post('/' + Auth.login.name, Wrap(Auth.login), passport.authenticate('jwt', { session: true }));
router.post('/' + Auth.logout.name, Wrap(Auth.logout));
export default router;
