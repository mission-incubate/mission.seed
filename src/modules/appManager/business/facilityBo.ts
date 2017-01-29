import * as SStatic from 'sequelize';
import { BaseBo, BoRegister, AppIncludes } from 'mission.core';
import { BaseRequest, ApiRequest, ApiResponse } from 'mission.common';
import { FacilityInstance, FacilityAttributes } from '../Model/Interface';
import { FacilityFilter } from '../Common';

@BoRegister
export class FacilityBo extends BaseBo<FacilityInstance, FacilityAttributes> {
    public async AddFacility(req: BaseRequest): Promise<ApiResponse<number>> {
        let result = await super.Save(req.data);
        return super.GetResponse(result.dataValues.Id);
    }

    public async UpdateFacility(req: BaseRequest): Promise<ApiResponse<number>> {
        let result = await super.Update(req.data);
        return super.GetResponse(result.dataValues.Id);
    }

    public async GetFacilities(apiReq?: ApiRequest<FacilityFilter>): Promise<ApiResponse<FacilityAttributes[]>> {
        super.QOBuilder.include(apiReq.includes, (include) => AppIncludes[include.key]);
        super.QOBuilder.where(apiReq.filters, key => FacilityFilter[key]);
        let result = await super.FindAll(super.QOBuilder.findOptions);
        return super.GetResponse(super.GetAttributes(result), apiReq.pageContext);
    }

    public async DeleteFacility(req: BaseRequest): Promise<ApiResponse<Boolean>> {
        return super.GetResponse(await super.MarkAsDelete(req.id));
    }

    public GetModel(): SStatic.Model<FacilityInstance, FacilityAttributes> {
        return App.Models.Facility;
    }
}
