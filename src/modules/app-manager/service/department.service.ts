import { Request, Response, NextFunction, BoFactory, Routable } from 'mission.core';
import { ApiResponse } from 'mission.common';
import { DepartmentBo } from '../business';

@Routable('/AppManager/Department')
export class DepartmentService {
    public static async addDepartment(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<number>> {
        const departmentBo = BoFactory.getBo<DepartmentBo>(DepartmentBo, req);
        return await departmentBo.addDepartment(req.body);
    }
    public static async updateDepartment(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<number>> {
        const departmentBo = BoFactory.getBo<DepartmentBo>(DepartmentBo, req);
        return await departmentBo.updateDepartment(req.body);
    }
    public static async getDepartments(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<any>> {
        const departmentBo = BoFactory.getBo<DepartmentBo>(DepartmentBo, req);
        return await departmentBo.getDepartments(req.body);
    }
    public static async deleteDepartment(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<Boolean>> {
        const departmentBo = BoFactory.getBo<DepartmentBo>(DepartmentBo, req);
        return await departmentBo.deleteDepartment(req.body);
    }
}
