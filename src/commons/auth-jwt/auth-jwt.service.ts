import { Injectable } from '@nestjs/common';
const jwt = require('jsonwebtoken');

@Injectable()
export class AuthJwtService {

    async verityTokenJWT(token: string): Promise<boolean> {

        return jwt.verify(token, process.env.JWT_SECRET, async (err:any, authData: any) => {
            if (err) {
                return false;
            } else {
                return true
            }
        });

    }

}
