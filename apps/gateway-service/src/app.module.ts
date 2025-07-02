import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MICROSERVICES_CLIENTS } from './constant';
import { OrdersController } from './orders/orders.controller';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MICROSERVICES_CLIENTS.ORDERS_SERVICE,
        transport: Transport.TCP,
        options: { port: 4001 }
      },
      {
        name: MICROSERVICES_CLIENTS.PRODUCTS_SERVICE,
        transport: Transport.TCP,
        options: { port: 4002 }
      },
      {
        name: MICROSERVICES_CLIENTS.USERS_SERVICE,
        transport: Transport.TCP,
        options: { port: 4003 }
      },
      {
        name: MICROSERVICES_CLIENTS.PAYMENTS_SERVICE,
        transport: Transport.TCP,
        options: { port: 4004 }
      },
      {
        name: MICROSERVICES_CLIENTS.AUTH_SERVICE,
        transport: Transport.TCP,
        options: { host: "1127.0.0.1", port: 4005 }
      }
    ])
  ],
  controllers: [AppController, OrdersController, AuthController],
  providers: [AppService],
})
export class AppModule {}
