// Guard para controle de acesso por papel (RBAC)
// Permite acesso apenas para usuários com papel específico
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(ctx: ExecutionContext): boolean {
    const { user } = ctx.switchToHttp().getRequest()
    // Permite apenas SUPER_ADMIN
    return user.role === 'SUPER_ADMIN'
  }
}
