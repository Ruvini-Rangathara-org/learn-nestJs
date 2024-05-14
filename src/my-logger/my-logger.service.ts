import { ConsoleLogger, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class MyLoggerService extends ConsoleLogger{

    async logToFile(entry){
        const formattedEntry = `${Intl.DateTimeFormat(`en-US`, {
            dateStyle: `short`,
            timeStyle: `short`,
            timeZone: `Asia/Colombo`
        }).format(new Date())}\t${entry}\n`

        try {
            if (!fs.existsSync(path.join(__dirname, '..', '..', 'logs'))) {
                await fs.promises.mkdir(path.join(__dirname, '..', '..', 'logs'));
            }
            await fs.promises.appendFile(path.join(__dirname, '..', '..', 'logs', 
            'myLogFile.log'), formattedEntry);
        }catch (error) {
            if(error instanceof Error){
                console.error(error.message);
            }
        }
    }

    log(message: any, context?: string) {
        const entry = `${context}\t${message}`;
        this.logToFile(entry);
        super.log(message, context);
    }

    error(message: any, stackOrContext?: string) {
        const entry = `${stackOrContext}\t${message}`;
        this.logToFile(entry);
        super.log(message, stackOrContext);
    }


}
