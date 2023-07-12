import { Injectable } from '@nestjs/common';
import { RedisService } from '../redis.service';
import { CreateRoomDto } from './dto/create-room.dto';


@Injectable()
export class RoomService {
  private readonly prefix = 'room';

  constructor(private readonly redisService: RedisService) {}

  async createRoom(room: any): Promise<void> {
    const id = await this.redisService.incr('room:id'); 
    room.id = id;
    await this.redisService.set(`${this.prefix}:${id}`, JSON.stringify(room));  
  }

  async updateRoom(roomId: string, room: any): Promise<void> {
    await this.redisService.set(`${this.prefix}:${roomId}`, JSON.stringify(room));
  }

  async deleteRoom(roomId: string): Promise<void> {
    await this.redisService.delete(`${this.prefix}:${roomId}`);
  }

  async getRoom(roomId: string): Promise<CreateRoomDto | null> {
    const roomData = await this.redisService.get(`${this.prefix}:${roomId}`);
    return roomData ? JSON.parse(roomData) : null;
  }

  async getAllRooms(): Promise<any[]> {
    const keys = await this.redisService.getKeys(`${this.prefix}:*`);
    const roomDataList = await Promise.all(keys.map((key) => this.redisService.get(key)));
    return roomDataList.map((roomData) => JSON.parse(roomData));
  }
}
