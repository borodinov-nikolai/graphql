import { ConflictException, Injectable } from '@nestjs/common';
import { SignUpInput } from 'src/auth/dto/signUp.unput';
import { DbService } from 'src/db/db.service';


@Injectable()
export class UsersService {
constructor (private readonly db: DbService){}


   findAll = async (param: any)=> {
    const {search} = param || {}
    const users = await this.db.user.findMany({
      where: {
        login: {
          contains: search,
          mode: 'insensitive'
        }
      }
    })
    return users
   }

   create = async (data: SignUpInput)=> {
    const candidatEmail = await this.db.user.findUnique({
      where: {
        email: data.email
      }
    })
    const candidatLogin = await this.db.user.findUnique({
      where: {
        login: data.login
      }
    })
    if(candidatEmail) {
      throw new ConflictException('User with this email already exists')
    }
    if(candidatLogin) {
      throw new ConflictException('User with this login already exists')
    }
    const user = await this.db.user.create({
        data
    })
      return user
  }

  update = async ({userId, data})=> {
    await this.db.user.update({
      where:{
        id: userId
      },
       data
    })
  }
  
}
