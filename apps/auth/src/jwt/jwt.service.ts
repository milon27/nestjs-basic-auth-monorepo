import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IJwtPayload } from './interfaces/jwt.payload.interface';

@Injectable()
export class MyJwtService extends JwtService {
    generateToken(payload: IJwtPayload) {
        try {
            const token = this.sign(payload, {
                secret: process.env.JWT_SECRET + '',
                expiresIn: '1d'
            })
            return token
        } catch (error) {
            console.log(error);

            return "no token generated"
        }
    }
    getPayloadFromToken(token: string): IJwtPayload {
        try {
            if (!token) {
                throw new Error("Unauthorized Access")
            }
            const jwtpayload = this.verify(token, {
                secret: process.env.JWT_SECRET + ""
            })
            return {
                userId: jwtpayload.userId as string
            } as IJwtPayload
        } catch (e) {
            throw new Error("Unauthorized Access")
        }
    }
}
