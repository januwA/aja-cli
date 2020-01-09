import { AjaModule } from "@aja";
import { AppRoot } from "./app.widget";
import { SharedModule } from "./shared/shared.module";

@AjaModule({
  declarations: [AppRoot],
  imports: [SharedModule],
  bootstrap: [AppRoot]
})
export class AppModule {}
