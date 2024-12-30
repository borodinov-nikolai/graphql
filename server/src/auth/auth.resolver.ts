import { Args, Context, Field, Mutation, ObjectType, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignUpInput } from './dto/signUp.unput';
import { Auth } from './entities/auth.entity';
import { Request, Response } from 'express';
import { User } from 'src/users/entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';



@ObjectType()
class AuthResponse {
  @Field()
  jwt: string;
}

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) { }

  @Mutation(() => AuthResponse)
  async signUp(@Args('signUpInput') signUpInput: SignUpInput, @Context('res') res: Response): Promise<AuthResponse> {
    const { accessToken, refreshToken } = await this.authService.signUp(signUpInput)
    res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 })
    return { jwt: accessToken }
  }

  @Query(() => AuthResponse)
  async refresh(@Context('res') res: Response, @Context('req') req: Request): Promise<AuthResponse> {
    const refreshToken = req.cookies.refreshToken
    const tokens = await this.authService.refresh(refreshToken)
    if (tokens) {
      res.cookie('refreshToken', tokens.refreshToken, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 })
      return { jwt: tokens.accessToken }
    }
  }


  @UseGuards(RolesGuard)
  @Roles(['USER'])
  @Query(() => User)
  async getMe(@Context('req') req: Request) {
    const token = req.headers['authorization']?.split(' ')[1]
    return await this.authService.getMe(token)
  }

}
