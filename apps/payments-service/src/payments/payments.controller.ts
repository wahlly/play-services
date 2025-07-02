import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('payments')
export class PaymentsController {
      @MessagePattern('create-payment')
      createPayment(order: any) {
            console.log("request for payment received, generating...")
            return {
                  orderRef: order.ref,
                  reference: "KLDKFF98SJDKU",
                  amount: 3500,
                  discount: 0,
                  amountPaid: 3500,
                  status: "success",
                  order: order
            }
      }
}
