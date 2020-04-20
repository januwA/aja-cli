import {
  Widget,
  Input,
  Directive,
  ElementRef,
  Injectable,
  AjaInitState,
} from "@aja";

@Widget({
  selector: "app-root",
  template: require("./app.html"),
})
export class AppRoottt implements AjaInitState {
  constructor() {
    setTimeout(() => {}, 2000);
  }
  initState(): void {
    setInterval(() => {
      this.n++;
    }, 1000);
  }

  styles = {
    color: "red",
    fontSize: "22px",
    oxxx: "xx",
  };

  n = 0;
}
