import * as SStatic from 'sequelize';
import { BaseBo, BoRegister, AppIncludes } from 'mission.core';
import { BaseRequest, ApiRequest, ApiResponse } from 'mission.common';
import { FacilityInstance, FacilityAttributes } from '../model/interface';
import { FacilityFilter } from '../common';
import { AppBaseBo } from '../../../common';

@BoRegister
export class FacilityBo extends AppBaseBo<FacilityInstance, FacilityAttributes> {
    public async addFacility(req: BaseRequest): Promise<ApiResponse<number>> {
        let result = await super.save(req.data);
        return super.getResponse(result.dataValues.id);
    }

    public async updateFacility(req: BaseRequest): Promise<ApiResponse<number>> {
        let result = await super.update(req.data);
        return super.getResponse(result.dataValues.id);
    }

    public async getFacilities(apiReq: ApiRequest<FacilityFilter>): Promise<ApiResponse<FacilityAttributes[]>> {
        super.qoBuilder.include(apiReq.includes, (include) => AppIncludes.Instance[include.key]);
        super.qoBuilder.where(apiReq.filters, key => FacilityFilter[key]);
        let result = await super.findAll(super.qoBuilder.findOptions);
        return super.getResponse(super.getAttributes(result), apiReq.pageContext);
    }

    public async deleteFacility(req: BaseRequest): Promise<ApiResponse<any>> {
        return super.getResponse(await super.markAsDelete(req.id || 0));
    }

    public getModel(): SStatic.Model<FacilityInstance, FacilityAttributes> {
        return super.models.Facility;
    }
}
