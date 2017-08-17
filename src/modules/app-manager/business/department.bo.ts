import { ApiRequest, ApiResponse, BaseRequest } from 'mission.common';
import { AppIncludes, BaseBo, BoRegister } from 'mission.core';
import * as SStatic from 'sequelize';

import { AppBaseBo } from '../../../common';
import { DepartmentFilter } from '../common';
import { DepartmentAttributes, DepartmentInstance } from '../model/interface';

@BoRegister
export class DepartmentBo extends AppBaseBo<DepartmentInstance, DepartmentAttributes> {
    public async addDepartment(req: BaseRequest): Promise<ApiResponse<number>> {
        const result = await super.save(req.data);
        return super.getResponse(result.dataValues.id);
    }

    public async updateDepartment(req: BaseRequest): Promise<ApiResponse<number>> {
        const result = await super.update(req.data);
        return super.getResponse(result.dataValues.id);
    }

    public async getDepartments(apiReq: ApiRequest<DepartmentFilter>): Promise<ApiResponse<DepartmentAttributes[]>> {
        super.qoBuilder.include(apiReq.includes, (include) => AppIncludes.Instance[include.key]);
        super.qoBuilder.where(apiReq.filters, (key) => DepartmentFilter[key]);
        const result = await super.findAll(super.qoBuilder.findOptions);
        return super.getResponse(super.getAttributes(result), apiReq.pageContext);
    }

    public async deleteDepartment(req: BaseRequest): Promise<ApiResponse<any>> {
        if (!req.id) {
            throw { name: 'NOID', message: 'Invalid Id' };
        }
        return super.getResponse(await super.markAsDelete(req.id));
    }

    public getModel(): SStatic.Model<DepartmentInstance, DepartmentAttributes> {
        return super.models.Department;
    }
}
