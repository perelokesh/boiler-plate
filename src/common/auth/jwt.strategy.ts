import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from "./auth.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
 constructor (private readonly authService:AuthService){
  super({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
  })
 }

 async validate(payload:any){
  const user = this.authService.findByEmail({ email: payload.email});
  if (!user) {
    throw new UnauthorizedException('Invalid token');
  }
  
  return user;
   } catch (error) {
  throw new UnauthorizedException('Invalid token');
  }
}