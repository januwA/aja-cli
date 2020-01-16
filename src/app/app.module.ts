import { AjaModule } from "@aja";
import { AppRoottt } from "./app";
import { SharedModule } from "./shared/shared.module";

@AjaModule({
  declarations: [AppRoottt],
  imports: [SharedModule],
  bootstrap: [AppRoottt]
})
export class AppModule {}
