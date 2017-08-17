import { IAttributes, Instance } from 'mission.core';

export interface DepartmentAttributes extends IAttributes {

    ParentDepartmentId: number;
    DepartmentCode: string;
    DepartmentName: string;
    DepartmentTypeId: number;
    Description: string;
    SpecialityId: number;
    PhoneNo: string;
    IsEmergency: boolean;
    IsAdmittingDept: boolean;
    IncludeMRDRequired: boolean;
    IsPatientFlowMandatory: boolean;
    IsProcessingCenter: boolean;
    CostCenterId: number;
    URL: string;
    ThresholdDuration: number;
    FollowupDays: number;
    NightStartTime: string;
    NightEndTime: string;
    ActiveFrom: Date;
    ActiveTo: Date;
    DepartmentLogo: string;
    Status: number;
    Rev: number;
    CreatedBy: number;
    CreatedAt: Date;
    UpdatedBy: number;
    UpdatedAt: Date;
}

export interface DepartmentInstance extends Instance<DepartmentAttributes> {
    // I'm exposing every DB column as an instance field to so that tsc won't complain.
    // CreatedAt: Date;
    // UpdatedAt: Date;
    dataValues: DepartmentAttributes;
}
