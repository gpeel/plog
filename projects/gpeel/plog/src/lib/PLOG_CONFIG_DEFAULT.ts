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
 * PLOG_CONFIG_DEFAULT is taken in DEV mode if no environment.plog property is defined
 */
export const PLOG_CONFIG_DEFAULT: PlogConfig = {
  plog: {
    debug: 'green',
    info: 'blue',
    error: 'red',
    warn: 'orange',

    // Performance logs
    perf: 'darkturquoise',
    perfComponent: ['darkturquoise', 'PERF-¤¤'],
    perfCD: ['darkturquoise', 'PERF-¤¤¤¤¤¤¤'],
    perfDom: ['darkturquoise', 'PERF-¤-¤-¤-¤'],

    network: ['blue', 'HTTP'],
    networkRequest: ['blue', 'HttpRequest'],
    networkResponse: ['blue', 'HttpResponse'],
    networkError: ['red', 'HTTP-Error'],
    networkCreate: ['green', 'NEW-HTTP'],

    // NG types
    resolve: 'brown',
    guard: 'sandybrown',
    validator: 'plum',
    pipe: 'brown',
    callback: 'violet',
    state: 'blueviolet', // Redux style or BehaviorSubject, as you want
    errorMsg: 'pink', // msg when computing validation error msgs for a FormControl

    // specific logs for NGXS, Akita
    action: ['#8f72cf', '@ACTION'], // to log inside Action method
    select: ['#84467c', '@SELECT'], // to log inside select method
    errorState: ['#cf3c04', '@ERROR'], // to log error in Store
    effect: ['8F72CF', '@EFFECT'], // to log inside effect method (even if using @Effet is not advised)

    // tests
    tu: ['green', 'tu'],
    ti: ['green', 'ti'],
    te2e: ['green', 'e2e'],

    // NG hooks
    ngOnChanges: ['orange', 'ngOnChange'],
    ngOnInit: ['orange', 'ngOnInit'],
    ngDoCheck: ['orange', 'ngDoCheck'],
    ngOnDestroy: ['orange', 'ngOnDestroy'],

    // create
    create: ['green', 'new'],
    createComponent: ['green', 'New-@Comp'],
    createDirective: ['green', 'New-@Dir'],
    createService: ['green', 'New-Svc'],
    createPipe: ['green', 'New-@Pipe'],
    createGuard: ['green', 'New-@Guard'],
    createResolver: ['green', 'New-@Resolver'],

    // colors
    pink: ['#FF40BD;', '####'], // pink flashy
    red: 'red', // red without the console.error() stacktrace
    orange: ['orange', '####'],
    green: ['springgreen', '####'],
    blue: ['cadetblue', '####'],
    violet: ['blueviolet', '####']
  }
};
