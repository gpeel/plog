// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  plog: {
    createComponent: ['color:green;', 'New-@Comp'],

    error: 'color:red; font-size:1rem;',
    warn: 'color:orange',
    info: 'color:blue',
    debug: 'color:limegreen;font-weight:bold',

    action: ['color:#8f72cf; font-weight:bold;', '@ACTION'], // to log inside Action method
    tu: ['color:blue; font-size:1rem;', 'TU'],
    errorState: ['color:#cf3c04', '@ERROR'], // to log error in Store

  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
