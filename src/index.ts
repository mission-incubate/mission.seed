import { LoggerFactory, Repository } from 'mission.core';
import { Paginator } from 'mission.common';
import { DbConfig, WebConfig, LoggerConfig } from './config';
import { join } from 'path';


const logger = LoggerFactory.getLogger(LoggerConfig.ExceptionLoggerConfig);
Paginator.init(Number(process.env.DEFAULT_PAGE_SIZE));
let modelPattern = join(__dirname, 'modules', '**/*.model.js');
Repository.init(DbConfig, modelPattern, logger);


import { Bootstrap } from './bootstrap';
new Bootstrap(WebConfig).init(logger).start();
