import { Body, Controller, Delete, Get, Param, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import { AuthAdminGuard } from 'src/guards/auth-admin.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    @ApiBearerAuth()
    @UseGuards(AuthAdminGuard)
    async getAll(): Promise<any> {
        const users = await this.usersService.getAll();

        return users;
    }

    @Get(':id')
    @ApiBearerAuth()
    @UseGuards(AuthAdminGuard)
    async getOne(@Param('id') id: string): Promise<any> {
        const user = await this.usersService.getById(id);

        return user;
    }

    @Put(':id')
    @ApiBearerAuth()
    @UseGuards(AuthAdminGuard)
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<any> {
        const user = await this.usersService.update(id, updateUserDto);

        return user;
    }

    @Delete(':id')
    @ApiBearerAuth()
    @UseGuards(AuthAdminGuard)
    async remove(@Param('id') id: string): Promise<void> {
        await this.usersService.delete(id);
    }
}
