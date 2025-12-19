// Controller de transações financeiras
// Todos endpoints exigem unitId para garantir multitenancy
import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common'
import { TransactionsService } from './transactions.service'
import { Unit } from '../common/decorators/unit.decorator'
import { AuthGuard } from '@nestjs/passport'
import { CreateTransactionDto } from './dto/create-transaction.dto'

@Controller('transactions')
@UseGuards(AuthGuard('jwt')) // Protege todas as rotas
export class TransactionsController {
  constructor(private readonly service: TransactionsService) {}

  // Lista todas as transações da unidade
  @Get()
  async findAll(@Unit() unitId: string) {
    // Chama o service passando o unitId
    return this.service.findAll(unitId)
  }

  // Cria uma nova transação para a unidade
  @Post()
  async create(@Unit() unitId: string, @Body() dto: CreateTransactionDto) {
    // Chama o service passando o unitId e dados validados
    return this.service.create(unitId, dto)
  }

  // Busca uma transação específica
  @Get(':id')
  async findOne(@Unit() unitId: string, @Param('id') id: string) {
    // Busca apenas se pertencer à unidade
    return this.service.findOne(unitId, id)
  }
}
