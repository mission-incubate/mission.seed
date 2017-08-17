import * as SequelizeStatic from 'sequelize';
import { DataTypes, Sequelize } from 'sequelize';
import * as i from './interface';

export default function (sequelize: Sequelize, dataTypes: DataTypes):
    SequelizeStatic.Model<i.FacilityInstance, i.FacilityAttributes> {
    const Facility = sequelize.define<i.FacilityInstance, i.FacilityAttributes>('Facility', {
        Id: { type: dataTypes.BIGINT, field: 'FacilityId', primaryKey: true, autoIncrement: true },
        OrganizationId: { type: dataTypes.BIGINT, field: 'OrganizationId' },
        FacilityCode: { type: dataTypes.STRING, field: 'FacilityCode' },
        FacilityName: { type: dataTypes.STRING, field: 'FacilityName' },
        FacilityTypeId: { type: dataTypes.INTEGER, field: 'FacilityTypeId' },
        Description: { type: dataTypes.STRING, field: 'Description' },
        AddressLine1: { type: dataTypes.STRING, field: 'AddressLine1' },
        AddressLine2: { type: dataTypes.STRING, field: 'AddressLine2' },
        PinCode: { type: dataTypes.STRING, field: 'PinCode' },
        Area: { type: dataTypes.STRING, field: 'Area' },
        City: { type: dataTypes.STRING, field: 'City' },
        State: { type: dataTypes.STRING, field: 'State' },
        Country: { type: dataTypes.STRING, field: 'Country' },
        LandLine: { type: dataTypes.STRING, field: 'LandLine' },
        FaxNo: { type: dataTypes.STRING, field: 'FaxNo' },
        Email: { type: dataTypes.STRING, field: 'Email' },
        LanguageId: { type: dataTypes.INTEGER, field: 'LanguageId' },
        ActiveFrom: { type: dataTypes.DATE, field: 'ActiveFrom' },
        ActiveTo: { type: dataTypes.DATE, field: 'ActiveTo' },
        IsGstRegistered: { type: dataTypes.BOOLEAN, field: 'IsGstRegistered' },
        GstNumber: { type: dataTypes.STRING, field: 'GstNumber' },
        RegistrationNo: { type: dataTypes.STRING, field: 'RegistrationNo' },
        TaxActiveFrom: { type: dataTypes.DATE, field: 'TaxActiveFrom' },
        TaxActiveTo: { type: dataTypes.DATE, field: 'TaxActiveTo' },
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
            tableName: 'Facilities',
            createdAt: 'CreatedAt',
            updatedAt: 'UpdatedAt',
            freezeTableName: true,
            defaultScope: {
                where: {
                    Status: 1,
                },
            },
        });

    (Facility as any).associate = (models: Models) => {
        return;
    };

    return Facility;
}
