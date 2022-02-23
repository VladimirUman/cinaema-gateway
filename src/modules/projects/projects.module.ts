import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { configuration } from '../../config/configuration';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';

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
    controllers: [ProjectsController],
    providers: [ProjectsService]
})
export class ProjectsModule {}
