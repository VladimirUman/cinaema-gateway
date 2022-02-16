import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { HttpModule } from '@nestjs/axios';

import { UsersService } from './users.service';
import { AccountModule } from '../account/account.module';

@Module({
    imports: [HttpModule, AccountModule],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule {}
