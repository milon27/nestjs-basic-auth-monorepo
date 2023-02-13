import { Injectable } from '@nestjs/common';
import jwt from 'jsonwebtoken';
import { IJwtPayload } from './interfaces/jwt.payload.interface';

@Injectable()
export class JwtService {
    generateToken(payload: IJwtPayload) {
        return jwt.sign(payload as any, process.env.JWT_SECRET + '')
    }
    getPayloadFromToken(token: string): IJwtPayload {
        try {
            if (!token) {
                throw new Error("Unauthorized Access")
            }
            const jwtpayload = jwt.verify(token, process.env.JWT_SECRET + "")
            const payload = jwtpayload as jwt.JwtPayload
            return {
                userId: payload.userId as string
            } as IJwtPayload
        } catch (e) {
            throw new Error("Unauthorized Access")
        }
    }
}
