import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    UserModule, 
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
  ]
})
export class AppModule {}
