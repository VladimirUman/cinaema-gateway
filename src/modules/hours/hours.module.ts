import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { configuration } from '../../config/configuration';
import { MonthProjectHoursController } from './hours.controller';
import { MonthProjectHoursService } from './hours.service';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'FILE_MICROSERVICE',
                transport: Transport.TCP,
                options: {
                    host: configuration.services.fileMs.host,
                    port: configuration.services.fileMs.port
                }
            }
        ])
    ],
    controllers: [MonthProjectHoursController],
    providers: [MonthProjectHoursService]
})
export class MonthProjectHoursModule {}
