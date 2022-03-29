import { Module } from '@nestjs/common';
import { GuardsModule } from '../guards/guards.module';
import { AuthJwtService } from './auth-jwt.service';

@Module({
  providers: [AuthJwtService],
  exports: [AuthJwtService]
})
export class AuthJwtModule {}
