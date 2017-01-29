import * as SStatic from 'sequelize';
import { BaseBo, BoRegister, AppIncludes } from 'mission.core';
import { BaseRequest, ApiRequest, ApiResponse } from 'mission.common';
import { DepartmentInstance, DepartmentAttributes } from '../Model/Interface';
import { DepartmentFilter } from '../Common';

@BoRegister
export class DepartmentBo extends BaseBo<DepartmentInstance, DepartmentAttributes> {
    public async AddDepartment(req: BaseRequest): Promise<ApiResponse<number>> {
        let result = await super.Save(req.data);
        return super.GetResponse(result.dataValues.Id);
    }

    public async UpdateDepartment(req: BaseRequest): Promise<ApiResponse<number>> {
        let result = await super.Update(req.data);
        return super.GetResponse(result.dataValues.Id);
    }

    public async GetDepartments(apiReq?: ApiRequest<DepartmentFilter>): Promise<ApiResponse<DepartmentAttributes[]>> {
        super.QOBuilder.include(apiReq.includes, (include) => AppIncludes[include.key]);
        super.QOBuilder.where(apiReq.filters, key => DepartmentFilter[key]);
        let result = await super.FindAll(super.QOBuilder.findOptions);
        return super.GetResponse(super.GetAttributes(result), apiReq.pageContext);
    }

    public async DeleteDepartment(req: BaseRequest): Promise<ApiResponse<Boolean>> {
        return super.GetResponse(await super.MarkAsDelete(req.id));
    }

    public GetModel(): SStatic.Model<DepartmentInstance, DepartmentAttributes> {
        return App.Models.Department;
    }
}
