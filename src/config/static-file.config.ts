import { StaticFileConfig } from 'mission.core';

export const FileConfig: StaticFileConfig = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: ['index.html', 'index.htm'],
    maxAge: process.env.STATIC_FILE_MAX_AGE || '1d',
    redirect: false,
    setHeaders: function (res: any, path: string, stat: string) {
        res.set('x-timestamp', Date.now().toString());
    }
};
