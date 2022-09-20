/**
 * main.ts는 시작점이며 NestFactory.create()를 통해 애플리케이션 인스턴스를 생성합니다.
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /**
   * 현재 express를 사용하고 있으므로 elisten() 메서드를 사용하여 파라미터에 포트넘버를 입렵
   */
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`listening on port ${port}`);
}
bootstrap();
