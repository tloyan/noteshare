import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { REQUEST_USER_KEY } from '../iam.constants';
import { ActiveUserData } from '../interfaces/active-user-data.interface';
import { Request } from 'express';

export const ActiveUser = createParamDecorator(
  (field: keyof ActiveUserData | undefined, ctx: ExecutionContext) => {
    const request: Request = ctx.switchToHttp().getRequest();
    const user: ActiveUserData | undefined = request[
      REQUEST_USER_KEY
    ] as ActiveUserData;
    return field ? user?.[field] : user;
  },
);
