import * as SequelizeStatic from 'sequelize';
import { DataTypes, Sequelize } from 'sequelize';
import * as i from './interface';

export default function (sequelize: Sequelize, dataTypes: DataTypes):
    SequelizeStatic.Model<i.OrganizationInstance, i.OrganizationAttributes> {
    const Organization = sequelize.define<i.OrganizationInstance, i.OrganizationAttributes>('Organization', {
        Id: { type: dataTypes.BIGINT, field: 'OrganizationId', primaryKey: true, autoIncrement: true },
        OrgCode: { type: dataTypes.STRING, field: 'OrgCode' },
        OrgName: { type: dataTypes.STRING, field: 'OrgName' },
        AddressLine1: { type: dataTypes.STRING, field: 'AddressLine1' },
        AddressLine2: { type: dataTypes.STRING, field: 'AddressLine2' },
        PinCode: { type: dataTypes.STRING, field: 'PinCode' },
        Area: { type: dataTypes.STRING, field: 'Area' },
        City: { type: dataTypes.STRING, field: 'City' },
        State: { type: dataTypes.STRING, field: 'State' },
        Country: { type: dataTypes.STRING, field: 'Country' },
        OrgStatusId: { type: dataTypes.INTEGER, field: 'OrgStatusId' },
        ActiveFrom: { type: dataTypes.DATE, field: 'ActiveFrom' },
        ActiveTo: { type: dataTypes.DATE, field: 'ActiveTo' },
        IsBeds: { type: dataTypes.INTEGER, field: 'IsBeds' },
        IsDoctors: { type: dataTypes.INTEGER, field: 'IsDoctors' },
        IsFacility: { type: dataTypes.INTEGER, field: 'IsFacility' },
        BedsCount: { type: dataTypes.INTEGER, field: 'BedsCount' },
        DoctorsCount: { type: dataTypes.INTEGER, field: 'DoctorsCount' },
        FacilityCount: { type: dataTypes.INTEGER, field: 'FacilityCount' },
        LicenseActiveFrom: { type: dataTypes.DATE, field: 'LicenseActiveFrom' },
        LicenseActiveTo: { type: dataTypes.DATE, field: 'LicenseActiveTo' },
        OrgLogo: { type: dataTypes.STRING.BINARY, field: 'OrgLogo' },
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
            tableName: 'Organizations',
            createdAt: 'CreatedAt',
            updatedAt: 'UpdatedAt',
            freezeTableName: true,
            defaultScope: {
                where: {
                    Status: 1,
                },
            },
        });
    (Organization as any).associate = (models: Models) => {
        return;
    };
    return Organization;
}
