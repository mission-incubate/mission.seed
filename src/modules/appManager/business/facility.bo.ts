import * as SStatic from 'sequelize';
import { BaseBo, BoRegister, AppIncludes } from 'mission.core';
import { BaseRequest, ApiRequest, ApiResponse } from 'mission.common';
import { FacilityInstance, FacilityAttributes } from '../model/interface';
import { FacilityFilter } from '../common';

@BoRegister
export class FacilityBo extends BaseBo<FacilityInstance, FacilityAttributes> {
    public async AddFacility(req: BaseRequest): Promise<ApiResponse<number>> {
        let result = await super.save(req.data);
        return super.getResponse(result.dataValues.Id);
    }

    public async UpdateFacility(req: BaseRequest): Promise<ApiResponse<number>> {
        let result = await super.update(req.data);
        return super.getResponse(result.dataValues.Id);
    }

    public async GetFacilities(apiReq?: ApiRequest<FacilityFilter>): Promise<ApiResponse<FacilityAttributes[]>> {
        super.qoBuilder.include(apiReq.includes, (include) => AppIncludes.Instance[include.key]);
        super.qoBuilder.where(apiReq.filters, key => FacilityFilter[key]);
        let result = await super.findAll(super.qoBuilder.findOptions);
        return super.getResponse(super.getAttributes(result), apiReq.pageContext);
    }

    public async DeleteFacility(req: BaseRequest): Promise<ApiResponse<Boolean>> {
        return super.getResponse(await super.markAsDelete(req.id));
    }

    public getModel(): SStatic.Model<FacilityInstance, FacilityAttributes> {
        return App.Models.Facility;
    }
}
