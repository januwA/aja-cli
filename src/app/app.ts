import { Widget, Input, Output, EventEmitter, Injectable, Pipe, PipeTransform } from "@aja";

@Injectable()
export class HelloService {
  n = 1;
  change() {
    this.n += 1;
  }
}

@Pipe({
  name: "hello"
})
export class HelloPipe implements PipeTransform {
  name = "ajanuw";
  constructor(private readonly hello: HelloService) {
  }
  transform(value: any, a: any, b: any) {
    return `hello ${value}`;
  }
}

@Widget({
  selector: "app-root",
  template: require("./app.html")
})
export class AppRoottt {
  constructor(public readonly hello: HelloService) {}
  name = "Ajanuw";
  obj = { name: "ajanuw" };

  show() {
    this.hello.change();
  }
}
