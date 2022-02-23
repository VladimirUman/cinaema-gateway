import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MonthProjectHoursService {
    constructor(@Inject('FILE_MICROSERVICE') private readonly client: ClientProxy) {}

    getAll() {
        return this.client.send({ role: 'hours', cmd: 'get-all' }, {});
    }
}
