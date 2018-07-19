import { BaseBo, IAttributes, Instance } from 'mission.core';

export abstract class AppBaseBo<TModel extends Instance<IAttributes>, TAttributes extends IAttributes>
    extends BaseBo<TModel, TAttributes> {
    public get session(): { [key: string]: any, userId: number } {
        throw new Error(`BO is not implementing 'get session' method.`);
    }
    public getUserId(): number {
        throw new Error('getUserId method not implemented');
    }
}
