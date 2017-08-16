import * as SStatic from 'sequelize';
import { BaseBo, BoRegister, AppIncludes } from 'mission.core';
import { BaseRequest, ApiRequest, ApiResponse } from 'mission.common';
import { UserInstance, UserAttributes } from '../model/interface';
import { UserFilter } from '../common';
import { AppBaseBo } from '../../../common';

@BoRegister
export class UserBo extends AppBaseBo<UserInstance, UserAttributes> {
    public async AddUser(req: BaseRequest): Promise<ApiResponse<number>> {
        let result = await super.save(req.data);
        return super.getResponse(result.dataValues.id);
    }

    public async UpdateUser(req: BaseRequest): Promise<ApiResponse<number>> {
        let result = await super.update(req.data);
        return super.getResponse(result.dataValues.id);
    }

    public async GetUsers(apiReq: ApiRequest<UserFilter>): Promise<ApiResponse<UserAttributes[]>> {
        const qob = super.qoBuilder;
        qob.include(apiReq.includes, (include) => AppIncludes.Instance[include.key]);
        qob.where(apiReq.filters, key => UserFilter[key]);
        let result = await super.findAll(qob.findOptions);
        return super.getResponse(super.getAttributes(result), apiReq.pageContext);
    }

    public async DeleteUser(req: BaseRequest): Promise<ApiResponse<any>> {
        return super.getResponse(await super.markAsDelete(req.id || 0));
    }

    public getModel(): SStatic.Model<UserInstance, UserAttributes> {
        return super.models.User;
    }

    public async GetParams(apiReq: ApiRequest<UserFilter>): Promise<any> {
        super.qoBuilder.include(apiReq.includes, (include) => AppIncludes.Instance[include.key]);
        super.qoBuilder.where(apiReq.filters, key => UserFilter[key]);
        return super.qoBuilder.findOptions;
    }
}
