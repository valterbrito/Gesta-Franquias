// Decorator para extrair unitId do usuário autenticado
// Usado em controllers para garantir multitenancy
import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const Unit = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()
    // Retorna o unitId do usuário autenticado
    return request.user.unitId
  }
)
