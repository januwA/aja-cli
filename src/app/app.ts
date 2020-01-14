import { AjaWidget } from "@aja";

export class AppRoot extends AjaWidget {
  name: string = "Ajanuw";

  render() {
    return require("./app.html");
  }
}
