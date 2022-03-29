import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { CommonsModule } from 'src/commons/commons.module';

@Module({
  imports: [PrismaModule, CommonsModule],
  providers: [UserService, UserResolver]
}) 
export class UserModule {}
