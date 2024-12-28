import { Resolver } from '@nestjs/graphql';
import { DbService } from './db.service';

@Resolver()
export class DbResolver {
  constructor(private readonly dbService: DbService) {}
}
