// Controller de relatórios
// Endpoint para geração de relatório PDF

import { Controller, Get, Query, UseGuards, Res } from '@nestjs/common'
import { ReportsService } from './reports.service'
import { Unit } from '../common/decorators/unit.decorator'
import { AuthGuard } from '@nestjs/passport'
import { Response } from 'express'

@Controller('reports')
@UseGuards(AuthGuard('jwt')) // Protege todas as rotas
export class ReportsController {
  constructor(private readonly service: ReportsService) {}

  // Endpoint para geração de PDF
  @Get('pdf')
  async generatePdf(
    @Unit() unitId: string,
    @Query('start') start: string,
    @Query('end') end: string,
    @Res() res: Response
  ) {
    // Chama o service para gerar e enviar PDF
    return this.service.generatePdf(unitId, start, end, res)
  }
}
