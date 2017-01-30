import { IncludeOptions, AppIncludes, _ } from 'mission.core';

const AppManagerIncludes: { [key: string]: IncludeOptions } = {
    'User': {
        model: App.Models.User,
        where: null,
        attributes: []
        /*'Id', 'Title', 'FirstName', 'MiddleName', 'LastName', 'Age', 'DOB', 'PreferredLanguageId', 'Qualification',
         'NationalityId', 'CategoryId', 'DoctorShareClassId', 'ActionFrom', 'ActionTo', 'AddressLine1', 'AddressLine2',
          'Pincode', 'Area', 'City', 'State', 'Country', 'LandLine', 'Mobile', 'Email', 'LicenseNo', 'LicenseIssueDate',
           'LicenseExpiryDate', 'IsAdmittingConsultant', 'IsVisistingConsultant', 'IsSurgeon', 'OrgId', 'FacilityId',
            'DeptId', 'SubDeptId', 'UserGroupId', 'ClinicalRoleId', 'UserTypeId', 'SpecialityId', 'Image', 'Signature',
             'UserName', 'Password', 'TabletAccess', 'MobileAccess', 'LoginPermission', 'Status', 'Rev', 'CreatedBy',
              'CreatedAt', 'UpdatedBy', 'UpdatedAt', */
    },
    'Organization': {
        model: App.Models.Organization,
        where: null,
        attributes: []
        /*'Id', 'OrgCode', 'OrgName', 'AddressLine1', 'AddressLine2', 'PinCode', 'Area', 'City', 'State', 'Country',
         'OrgStatusId', 'ActiveFrom', 'ActiveTo', 'IsBeds', 'IsDoctors', 'IsFacility', 'BedsCount', 'DoctorsCount',
          'FacilityCount', 'LicenseActiveFrom', 'LicenseActiveTo', 'OrgLogo', 'Status', 'Rev', 'CreatedBy', 'CreatedAt',
           'UpdatedBy', 'UpdatedAt', */
    },
    'Facility': {
        model: App.Models.Facility,
        where: null,
        attributes: []
        /*'Id', 'OrganizationId', 'FacilityCode', 'FacilityName', 'FacilityTypeId', 'Description', 'AddressLine1', 'AddressLine2',
         'PinCode', 'Area', 'City', 'State', 'Country', 'LandLine', 'FaxNo', 'Email', 'LanguageId', 'ActiveFrom', 'ActiveTo',
          'IsGstRegistered', 'GstNumber', 'RegistrationNo', 'TaxActiveFrom', 'TaxActiveTo', 'Status', 'Rev', 'CreatedBy',
           'CreatedAt', 'UpdatedBy', 'UpdatedAt', */
    },
    'Department': {
        model: App.Models.Department,
        where: null,
        attributes: []
        /*'Id', 'ParentDepartmentId', 'DepartmentCode', 'DepartmentName', 'DepartmentTypeId', 'Description', 'SpecialityId',
         'PhoneNo', 'IsEmergency', 'IsAdmittingDept', 'IncludeMRDRequired', 'IsPatientFlowMandatory', 'IsProcessingCenter',
          'CostCenterId', 'URL', 'ThresholdDuration', 'FollowupDays', 'NightStartTime', 'NightEndTime', 'ActiveFrom', 'ActiveTo',
           'DepartmentLogo', 'Status', 'Rev', 'CreatedBy', 'CreatedAt', 'UpdatedBy', 'UpdatedAt', */
    },
    'Speciality': {
        model: App.Models.Speciality,
        where: null,
        attributes: []
        /*'Id', 'ParentSpecialityId', 'SpecialityCode', 'SpecialityName', 'SpecialityTypeId', 'Description', 'FacilityId',
         'IsActive', 'Status', 'Rev', 'CreatedBy', 'CreatedAt', 'UpdatedBy', 'UpdatedAt', */
    },
};
_.merge(AppIncludes, AppManagerIncludes);
