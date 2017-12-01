import { ApiRequest, BaseRequest } from 'mission.common';
import { AppIncludes, BoRegister } from 'mission.core';
import * as SStatic from 'sequelize';

import { AppBaseBo } from '../../../common';
import { SpecialityFilter } from '../common';
import { SpecialityAttributes, SpecialityInstance } from '../model/interface';

@BoRegister
export class SpecialityBo extends AppBaseBo<SpecialityInstance, SpecialityAttributes> {
    public async addSpeciality(req: BaseRequest): Promise<SpecialityInstance> {
        const result = await super.save(req.data);
        // return super.getResponse(result.dataValues.id);
        return result;
    }

    public async updateSpeciality(req: BaseRequest): Promise<number> {
        const result = await super.update(req.data);
        // return super.getResponse(result.dataValues.id);
        return result;
    }

    public async getSpecialities(apiReq: ApiRequest<SpecialityFilter>): Promise<SpecialityInstance[]> {
        super.qoBuilder.include(apiReq.includes, (include) => AppIncludes.Instance[include.key]);
        super.qoBuilder.where(apiReq.filters, (key) => SpecialityFilter[key]);
        const result = await super.findAll(super.qoBuilder.findOptions);
        // return super.getResponse(super.getAttributes(result), apiReq.pageContext);
        return result;
    }

    public async deleteSpeciality(req: BaseRequest): Promise<any> {
        // return super.getResponse(await super.markAsDelete(req.id || 0));
        const result = await super.markAsDelete(req.id || 0);
        return result;
    }

    public getModel(): SStatic.Model<SpecialityInstance, SpecialityAttributes> {
        return super.models.Speciality;
    }
}
