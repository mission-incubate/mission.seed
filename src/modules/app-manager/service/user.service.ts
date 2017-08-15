import { Request, Response, NextFunction, BoFactory, Routable } from 'mission.core';
import { UserBo } from '../business';

@Routable('/AppManager/User')
export class UserService {
    @Routable('/AddUser')
    public static async AddUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        const userBo = UserService.getBo(req);
        (res as any).data = await userBo.AddUser(req.body);
    }
    public static async UpdateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        const userBo = UserService.getBo(req);
        (res as any).data = await userBo.UpdateUser(req.body);
    }
    @Routable('/GetUsers')
    public static async GetUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
        const userBo = UserService.getBo(req);
        (res as any).data = await userBo.GetUsers(req.body);
    }
    public static async DeleteUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        const userBo = UserService.getBo(req);
        (res as any).data = await userBo.DeleteUser(req.body);
    }

    public static async GetParams(req: Request, res: Response, next: NextFunction): Promise<any> {
        const userBo = UserService.getBo(req);
        (res as any).data = await userBo.GetParams(req.body);
    }
    private static getBo(req: Request): UserBo {
        return BoFactory.getBo<UserBo>(UserBo, req);
    }
}
