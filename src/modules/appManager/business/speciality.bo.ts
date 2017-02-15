import * as SStatic from 'sequelize';
import { BaseBo, BoRegister, AppIncludes } from 'mission.core';
import { BaseRequest, ApiRequest, ApiResponse } from 'mission.common';
import { SpecialityInstance, SpecialityAttributes } from '../model/interface';
import { SpecialityFilter } from '../common';

@BoRegister
export class SpecialityBo extends BaseBo<SpecialityInstance, SpecialityAttributes> {
    public async AddSpeciality(req: BaseRequest): Promise<ApiResponse<number>> {
        let result = await super.save(req.data);
        return super.getResponse(result.dataValues.Id);
    }

    public async UpdateSpeciality(req: BaseRequest): Promise<ApiResponse<number>> {
        let result = await super.update(req.data);
        return super.getResponse(result.dataValues.Id);
    }

    public async GetSpecialities(apiReq?: ApiRequest<SpecialityFilter>): Promise<ApiResponse<SpecialityAttributes[]>> {
        super.qoBuilder.include(apiReq.includes, (include) => AppIncludes[include.key]);
        super.qoBuilder.where(apiReq.filters, key => SpecialityFilter[key]);
        let result = await super.findAll(super.qoBuilder.findOptions);
        return super.getResponse(super.getAttributes(result), apiReq.pageContext);
    }

    public async DeleteSpeciality(req: BaseRequest): Promise<ApiResponse<Boolean>> {
        return super.getResponse(await super.markAsDelete(req.id));
    }

    public getModel(): SStatic.Model<SpecialityInstance, SpecialityAttributes> {
        return App.Models.Speciality;
    }
}
