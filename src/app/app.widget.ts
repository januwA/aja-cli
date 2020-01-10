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

  render() {
    return require("./app-root.html");
  }
}
