import { BaseBo, IAttributes, Instance, Model } from 'mission.core';
// import * as SStatic from 'sequelize';

export class BO<TModel extends Instance<IAttributes>, TAttributes extends IAttributes> extends BaseBo<TModel, TAttributes> {
    constructor(private model: Model<TModel, TAttributes>) { super(); }
    public get session(): { [key: string]: any, userId: number } {
        throw new Error(`BO is not implementing 'get session' method.`);
    }
    public getModel(): Model<TModel, TAttributes> { return this.model; }
    public getUserId(): number { throw new Error('BO is not implementing getUserId() method.'); }
}
