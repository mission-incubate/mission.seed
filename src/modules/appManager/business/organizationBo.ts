import * as SStatic from 'sequelize';
import { BaseBo, BoRegister, AppIncludes } from 'mission.core';
import { BaseRequest, ApiRequest, ApiResponse } from 'mission.common';
import { OrganizationInstance, OrganizationAttributes } from '../model/interface';
import { OrganizationFilter } from '../common';

@BoRegister
export class OrganizationBo extends BaseBo<OrganizationInstance, OrganizationAttributes> {
    public async AddOrganization(req: BaseRequest): Promise<ApiResponse<number>> {
        let result = await super.Save(req.data);
        return super.GetResponse(result.dataValues.Id);
    }

    public async UpdateOrganization(req: BaseRequest): Promise<ApiResponse<number>> {
        let result = await super.Update(req.data);
        return super.GetResponse(result.dataValues.Id);
    }

    public async GetOrganizations(apiReq?: ApiRequest<OrganizationFilter>): Promise<ApiResponse<OrganizationAttributes[]>> {
        super.QOBuilder.include(apiReq.includes, (include) => AppIncludes[include.key]);
        super.QOBuilder.where(apiReq.filters, key => OrganizationFilter[key]);
        let result = await super.FindAll(super.QOBuilder.findOptions);
        return super.GetResponse(super.GetAttributes(result), apiReq.pageContext);
    }

    public async DeleteOrganization(req: BaseRequest): Promise<ApiResponse<Boolean>> {
        return super.GetResponse(await super.MarkAsDelete(req.id));
    }

    public GetModel(): SStatic.Model<OrganizationInstance, OrganizationAttributes> {
        return App.Models.Organization;
    }
}
