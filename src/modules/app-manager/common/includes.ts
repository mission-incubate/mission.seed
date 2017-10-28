import { AppIncludes, IncludeOptions, Repository/*, _*/ } from 'mission.core';

export const AppManagerIncludes: { [key: string]: IncludeOptions } = {
    Department: {
        attributes: [],
        model: Repository.Instance.Models.Department,
        where: undefined,
        /*'Id', 'ParentDepartmentId', 'DepartmentCode', 'DepartmentName', 'DepartmentTypeId', 'Description',
        'SpecialityId','PhoneNo', 'IsEmergency', 'IsAdmittingDept', 'IncludeMRDRequired', 'IsPatientFlowMandatory',
        'IsProcessingCenter','CostCenterId', 'URL', 'ThresholdDuration', 'FollowupDays', 'NightStartTime',
        'NightEndTime','ActiveFrom', 'ActiveTo','DepartmentLogo', 'Status', 'Rev', 'CreatedBy', 'CreatedAt',
        'UpdatedBy', 'UpdatedAt', */
    },
    Facility: {
        attributes: ['Id', 'FacilityCode', 'FacilityName'],
        model: Repository.Instance.Models.Facility,
        where: undefined,
        /*'Id', 'OrganizationId', 'FacilityCode', 'FacilityName', 'FacilityTypeId', 'Description', 'AddressLine1',
        'AddressLine2', 'PinCode', 'Area', 'City', 'State', 'Country', 'LandLine', 'FaxNo', 'Email', 'LanguageId',
        'ActiveFrom', 'ActiveTo', 'IsGstRegistered', 'GstNumber', 'RegistrationNo', 'TaxActiveFrom', 'TaxActiveTo',
        'Status', 'Rev', 'CreatedBy', 'CreatedAt', 'UpdatedBy', 'UpdatedAt', */
    },
    Organization: {
        attributes: ['Id', 'OrgCode', 'OrgName'],
        model: Repository.Instance.Models.Organization,
        where: undefined,
        /*'Id', 'OrgCode', 'OrgName', 'AddressLine1', 'AddressLine2', 'PinCode', 'Area', 'City', 'State', 'Country',
         'OrgStatusId', 'ActiveFrom', 'ActiveTo', 'IsBeds', 'IsDoctors', 'IsFacility', 'BedsCount', 'DoctorsCount',
          'FacilityCount', 'LicenseActiveFrom', 'LicenseActiveTo', 'OrgLogo', 'Status', 'Rev', 'CreatedBy', 'CreatedAt',
           'UpdatedBy', 'UpdatedAt', */
    },
    Speciality: {
        attributes: [],
        model: Repository.Instance.Models.Speciality,
        where: undefined,
        /*'Id', 'ParentSpecialityId', 'SpecialityCode', 'SpecialityName', 'SpecialityTypeId', 'Description',
        'FacilityId','IsActive', 'Status', 'Rev', 'CreatedBy', 'CreatedAt', 'UpdatedBy', 'UpdatedAt', */
    },
    User: {
        attributes: [],
        model: Repository.Instance.Models.User,
        where: undefined,
        /*'Id', 'Title', 'FirstName', 'MiddleName', 'LastName', 'Age', 'DOB', 'PreferredLanguageId', 'Qualification',
         'NationalityId', 'CategoryId', 'DoctorShareClassId', 'ActionFrom', 'ActionTo', 'AddressLine1', 'AddressLine2',
          'Pincode', 'Area', 'City', 'State', 'Country', 'LandLine', 'Mobile', 'Email', 'LicenseNo', 'LicenseIssueDate',
           'LicenseExpiryDate', 'IsAdmittingConsultant', 'IsVisistingConsultant', 'IsSurgeon', 'OrgId', 'FacilityId',
            'DeptId', 'SubDeptId', 'UserGroupId', 'ClinicalRoleId', 'UserTypeId', 'SpecialityId', 'Image', 'Signature',
             'UserName', 'Password', 'TabletAccess', 'MobileAccess', 'LoginPermission', 'Status', 'Rev', 'CreatedBy',
              'CreatedAt', 'UpdatedBy', 'UpdatedAt', */
    },
};
// _.merge(AppIncludes, AppManagerIncludes);
AppIncludes.add(AppManagerIncludes);
