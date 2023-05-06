import { initialState } from "../state/weather-info.state";
import { WeatherActions,EWeatherActions } from "../actions/weather-info.action";
export const WeatherReducers = (state = initialState, action:WeatherActions):IWeatherInfo => {
switch(action.type){
  case EWeatherActions.GetWeatherInfoByLocation:{
    return {
      ...state,
      weather:action.payload;
    }
  }
}
};
