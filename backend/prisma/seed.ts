// Seed de dados mockados para testes e desenvolvimento
// Comentários explicam cada etapa

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Cria unidades
  const unit1 = await prisma.unit.create({
    data: {
      name: 'Unidade Central',
      cnpj: '00.000.000/0001-91',
    },
  })
  const unit2 = await prisma.unit.create({
    data: {
      name: 'Unidade Filial',
      cnpj: '11.111.111/0001-92',
    },
  })

  // Cria usuários
  await prisma.user.createMany({
    data: [
      {
        email: 'admin@central.com',
        role: 'SUPER_ADMIN',
        unitId: unit1.id,
      },
      {
        email: 'user@filial.com',
        role: 'USER',
        unitId: unit2.id,
      },
    ],
  })

  // Cria transações
  await prisma.transaction.createMany({
    data: [
      {
        unitId: unit1.id,
        type: 'entrada',
        amount: 10000,
        status: 'confirmada',
      },
      {
        unitId: unit2.id,
        type: 'saída',
        amount: 2500,
        status: 'pendente',
      },
    ],
  })

  // Cria fluxo de caixa
  await prisma.cashflow.createMany({
    data: [
      {
        unitId: unit1.id,
        month: 12,
        year: 2025,
        totalIn: 10000,
        totalOut: 5000,
      },
      {
        unitId: unit2.id,
        month: 12,
        year: 2025,
        totalIn: 3000,
        totalOut: 2500,
      },
    ],
  })
}

main()
  .catch(e => {
    // Log de erro
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    // Encerra conexão
    await prisma.$disconnect()
  })
