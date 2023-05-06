import { Component, Input } from "@angular/core";
import * as moment from "moment";
@Component({
  selector: "daily-weather-info",
  templateUrl: "./daily-weather-info.component.html",
  styleUrls: ["./daily-weather-info.component.scss"]
})
export class DailyWeatherInfoComponent {
  @Input() dailyInfo = [];
  acsOrder: boolean = false;

  sortByTemp = () => {
    this.acsOrder = !this.acsOrder;
    this.dailyInfo = this.dailyInfo.sort((a, b) => {
      const operation = parseFloat(a.dt) - parseFloat(b.dt);
      return this.acsOrder ? operation : operation * -1;
    });
  };

  formatDate = (date: number): string => {
    return moment(date * 1000).format("DD.MM.YYYY");
  };

  /**
   *
   * @param sampleInput = string
   */
  sampleFunction(sampleInput: string): string {
    return "SampleOutput";
  }
}
