import {PlogConfig} from './plog';


/**
 * Your ./environments/environments.ts would typically look like :
 * export const environment = {
 *    production: false,
 *    plog : {
 *      // plog chosen activated loggers
 *      // if a logger name is not present, the is no log for this logger
 *      // example, here warn is not defined, so Plog.warn( ...string[]) will no log
 *      // you can choose the color and the prefix :
 *      // action: [ <color>, <log prefix>],
 *      // action: ['#8f72cf', '@ACTION'],
 *      // Plog.action("message"); will log  @ACTION: message
 *      debug: 'green',
 *      info: 'blue',
 *    }
 * };
 * PLOG_CONFIG_DEFAULT_PROD is taken in PROD mode if no environment.plog property is defined
 */
export const PLOG_CONFIG_DEFAULT_PROD: PlogConfig = {
  plog: {
    error: 'red',
    warn: 'orange',
    // perf: 'darkturquoise',
    // perfComponent: ['darkturquoise', 'PERF-¤¤'],
    // perfCD: ['darkturquoise', 'PERF-¤¤¤¤¤¤¤'],
    // perfDom: ['darkturquoise', 'PERF-¤-¤-¤-¤'],
  }
};
