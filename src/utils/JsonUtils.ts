// Utility to read data form Json file

import * as fs from 'fs';

export class JsonUtils {
    static readJsonFile(filePath: string): any {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    }
}