import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { GetWeatherReportService } from './get-weather-report.service'

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [GetWeatherReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
