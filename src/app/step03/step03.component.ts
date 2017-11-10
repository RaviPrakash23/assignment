import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step03',
  templateUrl: './step03.component.html',
  styleUrls: ['./step03.component.css']
})
export class Step03Component implements OnInit {
  hobbies: string[];
  constructor() { }

  ngOnInit() {
    this.hobbies = ['Cricket', 'Carams', 'Tabel Tannis', 'watching Movies'];
  }
  addHobby(hobby) {
    //console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }
  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

}
