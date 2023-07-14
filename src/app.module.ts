import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomModule } from './room/room.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [RoomModule, MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
