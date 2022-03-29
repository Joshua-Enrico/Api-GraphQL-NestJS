import { Injectable } from '@nestjs/common';
const CryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');

@Injectable()
export class EncryptionsService {

    encryptPwd(password: string): string {
        return CryptoJs.AES.encrypt(password, process.env.PWDSALT).toString();
    }

    decryptPwd(password: string): string {
        return CryptoJs.AES.decrypt(password, process.env.PWDSALT).toString(CryptoJs.enc.Utf8);
    }

    comparePwd(dbPassword: string, inputPassword: string): boolean {
        if (this.decryptPwd(dbPassword) === inputPassword) {
            return true;
        } else {
            return false;
        }
    }

    generateToken(id: string): string {
        return jwt.sign({
            id: id,
        }, process.env.JWT_SECRET, {
            expiresIn: '3d',
        });
    }
}
