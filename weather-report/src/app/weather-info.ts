
import { MainInfo } from './main-info';
import { WindInfo } from './wind-info';
import { Weather } from './weather';
import {DateInfo} from './date-info';
import {ErrorInfo} from './error-info';
export interface WeatherInfo {
  main:MainInfo;
  wind:WindInfo;
  weather:Weather;
  dt:DateInfo;
  error:ErrorInfo;
}