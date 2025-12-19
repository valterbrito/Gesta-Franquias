// Módulo de autenticação
// Responsável por configurar estratégias JWT e providers
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { AuthService } from './auth.service'
import { JwtStrategy } from './jwt.strategy'

@Module({
  imports: [JwtModule.register({})], // Configuração do JWT
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
