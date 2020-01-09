import { AjaWidget } from "@aja";

export class AppRoot extends AjaWidget {
  name: string = "Ajanuw";

  changeName(): void {
    this.name = "Alone";
  }

  handle(msg: string) {
    console.log(msg);
    console.log(" i am AppRoot ");
  }

  render() {
    return `
      <h1>hello {{ name }}</h1>
      <app-tile (show)="handle"></app-tile>
    `;
  }
}
