import * as SStatic from 'sequelize';
import { BaseBo, BoRegister, AppIncludes } from 'mission.core';
import { BaseRequest, ApiRequest, ApiResponse } from 'mission.common';
import { DepartmentInstance, DepartmentAttributes } from '../model/interface';
import { DepartmentFilter } from '../common';
import { AppBaseBo } from '../../../common';

@BoRegister
export class DepartmentBo extends AppBaseBo<DepartmentInstance, DepartmentAttributes> {
    public async AddDepartment(req: BaseRequest): Promise<ApiResponse<number>> {
        let result = await super.save(req.data);
        return super.getResponse(result.dataValues.id);
    }

    public async UpdateDepartment(req: BaseRequest): Promise<ApiResponse<number>> {
        let result = await super.update(req.data);
        return super.getResponse(result.dataValues.id);
    }

    public async GetDepartments(apiReq: ApiRequest<DepartmentFilter>): Promise<ApiResponse<DepartmentAttributes[]>> {
        super.qoBuilder.include(apiReq.includes, (include) => AppIncludes.Instance[include.key]);
        super.qoBuilder.where(apiReq.filters, key => DepartmentFilter[key]);
        let result = await super.findAll(super.qoBuilder.findOptions);
        return super.getResponse(super.getAttributes(result), apiReq.pageContext);
    }

    public async DeleteDepartment(req: BaseRequest): Promise<ApiResponse<any>> {
        if (!req.id) {
            throw { name: 'NOID', message: 'Invalid Id' };
        }
        return super.getResponse(await super.markAsDelete(req.id));
    }

    public getModel(): SStatic.Model<DepartmentInstance, DepartmentAttributes> {
        return super.models.Department;
    }
}
