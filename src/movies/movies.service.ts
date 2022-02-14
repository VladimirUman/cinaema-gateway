import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class MoviesService {
    constructor(private httpService: HttpService) {}

    getAll() {
        const axiosResponse = this.httpService.get(process.env.SERVER_URL + '/movies');
        const movies = lastValueFrom(axiosResponse.pipe(map((response) => response.data.data)));

        return movies;
    }
}
