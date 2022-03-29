import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';
import { AuthJwtModule } from '../auth-jwt/auth-jwt.module';

@Module({})
export class GuardsModule {
    imports = [AuthJwtModule];
    providers = [
        {
            provide: APP_GUARD,
            useClass: AuthGuard,
        }
    ]

}
