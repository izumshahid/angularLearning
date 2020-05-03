import { Component, HostListener, Inject } from '@angular/core';
import { MyservicesService } from './myservices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'projectOne';
  fullName: string = 'irzum shahid';
  checkVisibilitiy = true;
  switchValue = '';
  employeeName = [
    { name: 'irzum', age: '24' },
    { name: 'talal', age: '26' },
    { name: 'mani', age: '12' },
  ];

  countries = [
    {
      name: 'Pakistan',
      cities: [
        {
          name: 'lahore',
        },
        {
          name: 'Islamabad',
        },
        {
          name: 'Pindi',
        },
      ],
    },
    {
      name: 'India',
      cities: [
        {
          name: 'Dilhi',
        },
        {
          name: 'Chandighar',
        },
        {
          name: 'Bombay',
        },
      ],
    },
  ];

  constructor(@Inject(MyservicesService) myservicesService) {
    console.log(myservicesService);
    console.log('this is app Component');
  }

  // @HostListener('click', ['$event'])
  // onhostclick(event: Event) {
  //   alert('Hello Irzum this is Method Decorator');
  // }

  btnclick() {
    this.checkVisibilitiy = !this.checkVisibilitiy;
  }

  onValueSelect(optionSelected: any) {
    this.switchValue = optionSelected.target.value;
  }
}
