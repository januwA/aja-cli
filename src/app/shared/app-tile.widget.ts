import { AjaWidget, AjaInit, EventEmitter } from "@aja";


export class AppTile extends AjaWidget implements AjaInit {

  show = new EventEmitter<string>();

  xxx() {
    this.show.emit("hello i am AppTile");
  }

  render() {
    return `
      <h3>title</h3>
      <p (click)="xxx">subtitle</p>
    `;
  }

}