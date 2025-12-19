// Estratégia JWT para autenticação
// Valida o token e extrai informações do usuário
import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'default-secret',
    })
  }

  async validate(payload: any) {
    // Retorna dados do usuário para uso nos guards
    return { userId: payload.sub, email: payload.email, role: payload.role, unitId: payload.unitId }
  }
}
