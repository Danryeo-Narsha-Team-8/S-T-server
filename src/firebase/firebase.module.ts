import { Module, Global } from '@nestjs/common';
import { FirebaseCreateService } from './firebase.service';

@Module({
  providers: [FirebaseCreateService],
  exports: [FirebaseCreateService],
})
export class FirebaseModule {}
