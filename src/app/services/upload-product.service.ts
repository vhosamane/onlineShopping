import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UploadProductService {

  private basePath: string = '/productImages';

  constructor(private fb: AngularFireDatabase, private _http: HttpClient) {}

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

  pushCategory(category) {
    this.fb.list('/categories').push(category);
  }

  loadAllCatagories() {
    return this._http.get(environment.apiUrl + '/categories.json')
    .pipe(map((res: any) => {
      const data = res;
      const categoryDetails = [];
      for(let key in data) {
        let categoryDetail = data[key];
        categoryDetails.push(categoryDetail);
      }
      return categoryDetails;
    }));
  }
}
