import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';

import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(private httpService: HttpService) {}

    getAll() {
        const axiosResponse = this.httpService.get(process.env.SERVER_URL + '/users');
        const users = lastValueFrom(axiosResponse.pipe(map((response) => response.data.data)));

        return users;
    }

    getById(userId: string) {
        const axiosResponse = this.httpService.get(process.env.SERVER_URL + `/users/${userId}`);
        const user = lastValueFrom(axiosResponse.pipe(map((response) => response.data.data)));

        return user;
    }

    update(userId: string, user: UpdateUserDto) {
        const axiosResponse = this.httpService.put(process.env.SERVER_URL + `/users/${userId}`, user);
        const newUser = lastValueFrom(axiosResponse.pipe(map((response) => response.data.user)));

        return newUser;
    }

    delete(userId: string) {
        const axiosResponse = this.httpService.delete(process.env.SERVER_URL + `/users/${userId}`);
        const responseData = lastValueFrom(axiosResponse.pipe(map((response) => response.data.id)));

        return responseData;
    }
}
