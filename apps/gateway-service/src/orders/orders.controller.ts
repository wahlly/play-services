import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MICROSERVICES_CLIENTS } from '../constant';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('orders')
export class OrdersController {
      constructor(
            @Inject(MICROSERVICES_CLIENTS.ORDERS_SERVICE)
            private orderServiceClient: ClientProxy
      ) {}

      @UseGuards(AuthGuard)
      @Post('create-order')
      createOrder(@Body() order: Record<string, any>) {
            return this.orderServiceClient.send('create-order', order)
      }
}
