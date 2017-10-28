import * as SequelizeStatic from 'sequelize';
import * as i from './interface';

declare global {
    interface Models {
        User: SequelizeStatic.Model<i.UserInstance, i.UserAttributes>;
        Organization: SequelizeStatic.Model<i.OrganizationInstance, i.OrganizationAttributes>;
        Facility: SequelizeStatic.Model<i.FacilityInstance, i.FacilityAttributes>;
        Department: SequelizeStatic.Model<i.DepartmentInstance, i.DepartmentAttributes>;
        Speciality: SequelizeStatic.Model<i.SpecialityInstance, i.SpecialityAttributes>;
    }
}
