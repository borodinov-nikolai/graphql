import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  providers: [UsersResolver, UsersService],
  exports: [UsersService]
})
export class UsersModule {}
