import { ApiResponse } from 'mission.common';
import { BoFactory, NextFunction, Request, Response, Routable } from 'mission.core';

import { SpecialityBo } from '../business';

@Routable('/AppManager/Speciality')
export class SpecialityService {
    public static async addSpeciality(req: Request, res: Response, next: NextFunction): Promise<void> {
        const specialityBo = SpecialityService.getBo(req);
        res.data = await specialityBo.addSpeciality(req.body);
    }
    public static async updateSpeciality(req: Request, res: Response, next: NextFunction): Promise<void> {
        const specialityBo = SpecialityService.getBo(req);
        res.data = await specialityBo.updateSpeciality(req.body);
    }
    public static async getSpecialities(req: Request, res: Response, next: NextFunction): Promise<void> {
        const specialityBo = SpecialityService.getBo(req);
        res.data = await specialityBo.getSpecialities(req.body);
    }
    public static async deleteSpeciality(req: Request, res: Response, next: NextFunction): Promise<void> {
        const specialityBo = SpecialityService.getBo(req);
        res.data = await specialityBo.deleteSpeciality(req.body);
    }
    private static getBo(req: Request): SpecialityBo {
        return BoFactory.getBo<SpecialityBo>(SpecialityBo, req);
    }
}
