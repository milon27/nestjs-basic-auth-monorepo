import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IJwtPayload } from '../../jwt/interfaces/jwt.payload.interface';
import { MyJwtService } from '../../jwt/jwt.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private readonly jwt: MyJwtService) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const req = context.switchToHttp().getRequest()
      const token = req.headers['authorization'].split(" ")[1]
      const payload = this.jwt.getPayloadFromToken(token) as IJwtPayload
      req.user = payload
      return true;
    } catch (error) {
      // console.log("auth.guard", error);
      return false;
    }
  }
}
