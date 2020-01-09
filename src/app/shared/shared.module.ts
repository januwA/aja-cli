import { AjaModule } from "@aja";
import { AppTile } from "./app-tile.widget";

@AjaModule({
  declarations: [AppTile],
  exports: [AppTile]
})
export class SharedModule {}