import { Module } from '@nestjs/common';

import { AccountModule } from './modules/account/account.module';
import { DevelopersModule } from './modules/developers/developers.module';
import { FilesModule } from './modules/files/files.module';
import { MonthProjectHoursModule } from './modules/hours/hours.module';
import { MoviesModule } from './modules/movies/movies.module';
import { ProjectsModule } from './modules/projects/projects.module';

@Module({
    imports: [MoviesModule, AccountModule, FilesModule, DevelopersModule, ProjectsModule, MonthProjectHoursModule]
})
export class AppModule {}
