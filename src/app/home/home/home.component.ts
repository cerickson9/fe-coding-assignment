import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ForecastDay } from 'src/app/models/forecast.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private weatherService: WeatherService) {}

  forecasts!: Observable<ForecastDay[]>;
  ngOnInit(): void {
    this.forecasts = this.weatherService.getDailyForecast(5);
    this.forecasts.subscribe();
  }

}