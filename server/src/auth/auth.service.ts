import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { TokenService } from './token.service';
import { DbService } from 'src/db/db.service';
import { SignUpInput } from './dto/signUp.input';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService, private readonly tokenService: TokenService, private readonly db: DbService) {}

     async signUp(data: SignUpInput) {
        return null
     }
}
