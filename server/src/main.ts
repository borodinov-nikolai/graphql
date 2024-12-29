import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const port = process.env.PORT
  const app = await NestFactory.create(AppModule);
  app.enableCors({origin: true, credentials: true})
  app.use(cookieParser())
  await app.listen(port, ()=> console.log(`server started at ${port}`));
}
bootstrap();
