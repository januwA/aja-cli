import { AjaModule, Pipe, PipeTransform } from "@aja";
import { AppRoottt } from "./app";
import { SharedModule } from "./shared/shared.module";

@Pipe({
  name: "hello"
})
class HelloPipe implements PipeTransform {
  transform(value: any) {
    return `hello ${value}`;
  }

}

@AjaModule({
  declarations: [AppRoottt, HelloPipe],
  imports: [SharedModule],
  bootstrap: [AppRoottt]
})
export class AppModule {}
