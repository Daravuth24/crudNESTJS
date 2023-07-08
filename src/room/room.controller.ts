import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { RoomService } from './room.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateRoomDto } from './dto/create-room.dto';

@ApiTags('room')
@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}
  
  @Get()
  async getAllRooms(): Promise<any[]> {
    return this.roomService.getAllRooms();
  }

  @Post()
  async createRoom(@Body() body: CreateRoomDto): Promise<void> {
    await this.roomService.createRoom(body);
  }

  @Put(':id')
  async updateRoom(@Param('id') roomId: string, @Body() room: any): Promise<void> {
    await this.roomService.updateRoom(roomId, room);
  }

  @Delete(':id')
  async deleteRoom(@Param('id') roomId: string): Promise<void> {
    await this.roomService.deleteRoom(roomId);
  }

  @Get(':id')
  async getRoom(@Param('id') roomId: string): Promise<any | null> {
    return this.roomService.getRoom(roomId);
  }

}
