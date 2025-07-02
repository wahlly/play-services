import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { firstValueFrom, from } from 'rxjs';

@Controller('orders')
export class OrdersController {
      constructor(
            @Inject("PAYMENTS_SERVICE")
            private paymentServiceClient: ClientProxy
      ) {}

      @MessagePattern('create-order')
      async createOrder(order: any) {
            console.log({message: "order received on the order microservice", order})
            console.log("creating payment...")
            await firstValueFrom(this.paymentServiceClient.send('create-payment', order))
            return {message: "order created", order}
      }
}
