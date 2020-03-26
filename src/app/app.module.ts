import { AjaModule } from "@aja";
import { AppRoottt } from "./app";
import { SharedModule } from "./shared/shared.module";
import { AppTile } from './shared/app-tile/app-tile';

@AjaModule({
  declarations: [AppRoottt],
  imports: [SharedModule],
  bootstrap: [AppRoottt]
})
export class AppModule {
}
