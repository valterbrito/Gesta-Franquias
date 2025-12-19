// DTO para criação de usuário
// Valida os dados recebidos no endpoint
import { IsString, IsEmail, IsNotEmpty } from 'class-validator'

export class CreateUserDto {
  @IsEmail()
  email: string // Email do usuário

  @IsString()
  @IsNotEmpty()
  role: string // Papel do usuário

  @IsString()
  unitId: string // Unidade associada
}
