import {PlogConfig} from './plog';


/**
 * Your ./environments/environments.ts would typically look like :
 * export const environment = {
 *    production: false,
 *    plog : {
 *      // plog chosen activated loggers
 *      // if a logger name is not present, there is no log for this logger
 *      // example, here "warn" is not defined, so Plog.warn( ...string[]) will no log
 *      // you can choose the CSS and the prefix.
 *      // The defaut prefix is the name of the logger in UPPERCASE.
 *      // Plog.anyLogger()  has the same API as console.log()
 *      // ie  log(...data: any[]): void;
 *      //
 *      // action: [ <CSS>, <log prefix>],
 *      //
 *      // action: ['color:red', '@ACTION'],
 *      //====>  Plog.action('message'); will log  @ACTION: message
 *      //
 *      // action: ['color:red; font-weight:bold;', '@ACTION-HHH'],
 *      //====>  Plog.action('message'); will log  @ACTION-HHH: message
 *      //
 *      // action: 'color:red',
 *      //====>  Plog.action('message'); will log  ACTION: message
 *      //
 *      // I
 *      debug: 'green',
 *      info: 'blue',
 *    }
 * };
 * PLOG_ENVIRONMENT_DEFAULT is taken in DEV mode if no environment.plog property is defined
 * PLOG_ENVIRONMENT_PROD_DEFAULT is taken in PROD mode if no environment.plog property is defined on your file environment.prod.ts
 *
 * A PlogConfig is basically an environment.ts struture with a plog property defining the logging loggers.
 * Feel free to copy/paste this config into your environment.ts
 */
export const PLOG_ENVIRONMENT_PROD_DEFAULT: PlogConfig = {
  plog: {
    error: 'color:red',
    warn: 'color:orange',
    // info: 'color: blue',
    // debug: 'color:limegreen;font-weight:bold',
  }
};
