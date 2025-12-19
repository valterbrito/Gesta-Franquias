// Service de unidades de negócio
// CRUD de unidades
import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class UnitsService {
  // Lista todas as unidades
  async findAll() {
    return prisma.unit.findMany()
  }

  // Cria uma nova unidade
  async create(dto: any) {
    return prisma.unit.create({ data: dto })
  }

  // Busca uma unidade específica
  async findOne(id: string) {
    return prisma.unit.findUnique({ where: { id } })
  }
}
