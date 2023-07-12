import { ApiProperty } from "@nestjs/swagger";

export class CreateRoomDto {
    id: number;
    @ApiProperty()
    name: string;

    @ApiProperty()
    roomNo: number;
}