import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AccountModule } from './account/account.module';
import { MoviesModule } from './movies/movies.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [MoviesModule, ConfigModule.forRoot(), AccountModule, UsersModule]
})
export class AppModule {}
