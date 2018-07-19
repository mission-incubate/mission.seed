import { Model } from 'mission.core';
import * as i from './interface';

declare global {
    interface Models {
        User: Model<i.UserInstance, i.UserAttributes>;
    }
}
