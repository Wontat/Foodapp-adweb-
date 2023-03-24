import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ref) => {
    window['ngRef'] && window['ngRef'].destroy();
    window['ngRef'] = ref;
  })
  .catch(console.error.bind(console));
