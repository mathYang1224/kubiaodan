import "reflect-metadata";
import "zone.js";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module.ts';

//启动App
platformBrowserDynamic().bootstrapModule(AppModule);