import { Injectable } from '@angular/core';
import { AuthService } from '../auth-service/auth-service.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private authService: AuthService, private fireStorage: AngularFireStorage) { }



  upload(file, metadata?: any) {

    const filePath = this.getFilePath(file.name);
    const fileRef = this.fireStorage.ref(filePath);
    const uploadTask = fileRef.put(file);
    return uploadTask;

  }

  getFilePath(file) {

    if (!file || file == null) {
      return null;
    }
    const currentUser = this.authService.getCurrentUser();
    const path = `files/${currentUser.uid}/${this.getUniqId()}-${file.name}`;
    return path;
  }

  getUniqId() {
    return new Date().getTime() + '';
  }


}
