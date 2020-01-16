import { Widget, Input } from "@aja";

@Widget({
  selector: "app-root",
  template: require("./app.html")
})
export class AppRoottt {
  @Input()
  name: string = "Ajanuw";

  show() {
    this.name = "xxx";
  }
}