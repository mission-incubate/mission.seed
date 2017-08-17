import * as SequelizeStatic from 'sequelize';
import { DataTypes, Sequelize } from 'sequelize';
import * as i from './interface';

export default function(sequelize: Sequelize, dataTypes: DataTypes):
    SequelizeStatic.Model<i.UserInstance, i.UserAttributes> {
    const User = sequelize.define<i.UserInstance, i.UserAttributes>('User', {
        Id: { type: dataTypes.BIGINT, field: 'UserId', primaryKey: true, autoIncrement: true },
        TitleId: { type: dataTypes.BIGINT, field: 'TitleId' },
        FirstName: { type: dataTypes.STRING, field: 'FirstName' },
        MiddleName: { type: dataTypes.STRING, field: 'MiddleName' },
        LastName: { type: dataTypes.STRING, field: 'LastName' },
        Age: { type: dataTypes.INTEGER, field: 'Age' },
        DOB: { type: dataTypes.DATE, field: 'DOB' },
        PreferredLanguageId: { type: dataTypes.INTEGER, field: 'PreferredLanguageId' },
        Qualification: { type: dataTypes.STRING, field: 'Qualification' },
        NationalityId: { type: dataTypes.INTEGER, field: 'NationalityId' },
        CategoryId: { type: dataTypes.INTEGER, field: 'CategoryId' },
        DoctorShareClassId: { type: dataTypes.INTEGER, field: 'DoctorShareClassId' },
        ActionFrom: { type: dataTypes.DATE, field: 'ActionFrom' },
        ActionTo: { type: dataTypes.DATE, field: 'ActionTo' },
        AddressLine1: { type: dataTypes.STRING, field: 'AddressLine1' },
        AddressLine2: { type: dataTypes.STRING, field: 'AddressLine2' },
        Pincode: { type: dataTypes.STRING, field: 'Pincode' },
        Area: { type: dataTypes.STRING, field: 'Area' },
        City: { type: dataTypes.STRING, field: 'City' },
        State: { type: dataTypes.STRING, field: 'State' },
        Country: { type: dataTypes.STRING, field: 'Country' },
        LandLine: { type: dataTypes.STRING, field: 'LandLine' },
        Mobile: { type: dataTypes.STRING, field: 'Mobile' },
        Email: { type: dataTypes.STRING, field: 'Email' },
        LicenseNo: { type: dataTypes.STRING, field: 'LicenseNo' },
        LicenseIssueDate: { type: dataTypes.DATE, field: 'LicenseIssueDate' },
        LicenseExpiryDate: { type: dataTypes.DATE, field: 'LicenseExpiryDate' },
        IsAdmittingConsultant: { type: dataTypes.BOOLEAN, field: 'IsAdmittingConsultant' },
        IsVisistingConsultant: { type: dataTypes.BOOLEAN, field: 'IsVisistingConsultant' },
        IsSurgeon: { type: dataTypes.BOOLEAN, field: 'IsSurgeon' },
        OrgId: { type: dataTypes.BIGINT, field: 'OrgId' },
        FacilityId: { type: dataTypes.BIGINT, field: 'FacilityId' },
        DepartmentId: { type: dataTypes.BIGINT, field: 'DepartmentId' },
        SubDepartmentId: { type: dataTypes.BIGINT, field: 'SubDepartmentId' },
        UserGroupId: { type: dataTypes.BIGINT, field: 'UserGroupId' },
        ClinicalRoleId: { type: dataTypes.BIGINT, field: 'ClinicalRoleId' },
        UserTypeId: { type: dataTypes.BIGINT, field: 'UserTypeId' },
        SpecialityId: { type: dataTypes.BIGINT, field: 'SpecialityId' },
        Image: { type: dataTypes.STRING.BINARY, field: 'Image' },
        Signature: { type: dataTypes.STRING.BINARY, field: 'Signature' },
        UserName: { type: dataTypes.STRING, field: 'UserName' },
        Password: { type: dataTypes.STRING, field: 'Password' },
        TabletAccess: { type: dataTypes.BOOLEAN, field: 'TabletAccess' },
        MobileAccess: { type: dataTypes.BOOLEAN, field: 'MobileAccess' },
        LoginPermission: { type: dataTypes.BOOLEAN, field: 'LoginPermission' },
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
            tableName: 'Users',
            createdAt: 'CreatedAt',
            updatedAt: 'UpdatedAt',
            freezeTableName: true,
            defaultScope: {
                where: {
                    Status: 1,
                },
            },
        });

    (User as any).associate =  (models: Models) => {
        User.belongsTo(models.Organization);
        User.belongsTo(models.Facility);
        User.belongsTo(models.Department);
        User.belongsTo(models.Department);
        User.belongsTo(models.Speciality);
    };

    return User;
}
