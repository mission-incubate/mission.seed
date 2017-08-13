import * as i from './Interface';
import * as SequelizeStatic from 'sequelize';

declare global {
    interface Models {
        User: SequelizeStatic.Model<i.UserInstance, i.UserAttributes>;
        Organization: SequelizeStatic.Model<i.OrganizationInstance, i.OrganizationAttributes>;
        Facility: SequelizeStatic.Model<i.FacilityInstance, i.FacilityAttributes>;
        Department: SequelizeStatic.Model<i.DepartmentInstance, i.DepartmentAttributes>;
        Speciality: SequelizeStatic.Model<i.SpecialityInstance, i.SpecialityAttributes>;
    }
}
