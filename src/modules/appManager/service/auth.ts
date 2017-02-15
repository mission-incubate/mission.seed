import { BoFactory, Router, Request, Response, NextFunction, GetRouter, Wrap } from 'mission.core';
import { UserBo } from '../business';
import * as passport from 'passport';
import * as local from 'passport-local';

// router.post('/login',
//     passport.authenticate('local', { successRedirect: '/home', failureRedirect: '/login', failureFlash: true }),
//     (req: Request, res: Response, next: NextFunction) => {
//         return res.status(200).send({ result: 'success....' });
//     }
// );

passport.serializeUser((user: any, done: Function) => {
    done(null, user);
});

passport.deserializeUser((user: any, done: Function) => {
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
                let value = user.dataValues;
                return done(null, {
                    UserId: value.Id,
                    UserName: value.UserName
                });
            }).catch((err) => done(err, { UserName: userName }, { message: 'Can not find the user' }));
    }));

class Auth {
    public static async Login(req: Request, res: Response, next: NextFunction): Promise<void> {
        res.status(200).send({ result: 'Login success' });
    }
    public static async Logout(req: Request, res: Response, next: NextFunction): Promise<void> {
        req.logout();
        res.status(200).send({ result: 'Logout success' });
    }
}

let router: Router = GetRouter();
router.post('/' + Auth.Login.name, passport.authenticate('local'), Wrap(Auth.Login));
router.post('/' + Auth.Logout.name, Wrap(Auth.Logout));
export default router;
