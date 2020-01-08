import { AjaModule } from "@aja";
import { AppRoot, AppTile } from "./app.widget";

export class AppModule extends AjaModule {
  declarations = [AppRoot, AppTile];
  bootstrap = AppRoot;
}