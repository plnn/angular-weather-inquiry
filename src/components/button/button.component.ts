import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "weather-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"]
})
export class WeatherButtonComponent {
  @Input() text: string;
  @Output() onClick = new EventEmitter();
  @Input() btnType: string;
  @Input() disabled: boolean;
  clickBtn = () => {
    this?.onClick?.emit();
  };
}
