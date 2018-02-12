import { join } from 'path';

export const ModelPatterns: string[] = (process.env.API_MODEL_PATTERNS || '').split(',')
    .map((pattern) => join(process.cwd(), pattern));
