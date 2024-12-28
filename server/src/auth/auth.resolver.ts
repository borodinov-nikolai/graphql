import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignUpInput } from './dto/signUp.input';
import { Res } from '@nestjs/common';
import { Response } from 'express';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation('signUp') 
   signUp(@Args('signUpInput') signUpInput: SignUpInput, @Res({passthrough: true}) res: Response) {
    console.log(signUpInput)
    return this.authService.signUp(signUpInput)
  }
}
