// Filtro global para tratamento de exceções HTTP
// Padroniza respostas de erro para o cliente
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common'
import { Response } from 'express'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const status = exception.getStatus()
    const message = exception.message
    const errorResponse = exception.getResponse()

    response.status(status).json({
      statusCode: status,
      message,
      error: errorResponse,
      timestamp: new Date().toISOString(),
    })
  }
}
