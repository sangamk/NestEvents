import { AppController } from './modules/app.controller';
import { Module } from '@nestjs/common';
import { ChangelogModule } from './modules/changelog/changelog.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ChangelogModule,
    TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  })],
  controllers: [AppController]
})
export class AppModule { }
