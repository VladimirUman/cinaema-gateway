import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import { AuthGuard } from 'src/guards/auth.guard';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Get()
    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    async getAll(): Promise<any> {
        const movies = await this.moviesService.getAll();

        return movies;
    }
}
