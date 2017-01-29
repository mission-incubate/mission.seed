import { Request, Response, NextFunction, BoFactory, Routable } from 'mission.core';
import { ApiResponse } from 'mission.common';
import { OrganizationBo } from '../Business';

@Routable('/AppManager/Organization')
export class OrganizationService {
    public static async AddOrganization(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<number>> {
        const organizationBo = BoFactory.getBo<OrganizationBo>(OrganizationBo, req);
        return await organizationBo.AddOrganization(req.body);
    }
    public static async UpdateOrganization(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<number>> {
        const organizationBo = BoFactory.getBo<OrganizationBo>(OrganizationBo, req);
        return await organizationBo.UpdateOrganization(req.body);
    }
    public static async GetOrganizations(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<any>> {
        const organizationBo = BoFactory.getBo<OrganizationBo>(OrganizationBo, req);
        return await organizationBo.GetOrganizations(req.body);
    }
    public static async DeleteOrganization(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<Boolean>> {
        const organizationBo = BoFactory.getBo<OrganizationBo>(OrganizationBo, req);
        return await organizationBo.DeleteOrganization(req.body);
    }
}
