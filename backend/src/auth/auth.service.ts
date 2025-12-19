// Configuração de autenticação do serviço
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  // Função mockada para login
  async login(email: string, password: string) {
    const payload = { email, sub: 'user-id', role: 'USER', unitId: 'unit-id' }
    return {
      access_token: this.jwtService.sign(payload),
    }
  }

  // Função mockada para validação
  async validateUser(payload: any) {
    return { email: payload.email, role: payload.role, unitId: payload.unitId }
  }
}
