import * as SStatic from 'sequelize';
import { BaseBo, BoRegister, AppIncludes } from 'mission.core';
import { BaseRequest, ApiRequest, ApiResponse } from 'mission.common';
import { DepartmentInstance, DepartmentAttributes } from '../model/interface';
import { DepartmentFilter } from '../common';

@BoRegister
export class DepartmentBo extends BaseBo<DepartmentInstance, DepartmentAttributes> {
    public async AddDepartment(req: BaseRequest): Promise<ApiResponse<number>> {
        let result = await super.save(req.data);
        return super.getResponse(result.dataValues.Id);
    }

    public async UpdateDepartment(req: BaseRequest): Promise<ApiResponse<number>> {
        let result = await super.update(req.data);
        return super.getResponse(result.dataValues.Id);
    }

    public async GetDepartments(apiReq?: ApiRequest<DepartmentFilter>): Promise<ApiResponse<DepartmentAttributes[]>> {
        super.qoBuilder.include(apiReq.includes, (include) => AppIncludes[include.key]);
        super.qoBuilder.where(apiReq.filters, key => DepartmentFilter[key]);
        let result = await super.findAll(super.qoBuilder.findOptions);
        return super.getResponse(super.getAttributes(result), apiReq.pageContext);
    }

    public async DeleteDepartment(req: BaseRequest): Promise<ApiResponse<Boolean>> {
        return super.getResponse(await super.markAsDelete(req.id));
    }

    public getModel(): SStatic.Model<DepartmentInstance, DepartmentAttributes> {
        return App.Models.Department;
    }
}
