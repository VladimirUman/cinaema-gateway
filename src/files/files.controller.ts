import { Controller, InternalServerErrorException, Post, Req, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ApiConsumes } from '@nestjs/swagger';
import { memoryStorage } from 'multer';
import { FastifyRequest } from 'fastify';

import { FilesService } from './files.service';
import { FastifyFilesInterceptor, xlsFileFilter } from '../interseptors/fastifyFile.interseptor';

@Controller('files')
export class FilesController {
    constructor(private readonly filesService: FilesService) {}

    @ApiConsumes('multipart/form-data')
    @Post('upload-files')
    @UseInterceptors(
        FastifyFilesInterceptor('file', 10, {
            storage: memoryStorage(),
            fileFilter: xlsFileFilter
        })
    )
    async multipleFileUpload(@Req() req: FastifyRequest, @UploadedFiles() files: Express.Multer.File[]) {
        try {
            const resData = await this.filesService.multipleFileUpload(files);
            return resData;
        } catch (e) {
            console.error('multipleFileUpload err ---', e);
            return new InternalServerErrorException('Error in sending data', e);
        }
    }
}
