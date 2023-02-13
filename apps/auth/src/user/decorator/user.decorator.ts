import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IJwtPayload } from '../../jwt/interfaces/jwt.payload.interface';

export const CurrentUser = createParamDecorator(
    (data: string, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        const user = request.user;

        return data ? user?.[data] as any : user as IJwtPayload;
    },
);
