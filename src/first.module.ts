import { NgModule } from "@angular/core";
import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule()
class FirstModule {
  constructor() {
    console.log("Logging from first module");
  }
}

@NgModule({
  declarations: [FirstComponent, SecondComponent],
  imports: [BrowserModule, FirstModule]
})
export class XYZ {
  constructor() {
    console.log("%c Hello from XYZ module", "font-size: 20px, color: blue");
  }
}
