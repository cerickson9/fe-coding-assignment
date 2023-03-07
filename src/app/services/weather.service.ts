import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForecastDay } from '../models/forecast.model';
import { apiKey, baseUrl } from './constants';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private httpClient: HttpClient) { }

  getDailyForecast(numDays: number, locationId?: string) : Observable<ForecastDay[]> {
    let location = locationId ? locationId : '350540';
    // const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    const params = new HttpParams()
      .set('apiKey', apiKey)
    return this.httpClient.get(`/forecasts/v1/daily/${numDays}day/${location}?${params}`) as Observable<ForecastDay[]>
  }

}
