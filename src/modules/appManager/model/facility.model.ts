import * as SequelizeStatic from 'sequelize';
import { DataTypes, Sequelize } from 'sequelize';
import * as i from './interface';

export default function (sequelize: Sequelize, DataTypes: DataTypes):
    SequelizeStatic.Model<i.FacilityInstance, i.FacilityAttributes> {
    let Facility = sequelize.define<i.FacilityInstance, i.FacilityAttributes>('Facility', {
        Id: { type: DataTypes.BIGINT, field: 'FacilityId', primaryKey: true, autoIncrement: true },
        OrganizationId: { type: DataTypes.BIGINT, field: 'OrganizationId' },
        FacilityCode: { type: DataTypes.STRING, field: 'FacilityCode' },
        FacilityName: { type: DataTypes.STRING, field: 'FacilityName' },
        FacilityTypeId: { type: DataTypes.INTEGER, field: 'FacilityTypeId' },
        Description: { type: DataTypes.STRING, field: 'Description' },
        AddressLine1: { type: DataTypes.STRING, field: 'AddressLine1' },
        AddressLine2: { type: DataTypes.STRING, field: 'AddressLine2' },
        PinCode: { type: DataTypes.STRING, field: 'PinCode' },
        Area: { type: DataTypes.STRING, field: 'Area' },
        City: { type: DataTypes.STRING, field: 'City' },
        State: { type: DataTypes.STRING, field: 'State' },
        Country: { type: DataTypes.STRING, field: 'Country' },
        LandLine: { type: DataTypes.STRING, field: 'LandLine' },
        FaxNo: { type: DataTypes.STRING, field: 'FaxNo' },
        Email: { type: DataTypes.STRING, field: 'Email' },
        LanguageId: { type: DataTypes.INTEGER, field: 'LanguageId' },
        ActiveFrom: { type: DataTypes.DATE, field: 'ActiveFrom' },
        ActiveTo: { type: DataTypes.DATE, field: 'ActiveTo' },
        IsGstRegistered: { type: DataTypes.BOOLEAN, field: 'IsGstRegistered' },
        GstNumber: { type: DataTypes.STRING, field: 'GstNumber' },
        RegistrationNo: { type: DataTypes.STRING, field: 'RegistrationNo' },
        TaxActiveFrom: { type: DataTypes.DATE, field: 'TaxActiveFrom' },
        TaxActiveTo: { type: DataTypes.DATE, field: 'TaxActiveTo' },
        Status: { type: DataTypes.INTEGER, field: 'Status' },
        Rev: { type: DataTypes.INTEGER, field: 'Rev' },
        CreatedBy: { type: DataTypes.INTEGER, field: 'CreatedBy' },
        CreatedAt: { type: DataTypes.DATE, field: 'CreatedAt' },
        UpdatedBy: { type: DataTypes.INTEGER, field: 'UpdatedBy' },
        UpdatedAt: { type: DataTypes.DATE, field: 'UpdatedAt' },
    },
        {
            indexes: [],
            classMethods: {
                associate: (models: Models): void => {
                    return;
                }
            },
            timestamps: true,
            tableName: 'Facilities',
            createdAt: 'CreatedAt',
            updatedAt: 'UpdatedAt',
            freezeTableName: true,
            defaultScope: {
                where: {
                    Status: 1
                }
            }
        });

    return Facility;
}
