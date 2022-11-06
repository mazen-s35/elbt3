import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  constructor(private service: DataService) {}

  ngOnInit(): void {}

  off = true;
  popup = false;

  offPopup() {
    this.off = false;
  }
  showPopup() {
    this.popup = !this.popup;
  }

  saveData(name: string) {
    this.service.SaveData(name)
  }
}
