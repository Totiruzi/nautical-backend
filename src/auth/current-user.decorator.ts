import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { User } from 'src/users/models/user.model';

export const getCurrentUserByContext = (context: ExecutionContext): User => {
    if (context.getType() === 'http') {
        const request = context.switchToHttp().getRequest();
        return request.user;
    }

    const ctx = GqlExecutionContext.create(context);
    const user = ctx.getContext().req.user;
    return user;
};

export const CurrentUser = createParamDecorator((_data: unknown, context: ExecutionContext) => {
    getCurrentUserByContext(context);
    // return getCurrentUserByContext(context);
});
