import { AjaWidget, AjaInit, EventEmitter } from "@aja";

export class AppTile extends AjaWidget implements AjaInit {

  show = new EventEmitter<string>();

  xxx() {
    this.show.emit("hello i am AppTile");
  }

  render() {
    return require('./app-tile.html');
  }

}