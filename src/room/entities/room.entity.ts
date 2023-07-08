import { ApiProperty } from "@nestjs/swagger";

export class Room {
    @ApiProperty()
    roomNo: number;

    @ApiProperty()
    name?: string;
}
