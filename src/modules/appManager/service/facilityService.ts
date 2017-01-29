import { Request, Response, NextFunction, BoFactory, Routable } from 'mission.core';
import { ApiResponse } from 'mission.common';
import { FacilityBo } from '../Business';

@Routable('/AppManager/Facility')
export class FacilityService {
    public static async AddFacility(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<number>> {
        const facilityBo = BoFactory.GetBo<FacilityBo>(FacilityBo, req);
        return await facilityBo.AddFacility(req.body);
    }
    public static async UpdateFacility(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<number>> {
        const facilityBo = BoFactory.GetBo<FacilityBo>(FacilityBo, req);
        return await facilityBo.UpdateFacility(req.body);
    }
    public static async GetFacilities(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<any>> {
        const facilityBo = BoFactory.GetBo<FacilityBo>(FacilityBo, req);
        return await facilityBo.GetFacilities(req.body);
    }
    public static async DeleteFacility(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<Boolean>> {
        const facilityBo = BoFactory.GetBo<FacilityBo>(FacilityBo, req);
        return await facilityBo.DeleteFacility(req.body);
    }
}
