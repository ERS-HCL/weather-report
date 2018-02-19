# Weather Report

Weather report is a simple component developed by using angular and bootstrap Which will give the weather report
for the given location Ex: Pune.

<p align="center"><img src="\demo-img\weather-report-1.png"></p>

### Note :
when user pass the city name as input user get weather info of that respective city using Http request ,but in stackbliz http module doesnt work , for demo purpose i have taken some static data to view the component through below link.

To preview demo of to Weather report project,[click here](https://stackblitz.com/edit/angular-twn1j8-3luvqp?embed=1&file=src/app/app.component.html&hideNavigation=1&view=preview)

## Using the complete angular project
Download the weather report and install the required packages and run the application

Installing

```
>npm install
```
Run server

```
>ng serve
```

## Different Functionalities involved in this component

By using this component you can get weather details of a particular city or else directly we can get current location 
of a user through IP address and display the weather report. .

## @Input Decorator

@Input decorator will take city name from one variable,that variable having the value what ever user gives.

```
<app-weather [userCity]="cityName" (getWeatherReport)="getWeatherJson($event)" ></app-weather>
```


## @Output Decorator

@Output decorator will give complete weather details of a city in the form of json object.

json object consist of weather details like Temperature,Pressure,humidity and wind etc.

```typescript
 getWeatherJson(weatherdata:WeatherInfo){
    console.log("parent")
    console.log(weatherdata.error);
  }
  ```
  
  weatherdata is output of type WeatherInfo interface
  ## WeatherInfo

```typescript
export interface WeatherInfo {
  main:MainInfo;
  wind:WindInfo;
  weather:Weather;
  dt:DateInfo;
  error:ErrorInfo;
}

```
Main interface WeatherInfo contains sub interfaces to get whole Weather information from json

### MainInfo
 MainInfo interface used to get weather information like temperature,pressure,humidity
```typescript
export interface MainInfo {
    temp:number;
    pressure:number;
    humidity:number;
}

```
### WindInfo
 WindInfo interface used to get weather information like windSpeed
 ```typescript
export interface WindInfo {
    speed:number;
    deg:number; 
}
```

### Weather
 Weather interface used to get weather information like  weather description
 ```typescript
export interface Weather {
    description:string;
}

 ```
