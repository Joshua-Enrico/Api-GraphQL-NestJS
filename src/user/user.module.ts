import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { EncryptionsModule } from 'src/commons/encryptions/encryptions.module';

@Module({
  imports: [PrismaModule, EncryptionsModule],
  providers: [UserService, UserResolver]
}) 
export class UserModule {}
