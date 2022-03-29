import { Module } from '@nestjs/common';
import { EncryptionsModule } from './encryptions/encryptions.module';

@Module({
  imports: [EncryptionsModule],
  exports: [EncryptionsModule]
})
export class CommonsModule {}
