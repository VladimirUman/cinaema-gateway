import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { DevelopersService } from './developers.service';

@Controller('developers')
@ApiTags('Developers')
export class DevelopersController {
    constructor(private readonly developersService: DevelopersService) {}

    @Get()
    getDevelopers() {
        return this.developersService.getAll();
    }
}
