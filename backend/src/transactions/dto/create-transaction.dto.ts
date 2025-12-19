// DTO para criação de transação financeira
// Valida os dados recebidos no endpoint
import { IsString, IsNumber, IsNotEmpty } from 'class-validator'

export class CreateTransactionDto {
  @IsString()
  @IsNotEmpty()
  type: string // Tipo de transação

  @IsNumber()
  amount: number // Valor

  @IsString()
  @IsNotEmpty()
  status: string // Status da transação
}
