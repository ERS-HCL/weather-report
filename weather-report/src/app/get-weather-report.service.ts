import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
import { Observable } from 'rxjs/Observable';
@Injectable()
export class GetWeatherReportService {
  constructor(private http:HttpClient) { }
  url='http://api.openweathermap.org/data/2.5/weather?q=pune&units=metric&APPID=c10bb3bd22f90d636baa008b1529ee25';
getWeatherReport(){
 
return this.http.get(this.url).map((response:Response)=>response.json())
.catch(this.errorReport);
}
errorReport(error:Error){
  console.log("service");
return Observable.throw(error||"Weather Report NotFound");
}


}
