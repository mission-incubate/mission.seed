import * as SequelizeStatic from 'sequelize';
import * as i from './interface';

declare global {
    interface Models {
        User: SequelizeStatic.Model<i.UserInstance, i.UserAttributes>;
    }
}
