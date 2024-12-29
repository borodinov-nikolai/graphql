import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { UsersService } from 'src/users/users.service';
import { SignUpInput } from './dto/signUp.unput';
import * as bcrypt from 'bcrypt'
import { TokenService } from './token.service';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService, private readonly db: DbService, private readonly tokenService: TokenService){}

     async signUp(data: SignUpInput){
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

     async refresh(token?: string) {
        if (!token) {
            throw new UnauthorizedException()
         }
   
         const payload: { id: number, login: string, role: 'SUPER_ADMIN' | 'ADMIN' | 'USER'} | undefined = await this.tokenService.decodeToken(token)
     
   
         if (!payload) {
            throw new UnauthorizedException()
         }
   
   
         const userToken = await this.db.refreshToken.findUnique({
            where: {
               userId: payload.id
            }
         })
   
     
   
         if (userToken?.token === token) {
            const tokens = await this.tokenService.createTokens(payload)
            await this.db.refreshToken.update({
               where: {
                  userId: payload.id
               },
               data: {
                  token: tokens.refreshToken
               }
            })
   
            return tokens
         } else {
            throw new UnauthorizedException()
         }
     }

     async getMe(token?: string) {

      if (!token) {
         throw new ForbiddenException()
      }

      const payload: { id: number } | undefined = await this.tokenService.decodeToken(token)
      if (!payload) {
         throw new ForbiddenException()
      }

      try {
         const user = await this.db.user.findUnique({
            where: {
               id: payload?.id
            }
         })
         if (!user) {
            throw new ForbiddenException()
         }
         delete user.password
         return user
      } catch (e) {
         console.error(e)
         throw new ForbiddenException()
      }
     }
}
