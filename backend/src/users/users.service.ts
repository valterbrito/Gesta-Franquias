// Service de usuários
// CRUD de usuários
import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class UsersService {
  // Lista todos os usuários
  async findAll() {
    return prisma.user.findMany()
  }

  // Cria um novo usuário
  async create(dto: any) {
    return prisma.user.create({ data: dto })
  }

  // Busca um usuário específico
  async findOne(id: string) {
    return prisma.user.findUnique({ where: { id } })
  }
}
