import { AjaWidget, AjaInit, EventEmitter, Input } from "@aja";

export class AppTile extends AjaWidget implements AjaInit {
  @Input("t-name") name = "xxx";

  show = new EventEmitter<string>();

  render() {
    return require("./app-tile.html");
  }
}
