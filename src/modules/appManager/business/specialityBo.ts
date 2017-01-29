import * as SStatic from 'sequelize';
import { BaseBo, BoRegister, AppIncludes } from 'mission.core';
import { BaseRequest, ApiRequest, ApiResponse } from 'mission.common';
import { SpecialityInstance, SpecialityAttributes } from '../Model/Interface';
import { SpecialityFilter } from '../Common';

@BoRegister
export class SpecialityBo extends BaseBo<SpecialityInstance, SpecialityAttributes> {
    public async AddSpeciality(req: BaseRequest): Promise<ApiResponse<number>> {
        let result = await super.Save(req.data);
        return super.GetResponse(result.dataValues.Id);
    }

    public async UpdateSpeciality(req: BaseRequest): Promise<ApiResponse<number>> {
        let result = await super.Update(req.data);
        return super.GetResponse(result.dataValues.Id);
    }

    public async GetSpecialities(apiReq?: ApiRequest<SpecialityFilter>): Promise<ApiResponse<SpecialityAttributes[]>> {
        super.QOBuilder.include(apiReq.includes, (include) => AppIncludes[include.key]);
        super.QOBuilder.where(apiReq.filters, key => SpecialityFilter[key]);
        let result = await super.FindAll(super.QOBuilder.findOptions);
        return super.GetResponse(super.GetAttributes(result), apiReq.pageContext);
    }

    public async DeleteSpeciality(req: BaseRequest): Promise<ApiResponse<Boolean>> {
        return super.GetResponse(await super.MarkAsDelete(req.id));
    }

    public GetModel(): SStatic.Model<SpecialityInstance, SpecialityAttributes> {
        return App.Models.Speciality;
    }
}
