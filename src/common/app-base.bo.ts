import { BaseBo, IAttributes, Instance } from 'mission.core';

export abstract class AppBaseBo<TModel extends Instance<IAttributes>, TAttributes extends IAttributes>
    extends BaseBo<TModel, TAttributes> {
    public getUserId(): number {
        throw new Error('getUserId method not implemented');
    }
}
