import { IAttributes, Instance } from 'mission.core';

export interface FacilityAttributes extends IAttributes {
    id: number;
    OrganizationId: number;
    FacilityCode: string;
    FacilityName: string;
    FacilityTypeId: number;
    Description: string;
    AddressLine1: string;
    AddressLine2: string;
    PinCode: string;
    Area: string;
    City: string;
    State: string;
    Country: string;
    LandLine: string;
    FaxNo: string;
    Email: string;
    LanguageId: number;
    ActiveFrom: Date;
    ActiveTo: Date;
    IsGstRegistered: boolean;
    GstNumber: string;
    RegistrationNo: string;
    TaxActiveFrom: Date;
    TaxActiveTo: Date;
    Status: number;
    Rev: number;
    CreatedBy: number;
    CreatedAt: Date;
    UpdatedBy: number;
    UpdatedAt: Date;
}

export interface FacilityInstance extends Instance<FacilityAttributes>, FacilityAttributes {
    // I'm exposing every DB column as an instance field to so that tsc won't complain.
    // CreatedAt: Date;
    // UpdatedAt: Date;
    dataValues: FacilityAttributes;
}
