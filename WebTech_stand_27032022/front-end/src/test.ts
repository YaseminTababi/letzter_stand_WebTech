// Datei die für karma.conf.js benötigt wird. alle .spec und Framework datein werden geladen

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

// Die Angular-Testumgebung zuerst initialisieren
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Alle Test finden wir dann
const context = require.context('./', true, /\.spec\.ts$/);
//dann die modules laden
context.keys().map(context);
