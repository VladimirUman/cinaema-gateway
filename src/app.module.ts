import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AccountModule } from './account/account.module';
import { MoviesModule } from './movies/movies.module';

@Module({
    imports: [MoviesModule, ConfigModule.forRoot(), AccountModule]
})
export class AppModule {}
