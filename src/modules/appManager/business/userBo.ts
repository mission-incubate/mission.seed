import * as SStatic from 'sequelize';
import { BaseBo, BoRegister, AppIncludes } from 'mission.core';
import { BaseRequest, ApiRequest, ApiResponse } from 'mission.common';
import { UserInstance, UserAttributes } from '../Model/Interface';
import { UserFilter } from '../Common';

@BoRegister
export class UserBo extends BaseBo<UserInstance, UserAttributes> {
    public async AddUser(req: BaseRequest): Promise<ApiResponse<number>> {
        let result = await super.Save(req.data);
        return super.GetResponse(result.dataValues.Id);
    }

    public async UpdateUser(req: BaseRequest): Promise<ApiResponse<number>> {
        let result = await super.Update(req.data);
        return super.GetResponse(result.dataValues.Id);
    }

    public async GetUsers(apiReq?: ApiRequest<UserFilter>): Promise<ApiResponse<UserAttributes[]>> {
        super.QOBuilder.include(apiReq.includes, (include) => AppIncludes[include.key]);
        super.QOBuilder.where(apiReq.filters, key => UserFilter[key]);
        let result = await super.FindAll(super.QOBuilder.findOptions);
        return super.GetResponse(super.GetAttributes(result), apiReq.pageContext);
    }

    public async DeleteUser(req: BaseRequest): Promise<ApiResponse<Boolean>> {
        return super.GetResponse(await super.MarkAsDelete(req.id));
    }

    public GetModel(): SStatic.Model<UserInstance, UserAttributes> {
        return App.Models.User;
    }

    public async GetParams(apiReq?: ApiRequest<UserFilter>): Promise<any> {
        super.QOBuilder.include(apiReq.includes, (include) => AppIncludes[include.key]);
        super.QOBuilder.where(apiReq.filters, key => UserFilter[key]);
        return super.QOBuilder.findOptions;
    }
}
