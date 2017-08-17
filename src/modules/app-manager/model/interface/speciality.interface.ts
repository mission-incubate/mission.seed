import { IAttributes, Instance } from 'mission.core';

export interface SpecialityAttributes extends IAttributes {

    ParentSpecialityId: number;
    SpecialityCode: string;
    SpecialityName: string;
    SpecialityTypeId: number;
    Description: string;
    FacilityId: number;
    IsActive: boolean;
    Status: number;
    Rev: number;
    CreatedBy: number;
    CreatedAt: Date;
    UpdatedBy: number;
    UpdatedAt: Date;
}

export interface SpecialityInstance extends Instance<SpecialityAttributes> {
    // I'm exposing every DB column as an instance field to so that tsc won't complain.
    // CreatedAt: Date;
    // UpdatedAt: Date;
    dataValues: SpecialityAttributes;
}
