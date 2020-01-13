import { AjaModule } from "@aja";
import { AppRoot } from "./app";
import { SharedModule } from "./shared/shared.module";

@AjaModule({
  declarations: [AppRoot],
  imports: [SharedModule],
  bootstrap: [AppRoot]
})
export class AppModule {}
