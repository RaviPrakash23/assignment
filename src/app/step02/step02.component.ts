import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-step02',
  templateUrl: './step02.component.html',
  styleUrls: ['./step02.component.css']
})
export class Step02Component implements OnInit {

  posts: post[];

  constructor( private dataService: DataService) {
    console.log('Constructor Run...');
   }

  ngOnInit() {
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

}
interface post {
  id: number,
  title: string,
  body: string,
  userId: number
}
