import { AppIncludes, IncludeOptions, Repository/*, _*/ } from 'mission.core';

export const AppManagerIncludes: { [key: string]: IncludeOptions } = {
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
