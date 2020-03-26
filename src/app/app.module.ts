import { AjaModule, Pipe, PipeTransform } from "@aja";
import { AppRoottt } from "./app";
import { SharedModule } from "./shared/shared.module";

@Pipe({
  name: "hello"
})
export class HelloPipe implements PipeTransform {
  name = "ajanuw";
  constructor() {
    console.log(1);
  }
  transform(value: any, a: any, b: any) {
    return `hello ${value}`;
  }
}

@AjaModule({
  declarations: [AppRoottt],
  imports: [SharedModule],
  bootstrap: [AppRoottt]
})
export class AppModule {}
