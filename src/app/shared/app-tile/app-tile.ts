import { EventEmitter, Input, Output, Widget } from "@aja";

@Widget({
  selector: "app-tile",
  template: require("./app-tile.html"),
})
export class AppTile {
  @Input() name = "";
  @Output() nameChange = new EventEmitter<string>();

  change(nv: string) {
    this.nameChange.emit(nv);
  }
}
