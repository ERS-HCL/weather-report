import { Component } from '@angular/core';
import { WeatherInfo } from './weather-info';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
   cityName="";
  getWeatherJson(weatherdata:WeatherInfo){
    console.log("parent")
    console.log(weatherdata);
  }
}
