import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { environment } from "./environments/environment";
import { XYZ } from "./first.module";
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(XYZ)
  .catch(err => console.error(err));
