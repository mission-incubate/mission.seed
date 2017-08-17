import { IAttributes, Instance } from 'mission.core';

export interface UserAttributes extends IAttributes {
    Title: string;
    FirstName: string;
    MiddleName: string;
    LastName: string;
    Age: number;
    DOB: Date;
    PreferredLanguageId: number;
    Qualification: string;
    NationalityId: number;
    CategoryId: number;
    DoctorShareClassId: number;
    ActionFrom: Date;
    ActionTo: Date;
    AddressLine1: string;
    AddressLine2: string;
    Pincode: string;
    Area: string;
    City: string;
    State: string;
    Country: string;
    LandLine: string;
    Mobile: string;
    Email: string;
    LicenseNo: string;
    LicenseIssueDate: Date;
    LicenseExpiryDate: Date;
    IsAdmittingConsultant: boolean;
    IsVisistingConsultant: boolean;
    IsSurgeon: boolean;
    OrgId: number;
    FacilityId: number;
    DeptId: number;
    SubDeptId: number;
    UserGroupId: number;
    ClinicalRoleId: number;
    UserTypeId: number;
    SpecialityId: number;
    Image: string;
    Signature: string;
    UserName: string;
    Password: string;
    TabletAccess: boolean;
    MobileAccess: boolean;
    LoginPermission: boolean;
    Status: number;
    Rev: number;
    CreatedBy: number;
    CreatedAt: Date;
    UpdatedBy: number;
    UpdatedAt: Date;
}

export interface UserInstance extends Instance<UserAttributes> {
    // I'm exposing every DB column as an instance field to so that tsc won't complain.
    // CreatedAt: Date;
    // UpdatedAt: Date;
    dataValues: UserAttributes;
}
