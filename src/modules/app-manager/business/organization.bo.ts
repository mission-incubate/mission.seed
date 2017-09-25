import { ApiRequest, ApiResponse, BaseRequest } from 'mission.common';
import { AppIncludes, BaseBo, BoRegister } from 'mission.core';
import * as SStatic from 'sequelize';

import { AppBaseBo } from '../../../common';
import { OrganizationFilter } from '../common';
import { OrganizationAttributes, OrganizationInstance } from '../model/interface';

@BoRegister
export class OrganizationBo extends AppBaseBo<OrganizationInstance, OrganizationAttributes> {
    public async addOrganization(req: BaseRequest): Promise<OrganizationInstance> {
        const result = await super.save(req.data);
        // return super.getResponse(result.dataValues.id);
        return result;
    }

    public async updateOrganization(req: BaseRequest): Promise<number> {
        const result = await super.update(req.data);
        // return super.getResponse(result.dataValues.id);
        return result;
    }

    public async getOrganizations(apiReq: ApiRequest<OrganizationFilter>)
        : Promise<OrganizationInstance[]> {
        super.qoBuilder.include(apiReq.includes, (include) => AppIncludes.Instance[include.key]);
        super.qoBuilder.where(apiReq.filters, (key) => OrganizationFilter[key]);
        const result = await super.findAll(super.qoBuilder.findOptions);
        // return super.getResponse(super.getAttributes(result), apiReq.pageContext);
        return result;
    }

    public async deleteOrganization(req: BaseRequest): Promise<number> {
        if (!req.id) {
            throw { name: 'NOID', message: 'Invalid Id' };
        }
        // return super.getResponse(await super.markAsDelete(req.id));
        const result = await super.markAsDelete(req.id);
        return result;
    }

    public getModel(): SStatic.Model<OrganizationInstance, OrganizationAttributes> {
        return super.models.Organization;
    }
}
