import { Request, Response, NextFunction, BoFactory, Routable } from 'mission.core';
import { ApiResponse } from 'mission.common';
import { SpecialityBo } from '../Business';

@Routable('/AppManager/Speciality')
export class SpecialityService {
    public static async AddSpeciality(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<number>> {
        const specialityBo = BoFactory.GetBo<SpecialityBo>(SpecialityBo, req);
        return await specialityBo.AddSpeciality(req.body);
    }
    public static async UpdateSpeciality(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<number>> {
        const specialityBo = BoFactory.GetBo<SpecialityBo>(SpecialityBo, req);
        return await specialityBo.UpdateSpeciality(req.body);
    }
    public static async GetSpecialities(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<any>> {
        const specialityBo = BoFactory.GetBo<SpecialityBo>(SpecialityBo, req);
        return await specialityBo.GetSpecialities(req.body);
    }
    public static async DeleteSpeciality(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<Boolean>> {
        const specialityBo = BoFactory.GetBo<SpecialityBo>(SpecialityBo, req);
        return await specialityBo.DeleteSpeciality(req.body);
    }
}
