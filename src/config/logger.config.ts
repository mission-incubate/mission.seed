import { LoggerOptionList } from 'mission.core';

export const LoggerConfig: {
    StartUpLoggerConfig: LoggerOptionList,
    ExceptionLoggerConfig: LoggerOptionList,
    SqlLoggerConfig: LoggerOptionList,
} = {
        ExceptionLoggerConfig: [
            {
                Console: {
                    colorize: true,
                    json: true,
                    level: 'info',
                    timestamp: true,
                },
                DailyRotateFile: {
                    dirname: process.env.LOG_FOLDER_PATH,
                    filename: 'exception.log',
                    handleExceptions: true,
                    humanReadableUnhandledException: true,
                    json: false,
                    level: 'info',
                    timestamp: true,
                },
            },
        ],
        SqlLoggerConfig: [
            {
                Console: {
                    colorize: true,
                    json: false,
                    level: 'info',
                    timestamp: true,
                },
                File: {
                    dirname: process.env.LOG_FOLDER_PATH,
                    filename: 'sql.log',
                    handleExceptions: true,
                    humanReadableUnhandledException: true,
                    json: false,
                    level: 'info',
                },
            },
        ],
        StartUpLoggerConfig: [
            {
                Console: {
                    colorize: true,
                    json: true,
                    level: 'info',
                    timestamp: true,
                },
                File: {
                    dirname: process.env.LOG_FOLDER_PATH,
                    filename: 'startup.log',
                    handleExceptions: true,
                    humanReadableUnhandledException: true,
                    json: false,
                    level: 'info',
                    timestamp: true,
                },
            },
        ],
    };
