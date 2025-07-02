import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { readFileSync } from 'fs';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: 4003,
        tlsOptions: {
          key: readFileSync("../../certs/server.key"),
          cert: readFileSync("../../certs/server.cert"),
          ca: readFileSync("../../certs/ca.cert")
        }
      }
    }
  );
  await app.listen();
  console.log("User microservice is running on port 4001")
}
bootstrap();
