import { ApiResponse } from 'mission.common';
import { BoFactory, NextFunction, Request, Response, Routable } from 'mission.core';

import { DepartmentBo } from '../business';
import { DepartmentInstance } from '../model/interface';

@Routable('/AppManager/Department')
export class DepartmentService {
    public static async addDepartment(req: Request, res: Response, next: NextFunction): Promise<DepartmentInstance> {
        const departmentBo = DepartmentService.getBo(req);
        return await departmentBo.addDepartment(req.body);
    }
    public static async updateDepartment(req: Request, res: Response, next: NextFunction): Promise<number> {
        const departmentBo = DepartmentService.getBo(req);
        return await departmentBo.updateDepartment(req.body);
    }
    public static async getDepartments(req: Request, res: Response, next: NextFunction): Promise<DepartmentInstance[]> {
        const departmentBo = DepartmentService.getBo(req);
        return await departmentBo.getDepartments(req.body);
    }
    public static async deleteDepartment(req: Request, res: Response, next: NextFunction): Promise<number> {
        const departmentBo = DepartmentService.getBo(req);
        return await departmentBo.deleteDepartment(req.body);
    }
    private static getBo(req: Request): DepartmentBo {
        return BoFactory.getBo<DepartmentBo>(DepartmentBo, req);
    }
}
