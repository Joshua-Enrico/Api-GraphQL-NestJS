import { Injectable } from '@nestjs/common';
const CryptoJs = require('crypto-js');

@Injectable()
export class EncryptionsService {

    encryptPwd(password: string): string {
        return CryptoJs.AES.encrypt(password, process.env.PWDSALT).toString();
    }

    decryptPwd(password: string): string {
        return CryptoJs.AES.decrypt(password, process.env.PWDSALT).toString(CryptoJs.enc.Utf8);
    }
}
