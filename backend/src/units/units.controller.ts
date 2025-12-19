// Controller de unidades de negócio
// Endpoints para CRUD de unidades
import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common'
import { UnitsService } from './units.service'
import { AuthGuard } from '@nestjs/passport'
import { RolesGuard } from '../common/guards/roles.guard'
import { CreateUnitDto } from './dto/create-unit.dto'

@Controller('units')
@UseGuards(AuthGuard('jwt'), RolesGuard) // Apenas SUPER_ADMIN pode acessar
export class UnitsController {
  constructor(private readonly service: UnitsService) {}

  // Lista todas as unidades
  @Get()
  async findAll() {
    return this.service.findAll()
  }

  // Cria uma nova unidade
  @Post()
  async create(@Body() dto: CreateUnitDto) {
    return this.service.create(dto)
  }

  // Busca uma unidade específica
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.service.findOne(id)
  }
}
