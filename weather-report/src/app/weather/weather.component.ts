
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core'

import { IpInfo } from '../ip-info';

import { WeatherInfo } from '../weather-info';

import { DateInfo } from '../date-info'

@Component({

  selector: 'app-weather',

  templateUrl: './weather.component.html',

  styleUrls: ['./weather.component.css'],
  encapsulation: ViewEncapsulation.Emulated

})
export class WeatherComponent implements OnInit {

  private ipData: IpInfo;
  private city: string;
  private weatherData: WeatherInfo;
  private date: Date;
  private src: string;
  private description: string;
  private temp: number;
  private pressure: number;
  private humidity: number;
  private wind: number;
  private deg: number;
  private activeClass: string;
  private FullDate: string;
  private changeCity = true;
  private oldcity;
  private ErrorMessage;
  private count = 1;
  private moreChange = false;
  private change = false;
  private pattern = new RegExp("^[a-zA-Z\s]+$")
  private millseconds: number;
  private someData: string;
  constructor(private http: HttpClient) { }
  @Input() userCity: any;

  @Output() getWeatherReport = new EventEmitter();
  ngOnInit() {

    if (this.userCity == "") {
      this.http.get<IpInfo>("http://ip-api.com/json/").subscribe(data => {
        this.ipData = data;
        this.city = this.ipData.city;
        this.getWeather();


      });
    } else {
      this.city = this.userCity;
      this.getWeather();
    }

  }

  getWeather() {
    if (this.count == 2) {
      this.change = false;
      this.count = 1;
    }
    if (this.city == "") {
      this.ErrorMessage = "Please Enter City";
      this.change = true;


    } else if (!this.pattern.test(this.city)) {
      this.ErrorMessage = "Please Enter Characters only";
      this.change = true;
    }


    else {
      this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&units=metric&APPID=c10bb3bd22f90d636baa008b1529ee25').subscribe(data => {
        this.ErrorMessage = " ";
        this.weatherData = <WeatherInfo>data;
        this.millseconds = this.weatherData.dt.dt;
        this.getDate();
        this.setWeatherIcon();
        this.displayWeather();
        this.someData = this.city;
        this.weatherData.error = { "cod": "", "message": "" };
        this.getWeatherReport.emit(this.weatherData);
      },
        error => {
          this.change = true;
          this.weatherData = <WeatherInfo>error;
          this.weatherData.main = { "temp": 0, "pressure": 0, "humidity": 0 };
          this.weatherData.weather = { "description": "" };
          this.weatherData.wind = { "speed": 0, "deg": 0 };
          this.weatherData.dt = { "dt": 0 };
          this.getWeatherReport.emit(this.weatherData);
          this.ErrorMessage = "Weather Not Available For That City"


        });
      this.count++;
    }
  }
 private  getDate() {
    this.date = new Date(this.millseconds * 1000);
    this.getday();
    this.FullDate = this.date.getDate() + " " + this.FullDate;
  }
  private setWeatherIcon() {


    let nightIconsArray = ['parlyClouds.jpg', 'Clouds.jpg', 'Drizzle.jpg', 'thundery.jpg', 'Rain.jpg', 'Haze.jpg', 'Clear.jpg', 'Mist.jpg'];
    let dayIconsArray = ['Clear.jpg', 'parlyClouds.jpg', 'Haze.jpg', 'Clouds.jpg', 'Drizzle.jpg', 'thundery.jpg', 'Rain.jpg', 'Mist.jpg'];

    if (this.date.getHours() < 6 || this.date.getHours() > 18) {
      for (let icon in nightIconsArray) {
        if ((nightIconsArray[icon]).search(this.weatherData.weather[0].main) != -1) {
          this.src = 'assets/icons/night/' + nightIconsArray[icon]
        }
      }
    } else {
      for (let icon in dayIconsArray) {
        if ((dayIconsArray[icon]).search(this.weatherData.weather[0].main) != -1) {
          this.src = 'assets/icons/night/' + dayIconsArray[icon]
        }
      }
    }
  }
 private  displayWeather() {
    this.description = this.weatherData.weather[0].description;
    this.temp = this.weatherData.main.temp;
    this.pressure = this.weatherData.main.pressure;
    this.humidity = this.weatherData.main.humidity;
    this.wind = this.weatherData.wind.speed;
    this.deg = this.weatherData.wind.deg;
  }
 private  getday() {

    switch (this.date.getDay()) {
      case 1:
        this.FullDate = "Monday";
        break;
      case 2:
        this.FullDate = "Tuesday";
        break;
      case 3:
        this.FullDate = "Wednesday";
        break;
      case 4:
        this.FullDate = "Thursday";
        break;
      case 5:
        this.FullDate = "Friday";
        break;
      case 6:
        this.FullDate = "Saturday";
        break;
      case 7:
        this.FullDate = "Sunday";
        break;

    }

  }
 private displaySearch($event) {
    this.moreChange = false;
    this.change = true;

  }
  count1 = 1;
private  displayMore($event) {

    if (this.count1 == 1) {
      this.change = false;
      this.moreChange = true;
      this.count1++;
    } else {
      this.change = false;
      this.moreChange = false;
      this.count1 = 1;
    }
  }
}