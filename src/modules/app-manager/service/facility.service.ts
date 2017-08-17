import { Request, Response, NextFunction, BoFactory, Routable } from 'mission.core';
import { ApiResponse } from 'mission.common';
import { FacilityBo } from '../business';

@Routable('/AppManager/Facility')
export class FacilityService {
    public static async addFacility(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<number>> {
        const facilityBo = BoFactory.getBo<FacilityBo>(FacilityBo, req);
        return await facilityBo.addFacility(req.body);
    }
    public static async updateFacility(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<number>> {
        const facilityBo = BoFactory.getBo<FacilityBo>(FacilityBo, req);
        return await facilityBo.updateFacility(req.body);
    }
    public static async getFacilities(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<any>> {
        const facilityBo = BoFactory.getBo<FacilityBo>(FacilityBo, req);
        return await facilityBo.getFacilities(req.body);
    }
    public static async deleteFacility(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<Boolean>> {
        const facilityBo = BoFactory.getBo<FacilityBo>(FacilityBo, req);
        return await facilityBo.deleteFacility(req.body);
    }
}
