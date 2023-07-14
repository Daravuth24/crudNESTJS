import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesGateway } from './messages.gateway';
import { RedisService } from 'src/redis.service';

@Module({
  providers: [MessagesGateway, MessagesService, RedisService]
})
export class MessagesModule {}
