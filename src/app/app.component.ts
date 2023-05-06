import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  inputValue: string = "";
  locationList: any = [];
  showList: boolean;
  selectedLocation;
  dailyInfo;
  error: string;
  constructor(private http: HttpClient) {}

  onKey = (e) => {
    this.inputValue = e.target.value;
  };

  search = () => {
    this.dailyInfo = null;
    this.error = null;
    const resp = this.http.get(
      `https://openweathermap.org/data/2.5/find?q=${this.inputValue}&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric`
    );

    resp.subscribe((response) => {
      this.locationList = response.list;
      console.log(this.locationList);
      this.showList = true;
      this.error = this.locationList.length ? null : "Invalid location code";
    });
  };
  selectCountry = (item) => {
    console.log("item", item);
    this.showList = false;
    this.selectedLocation = item;
    const weatherInfo = this.http.get(
      `https://openweathermap.org/data/2.5/onecall?lat=${this.selectedLocation.coord.lat}&lon=${this.selectedLocation.coord.lon}&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02`
    );
    weatherInfo.subscribe((resp) => {
      console.log(resp, "sdfs");
      this.dailyInfo = resp.daily.splice(0, 5);
    });
  };

  clear = () => {
    this.inputValue = null;
    this.showList = false;
    this.dailyInfo = null;
    this.error = null;
  };
}
