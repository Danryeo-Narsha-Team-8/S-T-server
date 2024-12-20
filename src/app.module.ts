import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetService } from './get/get.service';
import { GetController } from './get/get.controller';
import { FirebaseModule } from './firebase/firebase.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // ConfigService를 글로벌로 사용 가능하도록 설정
      envFilePath: '.env', // 환경 변수 파일 경로
    }),
    FirebaseModule, // Firebase 모듈 추가
  ],
  controllers: [AppController, GetController], // 컨트롤러만 포함
  providers: [AppService, GetService], // 서비스만 포함
})
export class AppModule {}
