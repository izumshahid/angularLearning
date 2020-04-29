import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'projectOne';
  constructor() {
    console.log('this is app constructor');
  }

  @HostListener('click', ['$event'])
  onhostclick(event: Event) {
    alert('Hello Irzum');
  }
}
