import { ApiRequest, BaseRequest } from 'mission.common';
import { AppIncludes } from 'mission.core';
import * as SStatic from 'sequelize';

import { AppBaseBo } from '@mission.seed/common';
import { UserFilter } from '../common';
import { UserAttributes, UserInstance } from '../model/interface';

export class UserBoGen extends AppBaseBo<UserInstance, UserAttributes> {
    public async addUser(req: BaseRequest): Promise<UserInstance> {
        const result = await super.save(req.data);
        return result;
    }

    public async updateUser(req: BaseRequest): Promise<number> {
        const result = await super.update(req.data);
        return result;
    }

    public async getUsers(apiReq: ApiRequest<UserFilter>): Promise<UserInstance[]> {
        const qob = super.qoBuilder;
        qob.include(apiReq.includes, (include) => AppIncludes.Instance[include.key]);
        qob.where(apiReq.filters, (key) => UserFilter[key]);
        const result = await super.findAll(qob.findOptions);
        return result;
    }

    public async deleteUser(req: BaseRequest): Promise<any> {
        const result = await super.markAsDelete(req.id || 0);
        return result;
    }

    public getModel(): SStatic.Model<UserInstance, UserAttributes> {
        return super.models.User;
    }

    public async getParams(apiReq: ApiRequest<UserFilter>): Promise<any> {
        super.qoBuilder.include(apiReq.includes, (include) => AppIncludes.Instance[include.key]);
        super.qoBuilder.where(apiReq.filters, (key) => UserFilter[key]);
        return super.qoBuilder.findOptions;
    }
}
