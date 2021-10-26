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

  // Specific loggers for @gpeel/my-validators
  perfValidator: fnNull, // tracing validators when they compute
  perfErrorMsg: fnNull, // tracing refresh of <my-error-msg>
  perfErrorMsgCreation: fnNull, // tracing creation of component <my-error-msg>
  errorMsg: fnNull, // used by <error-msg> only

  network: fnNull,
  networkRequest: fnNull,
  networkResponse: fnNull,
  networkError: fnNull,
  networkCreate: fnNull,

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

  tu: fnNull,
  ti: fnNull,
  te2e: fnNull,

  ngOnChanges: fnNull,
  ngOnInit: fnNull,
  ngDoCheck: fnNull,
  ngOnDestroy: fnNull,

  create: fnNull,
  createComponent: fnNull,
  createDirective: fnNull,
  createService: fnNull,
  createPipe: fnNull,
  createGuard: fnNull,
  createResolver: fnNull,

  pink: fnNull,
  red: fnNull,
  orange: fnNull,
  green: fnNull,
  blue: fnNull,
  violet: fnNull,

  //with color Prefix
  colorPink: fnNull,
  colorRed: fnNull,
  colorOrange: fnNull,
  colorGreen: fnNull,
  colorBlue: fnNull,
  colorViolet: fnNull,

};
