import * as SequelizeStatic from 'sequelize';
import { DataTypes, Sequelize } from 'sequelize';
import * as i from './interface';

export default function (sequelize: Sequelize, dataTypes: DataTypes):
    SequelizeStatic.Model<i.DepartmentInstance, i.DepartmentAttributes> {
    const Department = sequelize.define<i.DepartmentInstance, i.DepartmentAttributes>('Department', {
        Id: { type: dataTypes.BIGINT, field: 'DepartmentId', primaryKey: true, autoIncrement: true },
        ParentDepartmentId: { type: dataTypes.BIGINT, field: 'ParentDepartmentId' },
        DepartmentCode: { type: dataTypes.STRING, field: 'DepartmentCode' },
        DepartmentName: { type: dataTypes.STRING, field: 'DepartmentName' },
        DepartmentTypeId: { type: dataTypes.INTEGER, field: 'DepartmentTypeId' },
        Description: { type: dataTypes.STRING, field: 'Description' },
        SpecialityId: { type: dataTypes.BIGINT, field: 'SpecialityId' },
        PhoneNo: { type: dataTypes.STRING, field: 'PhoneNo' },
        IsEmergency: { type: dataTypes.BOOLEAN, field: 'IsEmergency' },
        IsAdmittingDept: { type: dataTypes.BOOLEAN, field: 'IsAdmittingDept' },
        IncludeMRDRequired: { type: dataTypes.BOOLEAN, field: 'IncludeMRDRequired' },
        IsPatientFlowMandatory: { type: dataTypes.BOOLEAN, field: 'IsPatientFlowMandatory' },
        IsProcessingCenter: { type: dataTypes.BOOLEAN, field: 'IsProcessingCenter' },
        CostCenterId: { type: dataTypes.BIGINT, field: 'CostCenterId' },
        URL: { type: dataTypes.STRING, field: 'URL' },
        ThresholdDuration: { type: dataTypes.INTEGER, field: 'ThresholdDuration' },
        FollowupDays: { type: dataTypes.INTEGER, field: 'FollowupDays' },
        NightStartTime: { type: dataTypes.TIME, field: 'NightStartTime' },
        NightEndTime: { type: dataTypes.TIME, field: 'NightEndTime' },
        ActiveFrom: { type: dataTypes.DATE, field: 'ActiveFrom' },
        ActiveTo: { type: dataTypes.DATE, field: 'ActiveTo' },
        DepartmentLogo: { type: dataTypes.STRING.BINARY, field: 'DepartmentLogo' },
        Status: { type: dataTypes.INTEGER, field: 'Status' },
        Rev: { type: dataTypes.INTEGER, field: 'Rev' },
        CreatedBy: { type: dataTypes.INTEGER, field: 'CreatedBy' },
        CreatedAt: { type: dataTypes.DATE, field: 'CreatedAt' },
        UpdatedBy: { type: dataTypes.INTEGER, field: 'UpdatedBy' },
        UpdatedAt: { type: dataTypes.DATE, field: 'UpdatedAt' },
    },
        {
            classMethods: {},
            createdAt: 'CreatedAt',
            defaultScope: {
                where: {
                    Status: 1,
                },
            },
            freezeTableName: true,
            indexes: [],
            tableName: 'Departments',
            timestamps: true,
            updatedAt: 'UpdatedAt',
        });

    (Department as any).associate = (models: Models) => {
        return;
    };
    return Department;
}
