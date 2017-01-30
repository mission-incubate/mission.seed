import './app.global';
import { Config } from './app.config';
App.Config = Config;

import { LoggerFactory, Repository } from 'mission.core';
import { Paginator } from 'mission.common';
import { Bootstrap } from './bootstrap';
import { DbConfig, WebConfig, LoggerConfig } from './config';
import { join } from 'path';
let modelPattern = join(__dirname, 'modules', '**/*.model.js');

var logger = LoggerFactory.getLogger(LoggerConfig.ExceptionLoggerConfig);
Paginator.init(Config.DEFAULT_PAGE_SIZE);
Repository.init(DbConfig, modelPattern, logger);
//MongoRepo.init({}, logger); //async api
App.Models = Repository.Instance.Models;

new Bootstrap(WebConfig).init(logger).start();
