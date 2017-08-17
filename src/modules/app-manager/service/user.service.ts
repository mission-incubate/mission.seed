import { BoFactory, NextFunction, Request, Response, Routable } from 'mission.core';

import { UserBo } from '../business';

@Routable('/AppManager/User')
export class UserService {
    @Routable('/AddUser')
    public static async addUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        const userBo = UserService.getBo(req);
        (res as any).data = await userBo.addUser(req.body);
    }
    public static async updateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        const userBo = UserService.getBo(req);
        (res as any).data = await userBo.updateUser(req.body);
    }
    @Routable('/getUsers')
    public static async getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
        const userBo = UserService.getBo(req);
        (res as any).data = await userBo.getUsers(req.body);
    }
    public static async deleteUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        const userBo = UserService.getBo(req);
        (res as any).data = await userBo.deleteUser(req.body);
    }

    public static async getParams(req: Request, res: Response, next: NextFunction): Promise<any> {
        const userBo = UserService.getBo(req);
        (res as any).data = await userBo.getParams(req.body);
    }
    private static getBo(req: Request): UserBo {
        return BoFactory.getBo<UserBo>(UserBo, req);
    }
}
