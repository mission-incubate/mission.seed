import * as gulp from 'gulp';

gulp.task('default', (done: any) => {
    let api = require('/Users/NatarajanG/BitBucket/mission/mission.seed/node_modules/mission.tools/src/tasks/module.gen');
    api({
        userName: 'root',
        password: 'irtt',
        database: 'generator',
        options: {
            host: 'localhost',
            port: '3306',
            dialect: 'mysql',
            logging: console.warn,
            force: true,
            timezone: '+12:00'
        }
    }, 'natarajan',
        '/Users/NatarajanG/BitBucket/mission/mission.tools/src/templates/module',
        '/Users/NatarajanG/BitBucket/mission/mission.seed/src/modules',
        'AppManager', done);
});
