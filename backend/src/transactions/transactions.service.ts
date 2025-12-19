// Service de transações financeiras
// Todas queries filtram por unitId para garantir isolamento
import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class TransactionsService {
  // Lista todas as transações da unidade
  async findAll(unitId: string) {
    // Busca apenas transações da unidade
    return prisma.transaction.findMany({ where: { unitId } })
  }

  // Cria uma nova transação
  async create(unitId: string, dto: any) {
    // Cria associando à unidade
    return prisma.transaction.create({
      data: { ...dto, unitId },
    })
  }

  // Busca uma transação específica
  async findOne(unitId: string, id: string) {
    // Busca apenas se pertencer à unidade
    return prisma.transaction.findFirst({ where: { id, unitId } })
  }
}
