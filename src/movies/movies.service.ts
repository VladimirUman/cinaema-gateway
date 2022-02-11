import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class MoviesService {
    constructor(private httpService: HttpService) {}

    getAll(): Observable<AxiosResponse> {
        return this.httpService.get('http://localhost:3000/api/movies');
    }
}
