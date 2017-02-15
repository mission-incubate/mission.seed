import { Request, Response, NextFunction, BoFactory, Routable } from 'mission.core';
import { ApiResponse } from 'mission.common';
import { UserBo } from '../business';

@Routable('/AppManager/User')
export class UserService {
    @Routable('/AddUser')
    public static async AddUser(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<number>> {
        const userBo = BoFactory.getBo<UserBo>(UserBo, req);
        return await userBo.AddUser(req.body);
    }
    public static async UpdateUser(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<number>> {
        const userBo = BoFactory.getBo<UserBo>(UserBo, req);
        return await userBo.UpdateUser(req.body);
    }
    @Routable('/GetUsers')
    public static async GetUsers(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<any>> {
        const userBo = BoFactory.getBo<UserBo>(UserBo, req);
        return await userBo.GetUsers(req.body);
    }
    public static async DeleteUser(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<Boolean>> {
        const userBo = BoFactory.getBo<UserBo>(UserBo, req);
        return await userBo.DeleteUser(req.body);
    }

    public static async GetParams(req: Request, res: Response, next: NextFunction): Promise<any> {
        const userBo = BoFactory.getBo<UserBo>(UserBo, req);
        return await userBo.GetParams(req.body);
    }
}
