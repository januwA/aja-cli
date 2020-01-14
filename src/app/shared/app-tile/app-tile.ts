import { AjaWidget, EventEmitter, Input, Output } from "@aja";

export class AppTile extends AjaWidget {
  @Input() name = "";
  @Output() nameChange = new EventEmitter<string>();

  change(nv: string) {
    this.nameChange.emit(nv);
  }

  render() {
    return require("./app-tile.html");
  }
}
