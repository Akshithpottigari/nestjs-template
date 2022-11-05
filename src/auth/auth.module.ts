import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { AuthService } from './auth.service';
import { PassportModule } from "@nestjs/passport";
import { AuthMiddleware } from "src/core/middlewares/auth.middleware";
@Module({
  imports: [PassportModule],
  providers: [AuthService]
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware)
      .exclude(

      // You should exclude some of the routes where auth is not required;
      // {
      //     path : "/user/login", method : RequestMethod.POST,
      // },
      // {
      //     path : "/user/register", method : RequestMethod.POST,
      // },
      // {
      //     path : "/user/verifyToken", method : RequestMethod.POST,
      // },
    )
      .forRoutes(
      // YOu should be applying the middleware to all of the other routes;
      // {
      //     path : "*", method : RequestMethod.ALL
      // }
    )
  }
}