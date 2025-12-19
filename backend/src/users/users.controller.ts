// Controller de usuários
// Endpoints para CRUD de usuários
import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common'
import { UsersService } from './users.service'
import { AuthGuard } from '@nestjs/passport'
import { RolesGuard } from '../common/guards/roles.guard'
import { CreateUserDto } from './dto/create-user.dto'

@Controller('users')
@UseGuards(AuthGuard('jwt'), RolesGuard) // Apenas SUPER_ADMIN pode acessar
export class UsersController {
  constructor(private readonly service: UsersService) {}

  // Lista todos os usuários
  @Get()
  async findAll() {
    return this.service.findAll()
  }

  // Cria um novo usuário
  @Post()
  async create(@Body() dto: CreateUserDto) {
    return this.service.create(dto)
  }

  // Busca um usuário específico
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.service.findOne(id)
  }
}
