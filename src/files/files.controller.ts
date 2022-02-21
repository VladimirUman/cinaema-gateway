import { Controller, Get } from '@nestjs/common';

import { FilesService } from './files.service';

@Controller('files')
export class FilesController {
    constructor(private readonly filesService: FilesService) {}

    @Get()
    getFile() {
        return this.filesService.showFile(); // will be fixed after microservice creating
    }
}
