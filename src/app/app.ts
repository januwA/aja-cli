import { AjaWidget } from "@aja";

export class AppRoot extends AjaWidget {
  name: string = "Ajanuw";

  changeName() {
    this.name = "Alone";
  }

  handle(msg: string) {
    console.log(msg);
    console.log(" i am AppRoot ");
  }

  get hello() {
    return `Hello ${this.name}`;
  }

  render() {
    return require("./app.html");
  }
}
