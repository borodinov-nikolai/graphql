import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT
  const app = await NestFactory.create(AppModule);
  app.enableCors({origin: '*'})
  await app.listen(port, ()=> console.log(`server started at ${port}`));
}
bootstrap();
