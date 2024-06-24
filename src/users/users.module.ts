import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { BullModule } from '@nestjs/bull';
import { UserFileUpload } from './user.process';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'UserFiles',
    })
  ],
  controllers: [UserController],
  providers: [UserService, UserFileUpload],
  exports: [BullModule]
})
export class UserModule {}