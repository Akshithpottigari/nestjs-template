import { HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { JWT_SECRET } from "../../constants";
import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken'

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req : Request, res : Response, next : NextFunction){
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, JWT_SECRET.secretOrKey, (err, decode)=> {
            if (err){
                return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({err});
            } else {
                req['tokenData'] = decode;
                next();
            }
        })
    }
}