import { AjaWidget, EventEmitter, Input, Output, AjaInitState } from "@aja";

export class AppTile extends AjaWidget implements AjaInitState {
  @Input() name: any;

  @Output()
  show = new EventEmitter<string>();

  eee() {
    this.show.emit("wwwww");
  }

  initState() {
    // console.log(this.name);
  }

  changeA() {
    this.name = "new xxx";
  }

  render() {
    return require("./app-tile.html");
  }
}
