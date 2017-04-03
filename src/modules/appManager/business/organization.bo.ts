import * as SStatic from 'sequelize';
import { BaseBo, BoRegister, AppIncludes } from 'mission.core';
import { BaseRequest, ApiRequest, ApiResponse } from 'mission.common';
import { OrganizationInstance, OrganizationAttributes } from '../model/interface';
import { OrganizationFilter } from '../common';

@BoRegister
export class OrganizationBo extends BaseBo<OrganizationInstance, OrganizationAttributes> {
    public async AddOrganization(req: BaseRequest): Promise<ApiResponse<number>> {
        let result = await super.save(req.data);
        return super.getResponse(result.dataValues.id);
    }

    public async UpdateOrganization(req: BaseRequest): Promise<ApiResponse<number>> {
        let result = await super.update(req.data);
        return super.getResponse(result.dataValues.id);
    }

    public async GetOrganizations(apiReq?: ApiRequest<OrganizationFilter>): Promise<ApiResponse<OrganizationAttributes[]>> {
        super.qoBuilder.include(apiReq.includes, (include) => AppIncludes.Instance[include.key]);
        super.qoBuilder.where(apiReq.filters, key => OrganizationFilter[key]);
        let result = await super.findAll(super.qoBuilder.findOptions);
        return super.getResponse(super.getAttributes(result), apiReq.pageContext);
    }

    public async DeleteOrganization(req: BaseRequest): Promise<ApiResponse<Boolean>> {
        return super.getResponse(await super.markAsDelete(req.id));
    }

    public getModel(): SStatic.Model<OrganizationInstance, OrganizationAttributes> {
        return App.Models.Organization;
    }
}
