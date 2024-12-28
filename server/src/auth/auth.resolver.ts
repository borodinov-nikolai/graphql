import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignUpInput } from './dto/signUp.unput';
import { Auth } from './entities/auth.entity';

@Resolver(()=> Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(()=> Boolean) 
    signUp(@Args('signUpInput') signUpInput: SignUpInput) {
       console.log(signUpInput)
       return true
    }
  
}
