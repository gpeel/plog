import {CommonModule} from '@angular/common';
import {APP_INITIALIZER, InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {Plog, PlogConfig} from './plog';
import {PLOG_ENVIRONMENT_DEFAULT} from './PLOG_ENVIRONMENT_DEFAULT';
import {PLOG_ENVIRONMENT_PROD_DEFAULT} from './PLOG_ENVIRONMENT_PROD_DEFAULT';

export const ENV_CONFIG = new InjectionToken<any[]>('LOGGER_CONFIG');

interface Indexable {
  [key: string]: any;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PlogModule {

  static forRoot(environment: any): ModuleWithProviders<PlogModule> {
    return {
      ngModule: PlogModule,
      providers: [
        {
          provide: APP_INITIALIZER, // loop to force execution of rootPlogFactory
          useFactory: rootPlogFactory,
          multi: true,
          deps: [ENV_CONFIG]
        },
        {
          provide: ENV_CONFIG,
          useValue: environment,
        },
      ]
    };

  }

}

let initialized = false;

export function rootPlogFactory(environment: any): (() => void) {
  return () => {
    if (!initialized) {
      if (!environment.plog) {
        console.log('****************************');
        console.log('YOU DID NOT initialize Plog explicitly =>  Taking the default configuration for Plog');
        if (environment.production) {
          console.log('Taking : node_module/@gpeel/plog/src/lib/PLOG_ENVIRONMENT_PROD_DEFAULT.ts.ts');
        } else {
          console.log('Taking : node_module/@gpeel/plog/src/lib/PLOG_ENVIRONMENT_DEFAULT.ts');
        }
        console.log('If you want something else configure your environment.ts file');
        console.log('Example in node_module/@gpeel/plog/src/lib/PLOG_ENVIRONMENT_DEFAULT.ts');
        console.log('****************************');
      }

      /**
       * get the Default config for DEV or PROD mode
       */
      const CONFIG = environment.production ? PLOG_ENVIRONMENT_PROD_DEFAULT : PLOG_ENVIRONMENT_DEFAULT;

      /**
       * Check if you have a Specific config defined, if so take it otherwise take the default CONFIG.
       */
      const plogConfig = environment.plog ? environment : CONFIG;
      initialize(plogConfig);
      initialized = true;
    }
  };
}

function initialize(plogConfig: PlogConfig): void {

  // console.log('INIT');

  Object.keys(plogConfig.plog).forEach(key => {
    const maybeArray = plogConfig.plog[key];
    let prefix = key;
    let color: string;
    if (maybeArray instanceof Array) {
      prefix = maybeArray[1];
      color = maybeArray[0];
    } else {
      color = maybeArray;
    }
    // console.log('KEY', key, color);
    let prefixCapitalized = prefix.charAt(0).toUpperCase() + prefix.slice(1);
    // padEnd does not exists in IE11
    // <=> prefixCapitalized.padEnd(5, ' ')
    if (prefixCapitalized.length < 5) {
      while (prefixCapitalized.length < 5) {
        prefixCapitalized = prefixCapitalized + ' ';
      }
    }
    if (color === 'test' || color === 'no-css') {
      (Plog as Indexable)[key] = console.info.bind(console, prefixCapitalized);
    } else {
      (Plog as Indexable)[key] = console.info.bind(console, `%c${prefixCapitalized}`, `${color}`);
    }
  });
}
