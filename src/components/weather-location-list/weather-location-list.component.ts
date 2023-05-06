import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "weather-location-list",
  templateUrl: "./weather-location-list.component.html",
  styleUrls: ["./weather-location-list.component.scss"]
})
export class WeatherLocationListComponent {
  @Output() emitSelectedLocation = new EventEmitter();
  @Input() locationList = [];
  @Input() showList: boolean;

  selectLocation = (location) => {
    console.log("emitting", location);
    this.emitSelectedLocation.emit(location);
  };
}
