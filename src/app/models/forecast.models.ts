export interface ForecastDay {
  Date: string;
  EpochDate: number;
  Temperature: Temperature;
  Day: Forecast;
  Night: Forecast;
  Sources: string[];
  MobileLink: string;
  Link:string;
}

export interface Temperature {
  Minimum: TemperatureValue;
  Maximum: TemperatureValue;
}

export interface TemperatureValue {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface Forecast {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  PrecipitationType: string;
  PrecipitationIntensity: string;
}