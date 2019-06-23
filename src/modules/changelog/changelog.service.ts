import { CreateChangelogDto } from './create-changelog.dto';
import { Injectable, Inject } from '@nestjs/common';
import { ChangelogEntity } from './changelog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientProxy } from '@nestjs/microservices';


@Injectable()
export class ChangelogService {
    constructor(
        @InjectRepository(ChangelogEntity) private readonly changelogRepository: Repository<ChangelogEntity>,
        @Inject('ChangeLogService') private readonly client: ClientProxy
    ) { }

    public async getChangelog() {
        this.client.emit<number>('changelog_get_event', { createdBy: 1 }).toPromise();
        const result = await this.client.send({ cmd: 'changelog_get_message' }, { createdBy: 1 }).toPromise();
        console.info('result', result);
        return this.changelogRepository.find();
    }

    public async createChanglelog(createdBy: number, changelogDto: CreateChangelogDto) {
        return this.changelogRepository.save(changelogDto);
    }
}
