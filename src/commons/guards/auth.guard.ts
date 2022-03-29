import { Injectable, CanActivate, ExecutionContext, Inject, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthJwtService } from '../auth-jwt/auth-jwt.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private reflector: Reflector, private readonly AuthJwtService: AuthJwtService) {}

    async canActivate(context: ExecutionContext): Promise<any> {
        const ctx = GqlExecutionContext.create(context);
        const user = ctx.getContext().req.headers;
        const result = await this.AuthJwtService.verityTokenJWT(user.authorization.split(' ')[1]);

        if (result) {
            return true;
        }
        else {
            throw new UnauthorizedException('Unauthorized');
        }
    }
}
