import { Module } from '@nestjs/common';

import { AccountModule } from './account/account.module';
import { FilesModule } from './files/files.module';
import { MoviesModule } from './movies/movies.module';

@Module({
    imports: [MoviesModule, AccountModule, FilesModule]
})
export class AppModule {}
