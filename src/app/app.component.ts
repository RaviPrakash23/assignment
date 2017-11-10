import { Component, OnInit } from '@angular/core';
import { routes } from './app.router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  steps: string[];
  ngOnInit() {
    this.steps = ['step01', 'step02', 'step03', 'step04'];
  }
}
