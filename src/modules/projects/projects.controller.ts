import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ProjectsService } from './projects.service';

@Controller('projects')
@ApiTags('Projects')
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) {}

    @Get()
    getFile() {
        return this.projectsService.getAll();
    }
}
