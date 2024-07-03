import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import axios from 'axios';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setInterval(() => {
    ['https://chessitibackend.onrender.com/'].forEach((url) => {
      console.log(url);
      axios.get(url);
    });
  }, 40000);
  await app.listen(3000);
}
bootstrap();
