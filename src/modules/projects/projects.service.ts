import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ProjectsService {
    constructor(@Inject('FILE_MICROSERVICE') private readonly client: ClientProxy) {}

    getAll() {
        return this.client.send({ role: 'project', cmd: 'get-all' }, {});
    }
}
