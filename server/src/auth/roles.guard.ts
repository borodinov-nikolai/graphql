import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Request } from "express";
import { Roles } from "./roles.decorator";
import { TokenService } from "./token.service";
import { GqlExecutionContext } from "@nestjs/graphql";



@Injectable()
export class RolesGuard implements CanActivate {
   constructor(private reflector: Reflector, private tokenService: TokenService){}
   async canActivate(
        context: ExecutionContext,
   ): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req

    const roles = this.reflector.get<string[]>(Roles, context.getHandler())

    if(!roles) {
      return true
    }

      const token = request?.headers?.authorization?.split(' ')[1]

  if(token) {
       const payload: {role: string} | undefined = await this.tokenService.decodeToken(token)
       if(payload && roles.includes(payload.role)) { 
         return true
        }
    }
       return false
   }
     
}