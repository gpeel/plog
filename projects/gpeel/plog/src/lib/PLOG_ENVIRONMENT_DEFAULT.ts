import {PlogConfig} from './plog';

/**
 * Your ./environments/environments.ts would typically look like :
 * export const environment = {
 *    production: false,
 *    plog : {
 *      // plog chosen activated loggers
 *      // if a logger name is not present, there is no log for this logger
 *      // example, here "warn" is not defined, so Plog.warn( ...string[]) will no log
 *      // you can choose the color and the prefix.
 *      // The defaut prefix is the name of the logger in UPPERCASE.
 *      // Plog.anyLogger()  has the same API as console.log()
 *      // ie  log(...data: any[]): void;
 *      //
 *      // action: [ <color>, <log prefix>],
 *      //
 *      // action: ['#8f72cf', '@ACTION'],
 *      //====>  Plog.action('message'); will log  @ACTION: message
 *      //
 *      // action: ['red', '@ACTION-HHH'],
 *      //====>  Plog.action('message'); will log  @ACTION-HHH: message
 *      //
 *      // action: 'red',
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
 * And change whatever color and prefix you want.
 * BUT you can't ADD a new logger.
 */
export const PLOG_ENVIRONMENT_DEFAULT: PlogConfig = {
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

    // NG hooks
    ngOnChanges: ['orange', 'OnChange'],
    ngOnInit: ['orange', 'OnInit'],
    ngOnDestroy: ['orange', 'OnDestroy'],
    ngDoCheck: ['orange', 'DoCheck'],
    ngAfterContentInit: ['orange', 'AfterContentInit'],
    ngAfterContentChecked: ['orange', 'AfterContentChecked'],
    ngAfterViewInit: ['orange', 'AfterViewInit'],
    ngAfterViewChecked: ['orange', 'AfterViewChecked'],

    // constructor logs
    create: ['green', 'new'],
    createComponent: ['green', 'New-@Comp'],
    createDirective: ['green', 'New-@Dir'],
    createService: ['green', 'New-Svc'],
    createPipe: ['green', 'New-@Pipe'],
    createGuard: ['green', 'New-@Guard'],
    createResolver: ['green', 'New-@Resolver'],

    // NG types
    resolve: 'brown',
    guard: 'sandybrown',
    validator: 'plum',
    pipe: 'brown',
    callback: 'violet',

    state: 'blueviolet', // Redux style or BehaviorSubject, as you want
    // specific logs for NGXS, Akita
    action: ['#8f72cf', '@ACTION'], // to log inside Action method
    select: ['#84467c', '@SELECT'], // to log inside select method
    errorState: ['#cf3c04', '@ERROR'], // to log error in Store
    effect: ['8F72CF', '@EFFECT'], // to log inside effect method (even if using @Effet is not advised)
    cache: ['blueviolet', '@EFFECT'],

    // Specific loggers for @gpeel/my-validators
    validationCompute: ['orange', '@VALID'], // tracing validators when they compute
    validationErrorMsgRefresh: ['orange', '@VALID_PERF'], // tracing refresh of <my-error-msg>
    validationErrorMsgCreation: ['orange', '@ERROR_MSG_NEW'], // tracing creation of component <my-error-msg>
    errorMsg: ['orange', '@VALID'], // used by <error-msg> deprecated

    // network actions (interceptors)
    network: ['blue', 'HTTP'],
    networkRequest: ['blue', 'HttpRequest'],
    networkResponse: ['blue', 'HttpResponse'],
    networkError: ['red', 'HTTP-Error'],
    networkCreate: ['green', 'NEW-HTTP'],

    httpCall: ['springgreen', 'HTTP-CALL'], // http prefix : for service logic
    httpSuccess: ['springgreen', 'HTTP-SUCCESS'],
    httpError: ['red', 'HTTP-ERROR'],
    httpDebug: ['springgreen', 'HTTP-TAP'],

    obsSubscribe: ['springgreen', 'OBS-sub'],
    obsSuccess: ['springgreen', 'OBS-SUCCESS'],
    obsError: ['red', 'OBS-ERROR'],
    obsDebug: ['springgreen', 'OBS-DEBUG'],


    // tests
    tu: ['green', 'tu'],
    tuBeforeEach: ['slateblue', 'tu-BEFORE-EACH'],
    tuBeforeAll: ['slateblue', 'tu-BEFORE-ALL'],
    tuAfterEach: ['tomato', 'tu-AFTER-EACH'],
    tuAfterAll: ['tomato', 'tu-AFTER-ALL'],
    tuArrange: ['blue', 'tu'],
    tuAct: ['blueviolet', 'tu'],
    tuAssert: ['brown', 'tu'],
    ti: ['green', 'ti'],
    te2e: ['green', 'e2e'],

    // colors
    pink: ['#FF40BD;', '######'], // pink flashy
    red: 'red', // red without the console.error() stacktrace
    orange: ['orange', '######'],
    green: ['springgreen', '######'],
    blue: ['cadetblue', '######'],
    lightBlue: ['darkturquoise', '######'],
    violet: ['blueviolet', '######'],

    // same color-loggers with a prefix 'color' (easier to find with intellisense)
    colorPink: ['#FF40BD;', '######'], // pink flashy
    colorRed: 'red', // red without the console.error() stacktrace
    colorOrange: ['orange', '######'],
    colorGreen: ['springgreen', '######'],
    colorBlue: ['cadetblue', '######'],
    colorLightBlue: ['darkturquoise', '######'],
    colorViolet: ['blueviolet', '######']
  }
};
