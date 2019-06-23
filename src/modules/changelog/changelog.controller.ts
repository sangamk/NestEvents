import { CreateChangelogDto } from './create-changelog.dto';
import { ChangelogService } from './changelog.service';
import { Controller, Body, Param, Post, Get } from '@nestjs/common';

@Controller('changelog')
export class ChangelogController 
{
    constructor(private readonly changelogService: ChangelogService){ }

    @Get()
    public async getChangelog() {
        return this.changelogService.getChangelog();
    }

    @Post()
    public async createChangelog(@Param() employeeId: number, @Body() changelog: CreateChangelogDto){
        return this.changelogService.createChanglelog(employeeId, changelog);
    }
}
