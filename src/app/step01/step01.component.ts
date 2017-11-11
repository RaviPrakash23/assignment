import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step01',
  templateUrl: './step01.component.html',
  styleUrls: ['./step01.component.css']
})
export class Step01Component implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  isShow: boolean = true;

  constructor() { }

  ngOnInit() {
    this.name = 'Ravi Prakash';
    this.age = 40;
    this.email = 'yravi.ui@gmail.com';
    this.address = {
      street: 'VVN Colony, Kukatpally',
      city: 'Hyderabad',
      state: 'Telangana'
    }
    this.hobbies = ['Cricket', 'carroms', 'Table Tennis', 'Watching Movies'];
  }
  onClick() {
    console.log('On click of Hello');
    this.name = 'Y Ravi Prakash';

  }
  togglePanel() {
    this.isShow = !this.isShow;
  }
}
interface Address {
  street: string,
      city: string,
      state: string
};
