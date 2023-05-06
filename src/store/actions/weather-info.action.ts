import { Action } from "@ngrx/store";

export enum EWeatherActions {
  GetWeatherInfoByLocation = "GetWeatherInfoByLocation"
}

export class GetWeatherInfo implements Action {
  public readonly type = EWeatherActions.GetWeatherInfoByLocation;
}

export type WeatherActions = GetWeatherInfo;
