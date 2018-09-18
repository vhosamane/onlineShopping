import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UploadProductService {

  private basePath: string = '/productImages';

  constructor(private fb: AngularFireDatabase) {}

  pushProduct(product) {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${this.basePath}/${product.fileObj.name}`).put(product.fileObj);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {

      },
      (error) => {
        console.log(error);
      },
      () => {
        var storageRef1 = firebase.storage().ref(`${this.basePath}/${product.fileObj.name}`);
        storageRef1.getDownloadURL()
        .then((result) => {
          product.file = result;
          product.createdDate = new Date().toLocaleDateString();
          this.addProduct(product);
        });
      }
    );
  }

  addProduct(product) {
    this.fb.list('/products').push(product);
  }
}
