import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

import { AccountService } from '../account/account.service';

@Injectable()
export class AuthAdminGuard implements CanActivate {
    constructor(private readonly accountService: AccountService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const accessToken = request?.headers?.authorization;

        if (!accessToken) {
            return false;
        }

        const user = await this.accountService.getCurrentUser(accessToken.replace('Bearer ', ''));

        if (user?.role === 'admin') {
            return true;
        }

        return false;
    }
}
