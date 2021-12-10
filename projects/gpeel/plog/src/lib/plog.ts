export interface PlogConfig {
  plog: { [key: string]: string | string[] };
}

function fnNull(message?: any, ...optionalParams: any[]): void {
}

export const Plog = {

  debug: fnNull,
  info: fnNull,
  warn: fnNull,
  error: fnNull,

  perf: fnNull,
  perfComponent: fnNull,
  perfCD: fnNull,
  perfDom: fnNull,

  ngOnChanges: fnNull,
  ngOnInit: fnNull,
  ngOnDestroy: fnNull,
  ngDoCheck: fnNull,
  ngAfterContentInit: fnNull,
  ngAfterContentChecked: fnNull,
  ngAfterViewInit: fnNull,
  ngAfterViewChecked: fnNull,

  create: fnNull,
  createComponent: fnNull,
  createDirective: fnNull,
  createService: fnNull,
  createPipe: fnNull,
  createGuard: fnNull,
  createResolver: fnNull,

  resolve: fnNull,
  guard: fnNull,
  validator: fnNull,
  pipe: fnNull,
  callback: fnNull,

  state: fnNull,
  action: fnNull,
  select: fnNull,
  errorState: fnNull,
  effect: fnNull,
  cache: fnNull,

  formValueChanges: fnNull,
  formEvent: fnNull,
  streamEvent: fnNull,
  subscription: fnNull,
  unsubscription: fnNull,

  // Specific loggers for @gpeel/my-validators
  validationCompute: fnNull, // tracing validators when they compute
  validationErrorMsgRefresh: fnNull, // tracing refresh of <my-error-msg>
  validationErrorMsgCreation: fnNull, // tracing creation of component <my-error-msg>
  errorMsg: fnNull, // used by <error-msg> deprecated

  network: fnNull,  // network prefix for http interceptor
  networkRequest: fnNull,
  networkResponse: fnNull,
  networkError: fnNull,
  networkCreate: fnNull,

  httpCall: fnNull, // http prefix : for service logic
  httpSuccess: fnNull,
  httpError: fnNull,
  httpDebug: fnNull,

  // Observable
  obsSubscribe: fnNull,
  obsSuccess: fnNull,
  obsError: fnNull,
  obsDebug: fnNull,

  tu: fnNull,
  tuBeforeEach: fnNull,
  tuBeforeAll: fnNull,
  tuAfterEach: fnNull,
  tuAfterAll: fnNull,
  tuArrange: fnNull,
  tuAct: fnNull,
  tuAssert: fnNull,
  ti: fnNull,
  te2e: fnNull,

  pink: fnNull,
  red: fnNull,
  orange: fnNull,
  green: fnNull,
  blue: fnNull,
  violet: fnNull,

  // same with color Prefix
  colorPink: fnNull,
  colorRed: fnNull,
  colorOrange: fnNull,
  colorGreen: fnNull,
  colorBlue: fnNull,
  colorLightBlue: fnNull,
  colorViolet: fnNull,

};
