# Weather Report

Weather report is a simple component developed by using angular and bootstrap Which will give the weather report
for the given location Ex: Pune.

<p align="center"><img src="\demo-img\weather-report-1.png"></p>

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
 getWeatherReport = new EventEmitter();
 getWeatherJson(event){
    console.log("parent")
    console.log(event);
  }
  ```

