// Arquivo bootstrap do NestJS
// Aplica filtro global de exceção e configura Swagger
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { HttpExceptionFilter } from './common/filters/http-exception.filter'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  // Cria aplicação NestJS
  const app = await NestFactory.create(AppModule)

  // Aplica filtro global de exceção
  app.useGlobalFilters(new HttpExceptionFilter())

  // Configuração Swagger para documentação automática
  const config = new DocumentBuilder()
    .setTitle('Gestão SaaS API')
    .setDescription('Documentação das rotas REST do backend')
    .setVersion('1.0')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  // Inicia servidor na porta 3000
  await app.listen(3000)
}

bootstrap()
