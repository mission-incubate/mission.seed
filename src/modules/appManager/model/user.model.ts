import * as SequelizeStatic from 'sequelize';
import { DataTypes, Sequelize } from 'sequelize';
import * as i from './interface';

export default function (sequelize: Sequelize, DataTypes: DataTypes):
    SequelizeStatic.Model<i.UserInstance, i.UserAttributes> {
    let User = sequelize.define<i.UserInstance, i.UserAttributes>('User', {
        Id: { type: DataTypes.BIGINT, field: 'UserId', primaryKey: true, autoIncrement: true },
        Title: { type: DataTypes.STRING, field: 'Title' },
        FirstName: { type: DataTypes.STRING, field: 'FirstName' },
        MiddleName: { type: DataTypes.STRING, field: 'MiddleName' },
        LastName: { type: DataTypes.STRING, field: 'LastName' },
        Age: { type: DataTypes.INTEGER, field: 'Age' },
        DOB: { type: DataTypes.DATE, field: 'DOB' },
        PreferredLanguageId: { type: DataTypes.INTEGER, field: 'PreferredLanguageId' },
        Qualification: { type: DataTypes.STRING, field: 'Qualification' },
        NationalityId: { type: DataTypes.INTEGER, field: 'NationalityId' },
        CategoryId: { type: DataTypes.INTEGER, field: 'CategoryId' },
        DoctorShareClassId: { type: DataTypes.INTEGER, field: 'DoctorShareClassId' },
        ActionFrom: { type: DataTypes.DATE, field: 'ActionFrom' },
        ActionTo: { type: DataTypes.DATE, field: 'ActionTo' },
        AddressLine1: { type: DataTypes.STRING, field: 'AddressLine1' },
        AddressLine2: { type: DataTypes.STRING, field: 'AddressLine2' },
        Pincode: { type: DataTypes.STRING, field: 'Pincode' },
        Area: { type: DataTypes.STRING, field: 'Area' },
        City: { type: DataTypes.STRING, field: 'City' },
        State: { type: DataTypes.STRING, field: 'State' },
        Country: { type: DataTypes.STRING, field: 'Country' },
        LandLine: { type: DataTypes.STRING, field: 'LandLine' },
        Mobile: { type: DataTypes.STRING, field: 'Mobile' },
        Email: { type: DataTypes.STRING, field: 'Email' },
        LicenseNo: { type: DataTypes.STRING, field: 'LicenseNo' },
        LicenseIssueDate: { type: DataTypes.DATE, field: 'LicenseIssueDate' },
        LicenseExpiryDate: { type: DataTypes.DATE, field: 'LicenseExpiryDate' },
        IsAdmittingConsultant: { type: DataTypes.BOOLEAN, field: 'IsAdmittingConsultant' },
        IsVisistingConsultant: { type: DataTypes.BOOLEAN, field: 'IsVisistingConsultant' },
        IsSurgeon: { type: DataTypes.BOOLEAN, field: 'IsSurgeon' },
        OrgId: { type: DataTypes.BIGINT, field: 'OrgId' },
        FacilityId: { type: DataTypes.BIGINT, field: 'FacilityId' },
        DeptId: { type: DataTypes.BIGINT, field: 'DeptId' },
        SubDeptId: { type: DataTypes.BIGINT, field: 'SubDeptId' },
        UserGroupId: { type: DataTypes.BIGINT, field: 'UserGroupId' },
        ClinicalRoleId: { type: DataTypes.BIGINT, field: 'ClinicalRoleId' },
        UserTypeId: { type: DataTypes.BIGINT, field: 'UserTypeId' },
        SpecialityId: { type: DataTypes.BIGINT, field: 'SpecialityId' },
        Image: { type: DataTypes.STRING.BINARY, field: 'Image' },
        Signature: { type: DataTypes.STRING.BINARY, field: 'Signature' },
        UserName: { type: DataTypes.STRING, field: 'UserName' },
        Password: { type: DataTypes.STRING, field: 'Password' },
        TabletAccess: { type: DataTypes.BOOLEAN, field: 'TabletAccess' },
        MobileAccess: { type: DataTypes.BOOLEAN, field: 'MobileAccess' },
        LoginPermission: { type: DataTypes.BOOLEAN, field: 'LoginPermission' },
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
                    User.belongsTo(models.Organization);
                    User.belongsTo(models.Facility);
                    User.belongsTo(models.Department);
                    User.belongsTo(models.Department);
                    User.belongsTo(models.Speciality);
                }
            },
            timestamps: true,
            tableName: 'Users',
            createdAt: 'CreatedAt',
            updatedAt: 'UpdatedAt',
            freezeTableName: true,
            defaultScope: {
                where: {
                    Status: 1
                }
            }
        });

    return User;
}
