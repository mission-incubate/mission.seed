import { LoggerOptionList } from 'mission.core';

export const LoggerConfig: {
    StartUpLoggerConfig: LoggerOptionList,
    ExceptionLoggerConfig: LoggerOptionList,
    SqlLoggerConfig: LoggerOptionList
} = {
        StartUpLoggerConfig: [
            {
                Console: {
                    level: 'info',
                    colorize: true,
                    timestamp: true,
                    json: true
                },
                File: {
                    filename: 'startup.log',
                    dirname: App.Config.LOG_FOLDER_PATH,
                    level: 'info',
                    handleExceptions: true,
                    timestamp: true,
                    humanReadableUnhandledException: true,
                    json: false
                }
            }
        ],
        ExceptionLoggerConfig: [
            {
                Console: {
                    level: 'info',
                    colorize: true,
                    timestamp: true,
                    json: false
                },
                DailyRotateFile: {
                    filename: 'exception.log',
                    dirname: App.Config.LOG_FOLDER_PATH,
                    level: 'info',
                    handleExceptions: true,
                    timestamp: true,
                    humanReadableUnhandledException: true,
                    json: false
                }
            }
        ],
        SqlLoggerConfig: [
            {
                Console: {
                    level: 'info',
                    colorize: true,
                    timestamp: true,
                    json: false
                },
                File: {
                    filename: 'sql.log',
                    dirname: App.Config.LOG_FOLDER_PATH,
                    level: 'info',
                    handleExceptions: true,
                    humanReadableUnhandledException: true,
                    json: false
                }
            }
        ]
    };
