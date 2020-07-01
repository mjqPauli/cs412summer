import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  url = 'http://localhost:3000/ps5b';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getWeather(zipcode: string) {
    // @ts-ignore
    return this.http.post(this.url, {zipCode: zipcode});
  }
}
