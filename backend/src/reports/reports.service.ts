// Service de relatórios
// Gera PDF de transações filtradas por período e unidade

import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import PDFDocument from 'pdfkit'
import { Response } from 'express'

const prisma = new PrismaClient()

@Injectable()
export class ReportsService {
  // Gera PDF de transações da unidade no período
  async generatePdf(unitId: string, start: string, end: string, res: Response) {
    // Busca transações filtradas
    const transactions = await prisma.transaction.findMany({
      where: {
        unitId,
        createdAt: {
          gte: new Date(start),
          lte: new Date(end),
        },
      },
    })

    // Cria documento PDF
    const doc = new PDFDocument()
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'attachment; filename=relatorio.pdf')
    doc.pipe(res)

    // Cabeçalho do relatório
    doc.fontSize(18).text('Relatório de Transações', { align: 'center' })
    doc.moveDown()
    doc.fontSize(12).text(`Unidade: ${unitId}`)
    doc.text(`Período: ${start} a ${end}`)
    doc.moveDown()

    // Lista de transações
    transactions.forEach(tx => {
      doc.text(`Tipo: ${tx.type} | Valor: R$ ${tx.amount} | Status: ${tx.status} | Data: ${tx.createdAt.toISOString().slice(0,10)}`)
    })

    // Assinatura da unidade
    doc.moveDown(2)
    doc.text('Assinatura: ____________________________')

    doc.end()
  }
}
