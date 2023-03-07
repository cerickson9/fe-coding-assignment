import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForecastDay } from '../models/forecast.models';
import { apiKey, baseUrl } from './constants';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private httpClient: HttpClient) { }

  getDailyForecast(numDays: number, locationId?: string) : Observable<ForecastDay[]> {
    let location = locationId ? locationId : '350540';
    const params = new HttpParams()
      .set('apiKey', apiKey)
    return this.httpClient.get(`${baseUrl}/forecasts/v1/daily/${numDays}day/${location}`,{ params }) as Observable<ForecastDay[]>
  }

}
