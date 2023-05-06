import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { WeatherButtonComponent } from "./button/button.component";
import { WeatherLocationListComponent } from "./weather-location-list/weather-location-list.component";
import { DailyWeatherInfoComponent } from "./daily-weather-info/daily-weather-info.component";
@NgModule({
  declarations: [
    WeatherButtonComponent,
    WeatherLocationListComponent,
    DailyWeatherInfoComponent
  ],
  imports: [BrowserModule],
  exports: [
    WeatherButtonComponent,
    WeatherLocationListComponent,
    DailyWeatherInfoComponent
  ]
})
export class SharedModule {}
