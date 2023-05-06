export interface IWeatherInfo {
  temp:number;
  humidity:number;
  desc:string;
}

export const initialState = {
  weatherInfo = {};
}

export function getInitialState() {
return initialState;
}