import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';
import { RedisService } from '../redis.service';



@Injectable()
export class MessagesService {
  private readonly prefix = 'message';

  constructor (private readonly redisService: RedisService) {}
  //Database here
  messages: Message[] = [{name: 'John', text: 'Hello!'}];
  clientToUser = {};
  

  identify(name: string, clientId: string) {
    this.clientToUser[clientId] = name;

    return Object.values(this.clientToUser);
  }

  getClientName(clientId: string) {
    return this.clientToUser[clientId];
  }

  async create(createMessageDto: CreateMessageDto, clientId: string) {
    const message = {
      name: this.clientToUser[clientId],
      text: createMessageDto.text,
    };
    
    await this.redisService.set('messages', JSON.stringify(message));
    
    return message;
  }

  findAll() {
    return this.redisService.get('messages').then((data) => {
      if (data) {
        return JSON.parse(data);
      }
      return [];
    });
  }

}
