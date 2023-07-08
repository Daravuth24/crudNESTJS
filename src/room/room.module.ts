import { Module } from '@nestjs/common';
import { RedisService } from '../redis.service';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';

@Module({
  providers: [RedisService, RoomService],
  controllers: [RoomController],
})
export class RoomModule {}
