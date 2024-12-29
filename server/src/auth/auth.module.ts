import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { DbModule } from 'src/db/db.module';
import { UsersModule } from 'src/users/users.module';
import { TokenService } from './token.service';

@Module({
  imports: [DbModule, UsersModule],
  providers: [AuthResolver, AuthService, TokenService],
})
export class AuthModule {}
