import { ApiRequest, ApiResponse, BaseRequest } from 'mission.common';
import { AppIncludes, BaseBo, BoRegister } from 'mission.core';
import * as SStatic from 'sequelize';

import { AppBaseBo } from '../../../common';
import { FacilityFilter } from '../common';
import { FacilityAttributes, FacilityInstance } from '../model/interface';

@BoRegister
export class FacilityBo extends AppBaseBo<FacilityInstance, FacilityAttributes> {
    public async addFacility(req: BaseRequest): Promise<FacilityInstance> {
        const result = await super.save(req.data);
        // return super.getResponse(result.dataValues.id);
        return result;
    }

    public async updateFacility(req: BaseRequest): Promise<number> {
        const result = await super.update(req.data);
        // return super.getResponse(result.dataValues.id);
        return result;
    }

    public async getFacilities(apiReq: ApiRequest<FacilityFilter>): Promise<FacilityInstance[]> {
        super.qoBuilder.include(apiReq.includes, (include) => AppIncludes.Instance[include.key]);
        super.qoBuilder.where(apiReq.filters, (key) => FacilityFilter[key]);
        const result = await super.findAll(super.qoBuilder.findOptions);
        // return super.getResponse(super.getAttributes(result), apiReq.pageContext);
        return result;
    }

    public async deleteFacility(req: BaseRequest): Promise<any> {
        // return super.getResponse(await super.markAsDelete(req.id || 0));
        const result = await super.markAsDelete(req.id || 0);
        return result;
    }

    public getModel(): SStatic.Model<FacilityInstance, FacilityAttributes> {
        return super.models.Facility;
    }
}
