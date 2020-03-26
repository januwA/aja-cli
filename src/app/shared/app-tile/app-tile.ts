import { EventEmitter, Input, Output, Widget } from "@aja";
import { HelloService } from "../../app";

@Widget({
  selector: "app-tile",
  template: require("./app-tile.html")
})
export class AppTile {
  constructor(public hello: HelloService) {}
  @Input() name = "";
  @Output() nameChange = new EventEmitter<string>();

  change(nv: string) {
    // this.nameChange.emit(nv);
    if (nv) {
      this.hello.n = +nv;
    }
  }
}
