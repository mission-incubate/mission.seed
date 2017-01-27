import { LoggerFactory, Repository } from 'mission.core';
import { MongoRepo } from 'mission.core/build/mongo';
import { ApiRequest, Paginator } from 'mission.common';
import { Bootstrap } from './bootstrap';
import { DbConfig, WebConfig } from './config';

export class Application {
    public async init(): Promise<void> {
        let logger = LoggerFactory.getLogger([{ 'console': {} }]);
        Paginator.init(50);
        Repository.init(DbConfig, '', logger);
        await MongoRepo.init({}, logger);
        new Bootstrap(WebConfig).init(logger).start();
    }
}