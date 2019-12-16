import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { persistState, enableAkitaProdMode } from '@datorama/akita';
import * as localForage from 'localforage';
import { debounceTime } from 'rxjs/operators';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  enableAkitaProdMode();
}

localForage.config({ driver: localForage.INDEXEDDB });

persistState({
  storage: localForage,
  preStorageUpdateOperator: () => debounceTime(2000),
});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));
