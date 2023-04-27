// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false, 
   uriNow : 'https://api.preciodelaluz.org/v1/prices/now?zone=PCB',
   uriAvg : 'https://api.preciodelaluz.org/v1/prices/avg?zone=PCB',
   uriAllZone : 'https://api.preciodelaluz.org/v1/prices/all?zone=PCB',
   uriPriceMax : 'https://api.preciodelaluz.org/v1/prices/max?zone=PCB',
   uriPriceMin : 'https://api.preciodelaluz.org/v1/prices/min?zone=PCB',
   uriHappyHour :'https://api.preciodelaluz.org/v1/prices/cheapests?zone=PCB&n=3'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
