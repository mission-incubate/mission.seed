import * as SequelizeStatic from 'sequelize';
import { DataTypes, Sequelize } from 'sequelize';
import * as i from './interface';

export default function (sequelize: Sequelize, DataTypes: DataTypes):
    SequelizeStatic.Model<i.OrganizationInstance, i.OrganizationAttributes> {
    let Organization = sequelize.define<i.OrganizationInstance, i.OrganizationAttributes>('Organization', {
        Id: { type: DataTypes.BIGINT, field: 'OrganizationId', primaryKey: true, autoIncrement: true },
        OrgCode: { type: DataTypes.STRING, field: 'OrgCode' },
        OrgName: { type: DataTypes.STRING, field: 'OrgName' },
        AddressLine1: { type: DataTypes.STRING, field: 'AddressLine1' },
        AddressLine2: { type: DataTypes.STRING, field: 'AddressLine2' },
        PinCode: { type: DataTypes.STRING, field: 'PinCode' },
        Area: { type: DataTypes.STRING, field: 'Area' },
        City: { type: DataTypes.STRING, field: 'City' },
        State: { type: DataTypes.STRING, field: 'State' },
        Country: { type: DataTypes.STRING, field: 'Country' },
        OrgStatusId: { type: DataTypes.INTEGER, field: 'OrgStatusId' },
        ActiveFrom: { type: DataTypes.DATE, field: 'ActiveFrom' },
        ActiveTo: { type: DataTypes.DATE, field: 'ActiveTo' },
        IsBeds: { type: DataTypes.INTEGER, field: 'IsBeds' },
        IsDoctors: { type: DataTypes.INTEGER, field: 'IsDoctors' },
        IsFacility: { type: DataTypes.INTEGER, field: 'IsFacility' },
        BedsCount: { type: DataTypes.INTEGER, field: 'BedsCount' },
        DoctorsCount: { type: DataTypes.INTEGER, field: 'DoctorsCount' },
        FacilityCount: { type: DataTypes.INTEGER, field: 'FacilityCount' },
        LicenseActiveFrom: { type: DataTypes.DATE, field: 'LicenseActiveFrom' },
        LicenseActiveTo: { type: DataTypes.DATE, field: 'LicenseActiveTo' },
        OrgLogo: { type: DataTypes.STRING.BINARY, field: 'OrgLogo' },
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
            tableName: 'Organizations',
            createdAt: 'CreatedAt',
            updatedAt: 'UpdatedAt',
            freezeTableName: true,
            defaultScope: {
                where: {
                    Status: 1
                }
            }
        });

    return Organization;
}
