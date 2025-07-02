import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
      @MessagePattern('get_product')
      getProduct(id: string) {
            return {id, name: "laptop", price: 10000}
      }
}
