import { ApiRequest, AppIncludes, BoRegister } from 'mission.core';

import { UserFilter } from '../common';
import { UserBoGen } from './user.bo.gen';

@BoRegister
export class UserBo extends UserBoGen {
    public async getParams(apiReq: ApiRequest<UserFilter>): Promise<any> {
        super.qoBuilder.include(apiReq.includes, (include) => AppIncludes.Instance[include.key]);
        super.qoBuilder.where(apiReq.filters, (key) => UserFilter[key]);
        return super.qoBuilder.findOptions;
    }
}
