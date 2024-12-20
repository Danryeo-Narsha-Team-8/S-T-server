import {
  collection,
  getDocs,
  setDoc,
  doc,
  getDoc,
} from 'firebase/firestore/lite';
import { Injectable } from '@nestjs/common';
import { FirebaseCreateService } from '../firebase/firebase.service';

@Injectable()
export class GetService {
  constructor(private readonly firebaseService: FirebaseCreateService) {}

  Firestore = this.firebaseService.getFirestore();
  DB = this.firebaseService.getDb();
  auth = this.firebaseService.getAuth();

  async getTeacher(name: string): Promise<any> {
    const teacherCol = collection(this.DB, 'teacher');
    const teacherSnapshot = await getDocs(teacherCol);
    const teacherList = teacherSnapshot.docs.map((doc) => doc.data());
    const teacherListLen = teacherList.length;

    let teacherState = {};

    for (let number = 0; number < teacherListLen; number++) {
      if (teacherList[number].name.includes(name)) {
        const teacher = teacherList[number];
        teacherState[number + 1] =
          `${teacher.name} :  ${teacher.communicationState === false ? '불가능' : '가능'} ${teacher.state}\n`;
      }
    }
    return teacherState;
  }
}
