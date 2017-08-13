import * as SequelizeStatic from 'sequelize';
import { DataTypes, Sequelize } from 'sequelize';
import * as i from './interface';

export default function (sequelize: Sequelize, DataTypes: DataTypes):
    SequelizeStatic.Model<i.DepartmentInstance, i.DepartmentAttributes> {
    let Department = sequelize.define<i.DepartmentInstance, i.DepartmentAttributes>('Department', {
        Id: { type: DataTypes.BIGINT, field: 'DepartmentId', primaryKey: true, autoIncrement: true },
        ParentDepartmentId: { type: DataTypes.BIGINT, field: 'ParentDepartmentId' },
        DepartmentCode: { type: DataTypes.STRING, field: 'DepartmentCode' },
        DepartmentName: { type: DataTypes.STRING, field: 'DepartmentName' },
        DepartmentTypeId: { type: DataTypes.INTEGER, field: 'DepartmentTypeId' },
        Description: { type: DataTypes.STRING, field: 'Description' },
        SpecialityId: { type: DataTypes.BIGINT, field: 'SpecialityId' },
        PhoneNo: { type: DataTypes.STRING, field: 'PhoneNo' },
        IsEmergency: { type: DataTypes.BOOLEAN, field: 'IsEmergency' },
        IsAdmittingDept: { type: DataTypes.BOOLEAN, field: 'IsAdmittingDept' },
        IncludeMRDRequired: { type: DataTypes.BOOLEAN, field: 'IncludeMRDRequired' },
        IsPatientFlowMandatory: { type: DataTypes.BOOLEAN, field: 'IsPatientFlowMandatory' },
        IsProcessingCenter: { type: DataTypes.BOOLEAN, field: 'IsProcessingCenter' },
        CostCenterId: { type: DataTypes.BIGINT, field: 'CostCenterId' },
        URL: { type: DataTypes.STRING, field: 'URL' },
        ThresholdDuration: { type: DataTypes.INTEGER, field: 'ThresholdDuration' },
        FollowupDays: { type: DataTypes.INTEGER, field: 'FollowupDays' },
        NightStartTime: { type: DataTypes.TIME, field: 'NightStartTime' },
        NightEndTime: { type: DataTypes.TIME, field: 'NightEndTime' },
        ActiveFrom: { type: DataTypes.DATE, field: 'ActiveFrom' },
        ActiveTo: { type: DataTypes.DATE, field: 'ActiveTo' },
        DepartmentLogo: { type: DataTypes.STRING.BINARY, field: 'DepartmentLogo' },
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
            tableName: 'Departments',
            createdAt: 'CreatedAt',
            updatedAt: 'UpdatedAt',
            freezeTableName: true,
            defaultScope: {
                where: {
                    Status: 1
                }
            }
        });

    return Department;
}
