import { ApiRequest, ApiResponse, BaseRequest } from 'mission.common';
import { AppIncludes, BaseBo, BoRegister } from 'mission.core';
import * as SStatic from 'sequelize';

import { AppBaseBo } from '../../../common';
import { SpecialityFilter } from '../common';
import { SpecialityAttributes, SpecialityInstance } from '../model/interface';

@BoRegister
export class SpecialityBo extends AppBaseBo<SpecialityInstance, SpecialityAttributes> {
    public async addSpeciality(req: BaseRequest): Promise<ApiResponse<number>> {
        const result = await super.save(req.data);
        return super.getResponse(result.dataValues.id);
    }

    public async updateSpeciality(req: BaseRequest): Promise<ApiResponse<number>> {
        const result = await super.update(req.data);
        return super.getResponse(result.dataValues.id);
    }

    public async getSpecialities(apiReq: ApiRequest<SpecialityFilter>): Promise<ApiResponse<SpecialityAttributes[]>> {
        super.qoBuilder.include(apiReq.includes, (include) => AppIncludes.Instance[include.key]);
        super.qoBuilder.where(apiReq.filters, (key) => SpecialityFilter[key]);
        const result = await super.findAll(super.qoBuilder.findOptions);
        return super.getResponse(super.getAttributes(result), apiReq.pageContext);
    }

    public async deleteSpeciality(req: BaseRequest): Promise<ApiResponse<any>> {
        return super.getResponse(await super.markAsDelete(req.id || 0));
    }

    public getModel(): SStatic.Model<SpecialityInstance, SpecialityAttributes> {
        return super.models.Speciality;
    }
}
