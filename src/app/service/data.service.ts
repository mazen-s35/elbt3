import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  userInfo = [
    { Name: 'mazen', Mark: 50 },
    { Name: 'Mo ashraf', Mark: 60 },
    { Name: 'Marwan', Mark: 70 },
  ];
  apiUil = 'https://api.thecatapi.com/v1/images/search';
  userData = { Name: '', Mark: 0 };

  storeList: any;
  GetUserData() {
    return this.userInfo;
  }
  GetStore() {
    return this.http.get(this.apiUil);
  }

  SaveData(name: string) {
    this.userData = { Name: name, Mark: 100 };
    this.userInfo.push(this.userData);
    console.log(this.userInfo)
  }
  constructor(private http: HttpClient) {}
}
