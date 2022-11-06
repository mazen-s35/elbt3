import { DataService } from './service/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'elbt3';
  userList: any;
  storeList: any;

  constructor(private service:DataService) {
    this.userList = this.service.GetUserData();


    this.service.GetStore().subscribe(result => {
      this.storeList = result
      console.log(this.storeList);
    });
  }
}
