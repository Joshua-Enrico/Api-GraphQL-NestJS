import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { CommonsModule } from './commons/commons.module';


@Module({
  imports: [CoreModule, UserModule, CommonsModule],
})
export class AppModule {}
