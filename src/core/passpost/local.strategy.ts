import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from "src/auth/auth.service";
import { JWT_SECRET } from "src/constants";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET.secretOrKey,
    });
  }
  async validate(EMAIL: string, PASSWORD: string) {
    // You should write a function that will do the validating of user in authService;
      // let user = await this.authService.validateUser(EMAIL, PASSWORD);
      // if (!user) {
      // throw new UnauthorizedException();
      // }
      // return user;
    return true;
  }
}