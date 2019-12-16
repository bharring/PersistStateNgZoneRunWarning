import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { persistState } from "@datorama/akita";
import * as localForage from "localforage";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

persistState({
  storage: localForage
  // preStorageUpdateOperator: () => debounceTime(50000)
});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));
