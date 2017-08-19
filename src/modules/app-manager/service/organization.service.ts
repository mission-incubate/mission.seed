import { ApiResponse } from 'mission.common';
import { BoFactory, NextFunction, Request, Response, Routable } from 'mission.core';

import { OrganizationBo } from '../business';

@Routable('/AppManager/Organization')
export class OrganizationService {
    public static async AddOrganization(req: Request, res: Response, next: NextFunction): Promise<void> {
        const organizationBo = OrganizationService.getBo(req);
        res.data = await organizationBo.addOrganization(req.body);
    }
    public static async UpdateOrganization(req: Request, res: Response, next: NextFunction): Promise<void> {
        const organizationBo = OrganizationService.getBo(req);
        res.data = await organizationBo.updateOrganization(req.body);
    }
    public static async GetOrganizations(req: Request, res: Response, next: NextFunction): Promise<void> {
        const organizationBo = OrganizationService.getBo(req);
        res.data = await organizationBo.getOrganizations(req.body);
    }
    public static async DeleteOrganization(req: Request, res: Response, next: NextFunction): Promise<void> {
        const organizationBo = OrganizationService.getBo(req);
        res.data = await organizationBo.deleteOrganization(req.body);
    }
    private static getBo(req: Request): OrganizationBo {
        return BoFactory.getBo<OrganizationBo>(OrganizationBo, req);
    }
}
