import { ApiResponse } from 'mission.common';
import { BoFactory, NextFunction, Request, Response, Routable } from 'mission.core';

import { DepartmentBo } from '../business';

@Routable('/AppManager/Department')
export class DepartmentService {
    public static async addDepartment(req: Request, res: Response, next: NextFunction): Promise<void> {
        const departmentBo = DepartmentService.getBo(req);
        res.data = await departmentBo.addDepartment(req.body);
    }
    public static async updateDepartment(req: Request, res: Response, next: NextFunction): Promise<void> {
        const departmentBo = DepartmentService.getBo(req);
        res.data = await departmentBo.updateDepartment(req.body);
    }
    public static async getDepartments(req: Request, res: Response, next: NextFunction): Promise<void> {
        const departmentBo = DepartmentService.getBo(req);
        res.data = await departmentBo.getDepartments(req.body);
    }
    public static async deleteDepartment(req: Request, res: Response, next: NextFunction): Promise<void> {
        const departmentBo = DepartmentService.getBo(req);
        res.data = await departmentBo.deleteDepartment(req.body);
    }
    private static getBo(req: Request): DepartmentBo {
        return BoFactory.getBo<DepartmentBo>(DepartmentBo, req);
    }
}
