import { Request, Response, NextFunction, BoFactory, Routable } from 'mission.core';
import { ApiResponse } from 'mission.common';
import { SpecialityBo } from '../business';

@Routable('/AppManager/Speciality')
export class SpecialityService {
    public static async addSpeciality(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<number>> {
        const specialityBo = BoFactory.getBo<SpecialityBo>(SpecialityBo, req);
        return await specialityBo.addSpeciality(req.body);
    }
    public static async updateSpeciality(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<number>> {
        const specialityBo = BoFactory.getBo<SpecialityBo>(SpecialityBo, req);
        return await specialityBo.updateSpeciality(req.body);
    }
    public static async getSpecialities(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<any>> {
        const specialityBo = BoFactory.getBo<SpecialityBo>(SpecialityBo, req);
        return await specialityBo.getSpecialities(req.body);
    }
    public static async deleteSpeciality(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<Boolean>> {
        const specialityBo = BoFactory.getBo<SpecialityBo>(SpecialityBo, req);
        return await specialityBo.deleteSpeciality(req.body);
    }
}
