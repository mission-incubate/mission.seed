import { Request, Response, NextFunction, BoFactory, Routable } from 'mission.core';
import { ApiResponse } from 'mission.common';
import { DepartmentBo } from '../Business';

@Routable('/AppManager/Department')
export class DepartmentService {
    public static async AddDepartment(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<number>> {
        const departmentBo = BoFactory.getBo<DepartmentBo>(DepartmentBo, req);
        return await departmentBo.AddDepartment(req.body);
    }
    public static async UpdateDepartment(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<number>> {
        const departmentBo = BoFactory.getBo<DepartmentBo>(DepartmentBo, req);
        return await departmentBo.UpdateDepartment(req.body);
    }
    public static async GetDepartments(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<any>> {
        const departmentBo = BoFactory.getBo<DepartmentBo>(DepartmentBo, req);
        return await departmentBo.GetDepartments(req.body);
    }
    public static async DeleteDepartment(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<Boolean>> {
        const departmentBo = BoFactory.getBo<DepartmentBo>(DepartmentBo, req);
        return await departmentBo.DeleteDepartment(req.body);
    }
}
