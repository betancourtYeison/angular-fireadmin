import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  breakpoint: number;
  ngOnInit() {
    this.breakpoint = window.innerWidth <= 750 ? 1 : 3;
  }
  onResize(event) {
    this.breakpoint = event.target.innerWidth <= 750 ? 1 : 3;
  }
}
