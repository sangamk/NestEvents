import { Module } from '@nestjs/common';
import { ChangelogController } from './changelog.controller';
import { ChangelogService } from './changelog.service';
import { ChangelogEntity } from './changelog.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    TypeOrmModule.forFeature([ChangelogEntity]),
    ClientsModule.register([{ 
      name: 'ChangeLogService', 
      transport: Transport.TCP,
      options: { host: 'localhost', port: 3005 },
    }]),
  ],
  controllers: [ChangelogController],
  providers: [ChangelogService]
})
export class ChangelogModule {}
