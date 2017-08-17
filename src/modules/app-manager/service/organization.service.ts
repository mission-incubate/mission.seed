import { Request, Response, NextFunction, BoFactory, Routable } from 'mission.core';
import { ApiResponse } from 'mission.common';
import { OrganizationBo } from '../business';

@Routable('/AppManager/Organization')
export class OrganizationService {
    public static async AddOrganization(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<number>> {
        const organizationBo = BoFactory.getBo<OrganizationBo>(OrganizationBo, req);
        return await organizationBo.addOrganization(req.body);
    }
    public static async UpdateOrganization(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<number>> {
        const organizationBo = BoFactory.getBo<OrganizationBo>(OrganizationBo, req);
        return await organizationBo.updateOrganization(req.body);
    }
    public static async GetOrganizations(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<any>> {
        const organizationBo = BoFactory.getBo<OrganizationBo>(OrganizationBo, req);
        return await organizationBo.getOrganizations(req.body);
    }
    public static async DeleteOrganization(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<Boolean>> {
        const organizationBo = BoFactory.getBo<OrganizationBo>(OrganizationBo, req);
        return await organizationBo.deleteOrganization(req.body);
    }
}
