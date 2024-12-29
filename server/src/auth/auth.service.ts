import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { UsersService } from 'src/users/users.service';
import { SignUpInput } from './dto/signUp.unput';
import * as bcrypt from 'bcrypt'
import { TokenService } from './token.service';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService, private readonly db: DbService, private readonly tokenService: TokenService){}

     signUp = async (data: SignUpInput)=> {
        const salt = 12
        const password = data.password
        const hash = await bcrypt.hash(password, salt)
        const user = await this.usersService.create({ ...data, password: hash })
        const { id, login, role } = user
        const tokens = await this.tokenService.createTokens({ id, login, role })
        await this.db.refreshToken.create({
            data: {
                userId: id,
                token: tokens.refreshToken
            }
        })

        return tokens
     }
}
