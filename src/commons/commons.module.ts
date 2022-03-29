import { Module } from '@nestjs/common';
import { EncryptionsModule } from './encryptions/encryptions.module';
import { AuthJwtModule } from './auth-jwt/auth-jwt.module';
import { GuardsModule } from './guards/guards.module';

@Module({
  imports: [EncryptionsModule, AuthJwtModule, GuardsModule],
  exports: [EncryptionsModule, GuardsModule, AuthJwtModule],
})
export class CommonsModule {}
