import { Module } from '@nestjs/common';
import { EncryptionsService } from './encryptions.service';

@Module({
  providers: [EncryptionsService]
})
export class EncryptionsModule {}
