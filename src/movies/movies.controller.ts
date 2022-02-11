import { Controller, Get } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';

import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Get()
    async getAll(): Promise<any> {
        const movies = await lastValueFrom(this.moviesService.getAll().pipe(map((response) => response.data.data)));

        return movies;
    }
}
