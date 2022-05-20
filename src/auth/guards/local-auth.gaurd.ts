import { AuthGuard } from "@nestjs/passport";

export class LocalAuthGard extends AuthGuard('local') {}