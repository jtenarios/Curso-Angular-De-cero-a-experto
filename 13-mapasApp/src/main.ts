import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
Mapboxgl.accessToken = 'pk.eyJ1Ijoia292ZW5hbSIsImEiOiJjbDZxOHZzMzgwYmJiM2NvOHNnbHg1ejFmIn0._bIAlH3REInX0Jv6gR8W1A';

if (!navigator.geolocation) {
  alert('Navegador no soporta la geolocation');
  throw new Error('Navegador no soporta la geolocation');
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
