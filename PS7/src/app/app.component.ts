import { Component } from '@angular/core';
import {GetWeatherService} from './get-weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;

  constructor(private currentWeather: GetWeatherService) {}
  // tslint:disable-next-line:typedef
  getWeather(zipcode: string) {
    this.currentWeather.getWeather(zipcode).subscribe(
      response => {
        console.log('get here');
        this.data = response;
      });
  }
}
