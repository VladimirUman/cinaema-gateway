import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class FilesService {
    constructor(@Inject('FILE_MICROSERVICE') private readonly client: ClientProxy) {}

    showFile() {
        return this.client.send({ role: 'file', cmd: 'show-file' }, {}); // will be fixed after microservice creating
    }
}
