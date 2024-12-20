import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore/lite';

@Injectable()
export class FirebaseCreateService {
  private readonly app: FirebaseApp;
  private readonly auth: Auth;
  private readonly db: Firestore;

  constructor(private configService: ConfigService) {
    const apiKey = this.configService.get<string>('REACT_APP_apiKey');
    const authDomain = this.configService.get<string>('REACT_APP_authDomain');
    const projectId = this.configService.get<string>('REACT_APP_projectId');
    const storageBucket = this.configService.get<string>(
      'REACT_APP_storageBucket',
    );
    const messagingSenderId = this.configService.get<string>(
      'REACT_APP_messagingSenderId',
    );
    const appId = this.configService.get<string>('REACT_APP_appId');
    const measurementId = this.configService.get<string>(
      'REACT_APP_measurementId',
    );

    const firebaseConfig = {
      apiKey: apiKey,
      authDomain: authDomain,
      projectId: projectId,
      storageBucket: storageBucket,
      messagingSenderId: messagingSenderId,
      appId: appId,
      measurementId: measurementId,
    };

    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.db = getFirestore(this.app);
  }

  getDb() {
    return this.db;
  }

  getAuth() {
    return this.auth;
  }

  getFirestore() {
    return this.db;
  }
}
