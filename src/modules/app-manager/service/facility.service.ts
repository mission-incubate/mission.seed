import { ApiResponse } from 'mission.common';
import { BoFactory, NextFunction, Request, Response, Routable } from 'mission.core';

import { FacilityBo } from '../business';

@Routable('/AppManager/Facility')
export class FacilityService {
    public static async addFacility(req: Request, res: Response, next: NextFunction): Promise<void> {
        const facilityBo = FacilityService.getBo(req);
        res.data = await facilityBo.addFacility(req.body);
    }
    public static async updateFacility(req: Request, res: Response, next: NextFunction): Promise<void> {
        const facilityBo = FacilityService.getBo(req);
        res.data = await facilityBo.updateFacility(req.body);
    }
    public static async getFacilities(req: Request, res: Response, next: NextFunction): Promise<void> {
        const facilityBo = FacilityService.getBo(req);
        res.data = await facilityBo.getFacilities(req.body);
    }
    public static async deleteFacility(req: Request, res: Response, next: NextFunction): Promise<void> {
        const facilityBo = FacilityService.getBo(req);
        res.data = await facilityBo.deleteFacility(req.body);
    }
    private static getBo(req: Request): FacilityBo {
        return BoFactory.getBo<FacilityBo>(FacilityBo, req);
    }
}
