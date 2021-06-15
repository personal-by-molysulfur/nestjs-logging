import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLogger } from './logging/mylogger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['warn', 'verbose']
  });
  app.useLogger(app.get(MyLogger));
  await app.listen(3000);
}
bootstrap();
