import { Args, Context, Field, Mutation, ObjectType, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignUpInput } from './dto/signUp.unput';
import { Auth } from './entities/auth.entity';
import { Request, Response } from 'express';
import { User } from 'src/users/entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';
import { SignInInput } from './dto/signIn.input';



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
    res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 })
    return { jwt: accessToken }
  }

  @Mutation(()=> AuthResponse)
  async signIn(@Args('signInInput') signInINput: SignInInput, @Context('res') res: Response): Promise<AuthResponse> {
    const {accessToken, refreshToken} = await this.authService.signIn(signInINput)
    res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 })
    return {jwt: accessToken}
  }

  @Query(() => AuthResponse)
  async tokensRefresh(@Context('res') res: Response, @Context('req') req: Request): Promise<AuthResponse> {
    const refreshToken = req.cookies.jwt
    const tokens = await this.authService.refresh(refreshToken)
    if (tokens) {
      res.cookie('jwt', tokens.refreshToken, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 })
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
