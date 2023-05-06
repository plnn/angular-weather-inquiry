import { ActionReducerMap } from "@ngrx/store";
import { routerReducer } from "@ngrx/router-store";
import { WeatherReducers } from "./reducers/weather-info.reducer";
import { IWeatherInfo } from "./state/weather-info.state";
export const appReducers: ActionReducerMap<IWeatherInfo, any> = {
  router: routerReducer,
  weatherInfo: WeatherReducers
};
