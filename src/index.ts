import 'app.global';
import { LoggerFactory, Repository, MongoRepo } from 'mission.core';
import { ApiRequest, Paginator } from 'mission.common';
import { Bootstrap } from './bootstrap';
import { DbConfig, WebConfig } from './config';
import { Config } from './app.config';

var logger = LoggerFactory.getLogger([{ 'console': {} }]);
Paginator.init(Config.DEFAULT_PAGE_SIZE);
Repository.init(DbConfig, '', logger);
MongoRepo.init({}, logger); //async api
App.Config = Config;
App.Models = Repository.getInstance().Models;

new Bootstrap(WebConfig).init(logger).start();

