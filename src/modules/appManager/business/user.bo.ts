import * as SStatic from 'sequelize';
import { BaseBo, BoRegister } from 'mission.core';
import { BaseRequest, ApiRequest, ApiResponse } from 'mission.common';
import { UserInstance, UserAttributes } from '../model/interface';
import { UserFilter } from '../common';

@BoRegister
export class UserBo extends BaseBo<UserInstance, UserAttributes> {
    public async AddUser(req: BaseRequest): Promise<ApiResponse<number>> {
        let result = await super.save(req.data);
        return super.getResponse(result.dataValues.Id);
    }

    public async UpdateUser(req: BaseRequest): Promise<ApiResponse<number>> {
        let result = await super.update(req.data);
        return super.getResponse(result.dataValues.Id);
    }

    public async GetUsers(apiReq?: ApiRequest<UserFilter>): Promise<ApiResponse<UserAttributes[]>> {
        super.qoBuilder.include(apiReq.includes, (include) => App.Includes[include.key]);
        super.qoBuilder.where(apiReq.filters, key => UserFilter[key]);
        let result = await super.findAll(super.qoBuilder.findOptions);
        return super.getResponse(super.getAttributes(result), apiReq.pageContext);
    }

    public async DeleteUser(req: BaseRequest): Promise<ApiResponse<Boolean>> {
        return super.getResponse(await super.markAsDelete(req.id));
    }

    public getModel(): SStatic.Model<UserInstance, UserAttributes> {
        return App.Models.User;
    }

    public async GetParams(apiReq?: ApiRequest<UserFilter>): Promise<any> {
        super.qoBuilder.include(apiReq.includes, (include) => App.Includes[include.key]);
        super.qoBuilder.where(apiReq.filters, key => UserFilter[key]);
        return super.qoBuilder.findOptions;
    }
}
