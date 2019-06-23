import { ApiModelProperty } from "@nestjs/swagger";

export class CreateChangelogDto {
    @ApiModelProperty()
    version: string;
}