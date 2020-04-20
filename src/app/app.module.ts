import { AjaModule } from "@aja";
import { AppRoottt } from "./app";

@AjaModule({
  declarations: [AppRoottt],
  imports: [],
  bootstrap: [],
  exports: [AppRoottt],
})
export class SharedModule {}

@AjaModule({
  declarations: [AppRoottt],
  imports: [SharedModule],
  bootstrap: [AppRoottt],
})
export class AppModule {}
