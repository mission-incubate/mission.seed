import { _, BaseBo, Request, IAttributes, Instance, Model } from 'mission.core';

export class MapBo<TModel extends Instance<IAttributes>, TAttributes extends IAttributes> extends BaseBo<TModel, TAttributes> {
    constructor(private model: Model<TModel, TAttributes>, private pivoteKey: string, private toBeCompare: string, req?: Request) {
        super(req);
    }
    public get session(): any {
        throw new Error(`BO is not implementing 'get session' method.`);
    }
    public async manage(entities: TAttributes[]): Promise<boolean> {
        const response = entities && entities.length > 0;
        if (response) {
            const uEntities = _(entities);
            const groups = uEntities.groupBy(this.pivoteKey).map().value();
            if (groups.length > 1) {
                throw new Error(`More than one group of ${this.pivoteKey} cannot mange at a time'`);
            }
            const pivoteValue = (uEntities.first() as any)[this.pivoteKey];
            const source: TModel[] = await super.findAll({ where: { [this.pivoteKey]: pivoteValue } });
            const uSource = _(source);

            const uSourceIdMap = uSource.map(this.toBeCompare);
            const uEntityIdMap = uEntities.map(this.toBeCompare);

            const sourceIds = uSourceIdMap.value();
            const entityIds = uEntityIdMap.value();

            // Delete
            const toBeDeleteIds = uSourceIdMap.difference(entityIds).value();
            if (toBeDeleteIds.length > 0) {
                const cnt = await super.items.destroy({ where: { [this.pivoteKey]: pivoteValue, [this.toBeCompare]: toBeDeleteIds } });
                if (cnt !== toBeDeleteIds.length) {
                    throw new Error('MapBO - Manage Action failed due to Deleted record count mismatch');
                }
            }
            // Update
            const toBeUpdateIds = uSourceIdMap.intersection(entityIds).value();
            if (toBeUpdateIds.length > 0) {
                let toBeUpdate: TAttributes[] = [];
                toBeUpdate = uEntities.filter((x) => _.includes(toBeUpdateIds, (x as any)[this.pivoteKey])).value();
                const promises: any[] = []; // TODO: It is array of Promise<any>
                toBeUpdate.forEach((item) => {
                    promises.push(super.items.update(item, {
                        where: { [this.pivoteKey]: pivoteValue, [this.toBeCompare]: toBeDeleteIds },
                    }));
                });
                await Promise.all(promises); // TODO: need to handle response
            }
            // Add
            let tobeAdd: TAttributes[] = [];
            const toBeAddIds = uEntityIdMap.difference(sourceIds).value();
            tobeAdd = _.filter(entities, (x: any) => _.includes(toBeAddIds, x[this.toBeCompare]));
            await super.items.bulkCreate(tobeAdd);
        }
        return response;
    }
    public getModel(): Model<TModel, TAttributes> {
        return this.model;
    }
    public getUserId(): number { throw new Error('MapBo is not implementing getUserId() methid.'); }
}
