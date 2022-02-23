import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { MonthProjectHoursService } from './hours.service';

@Controller('hours')
@ApiTags('Month Project Hours')
export class MonthProjectHoursController {
    constructor(private readonly hoursService: MonthProjectHoursService) {}

    @Get()
    getFile() {
        return this.hoursService.getAll();
    }
}
