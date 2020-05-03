import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyservicesService {
  constructor() {
    console.log('I am speaking from MyServices');
  }
}
