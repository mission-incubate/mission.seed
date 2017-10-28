import * as SequelizeStatic from 'sequelize';
import { DataTypes, Sequelize } from 'sequelize';
import * as i from './interface';

export default function(sequelize: Sequelize, dataTypes: DataTypes):
    SequelizeStatic.Model<i.SpecialityInstance, i.SpecialityAttributes> {
    let Speciality = sequelize.define<i.SpecialityInstance, i.SpecialityAttributes>('Speciality', {
        Id: { type: dataTypes.BIGINT, field: 'SpecialityId', primaryKey: true, autoIncrement: true },
        ParentSpecialityId: { type: dataTypes.BIGINT, field: 'ParentSpecialityId' },
        SpecialityCode: { type: dataTypes.STRING, field: 'SpecialityCode' },
        SpecialityName: { type: dataTypes.STRING, field: 'SpecialityName' },
        SpecialityTypeId: { type: dataTypes.INTEGER, field: 'SpecialityTypeId' },
        Description: { type: dataTypes.STRING, field: 'Description' },
        FacilityId: { type: dataTypes.BIGINT, field: 'FacilityId' },
        IsActive: { type: dataTypes.BOOLEAN, field: 'IsActive' },
        Status: { type: dataTypes.INTEGER, field: 'Status' },
        Rev: { type: dataTypes.INTEGER, field: 'Rev' },
        CreatedBy: { type: dataTypes.INTEGER, field: 'CreatedBy' },
        CreatedAt: { type: dataTypes.DATE, field: 'CreatedAt' },
        UpdatedBy: { type: dataTypes.INTEGER, field: 'UpdatedBy' },
        UpdatedAt: { type: dataTypes.DATE, field: 'UpdatedAt' },
    },
        {
            indexes: [],
            classMethods: {},
            timestamps: true,
            tableName: 'Specialities',
            createdAt: 'CreatedAt',
            updatedAt: 'UpdatedAt',
            freezeTableName: true,
            defaultScope: {
                where: {
                    Status: 1,
                },
            },
        });

    (Speciality as any).associate =  (models: Models) => {
        return;
    };

    return Speciality;
}
