import { IAttributes, Instance } from 'mission.core';

export interface OrganizationAttributes extends IAttributes {
    id: number;
    OrgCode: string;
    OrgName: string;
    AddressLine1: string;
    AddressLine2: string;
    PinCode: string;
    Area: string;
    City: string;
    State: string;
    Country: string;
    OrgStatusId: number;
    ActiveFrom: Date;
    ActiveTo: Date;
    IsBeds: number;
    IsDoctors: number;
    IsFacility: number;
    BedsCount: number;
    DoctorsCount: number;
    FacilityCount: number;
    LicenseActiveFrom: Date;
    LicenseActiveTo: Date;
    OrgLogo: string;
    Status: number;
    Rev: number;
    CreatedBy: number;
    CreatedAt: Date;
    UpdatedBy: number;
    UpdatedAt: Date;
}

export interface OrganizationInstance extends Instance<OrganizationAttributes>, OrganizationAttributes {
    // I'm exposing every DB column as an instance field to so that tsc won't complain.
    // CreatedAt: Date;
    // UpdatedAt: Date;
    dataValues: OrganizationAttributes;
}
