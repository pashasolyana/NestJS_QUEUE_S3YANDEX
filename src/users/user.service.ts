import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class UserService {
  constructor(
    @InjectQueue('UserFiles') private readonly fileUpload: Queue
  ) {}
  
  async uploadFile(file) {
    await this.fileUpload.add('imageToS3', {file});
  }
}