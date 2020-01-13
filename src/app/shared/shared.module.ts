import { AjaModule } from "@aja";
import { AppTile } from "./app-tile/app-tile";

@AjaModule({
  declarations: [AppTile],
  exports: [AppTile]
})
export class SharedModule {}