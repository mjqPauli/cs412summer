import { Component } from '@angular/core';
import {data} from './data/mockData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS6';
  data = data;
  selected: any;

  // tslint:disable-next-line:typedef
  showValue(key: string) {
    if (data[key]) {
      this.selected = data[key];
    }
  }
}
