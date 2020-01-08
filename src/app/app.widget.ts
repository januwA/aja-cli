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

export class AppRoot extends AjaWidget {
  name: string = "Ajanuw";

  changeName(): void {
    this.name = 'Alone';
  }

  handle(msg: string) {
    console.log(msg);
    console.log(' i am AppRoot ');
  }

  render() {
    return `
      <h1>hello {{ name }}</h1>
      <app-tile (show)="handle"></app-tile>
    `;
  }
}