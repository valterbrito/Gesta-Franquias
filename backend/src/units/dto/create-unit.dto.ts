// DTO para criação de unidade
// Valida os dados recebidos no endpoint
import { IsString, IsNotEmpty } from 'class-validator'

export class CreateUnitDto {
  @IsString()
  @IsNotEmpty()
  name: string // Nome da unidade

  @IsString()
  @IsNotEmpty()
  cnpj: string // CNPJ da unidade
}
