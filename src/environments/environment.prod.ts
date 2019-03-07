// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: true,
  googleAnalytics:{
    code: "UA-134719975-2"
  },
  wirecardConfig: {
    accessToken: 'S4DVED8FEBGYP65OYAYE8WYCGIDGEEV2',
    production: false,
    publicKey:  '   -----BEGIN PUBLIC KEY-----  '  +
    '   MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkVtvdI9h2Mbse+KmgKpQ  '  +
    '   lGJyOzomDk60mqQ4igRFAb5ZF0mgIxzSH0cUQkecOfkY22AMFXmvSGWski1xoAiP  '  +
    '   IKQm2FEMwvUFrAOH0Q66sYrCW9XcxExpUM6D9XVPsgBcwY2ubK6re6x7Pt6O+xL+  '  +
    '   3FYc4+ibJyQQVv7f9D/W39HMdqn6Xj0W3ZOiGO6gO4KJGwUZQ8WeEIcmB5aoNgZ8  '  +
    '   rflWJ6mkLrUuOkWXwp0oSLZ0BRKxWJdVDNADuYj+DT02EDsbCmQuBcCetHxojh2Q  '  +
    '   neCYVEvvkoUdNc0+sA4F54GgdWte6B/EW8LXVdE9lvO/qSbf3tkWPbLvqSBLVNT5  '  +
    '   3wIDAQAB  '  +
    '  -----END PUBLIC KEY-----  '
  },

  algolia: {
    appId: 'NJ1U9D7AGE',
    apiKey: '4396547a9cc8520331b87835363e1e84',
    searchOnlyApiKey: '08a30b270cb2a503a0b5fda691ed38b4'
  },

  firebaseConfig : {
    apiKey: 'AIzaSyDcXO0byd1UnxRnXpQoMx5Zi5vAuwntcnw',
    authDomain: 'festtiva-a8a1c.firebaseapp.com',
    databaseURL: 'https://festtiva-a8a1c.firebaseio.com',
    projectId: 'festtiva-a8a1c',
    storageBucket: 'festtiva-a8a1c.appspot.com',
    messagingSenderId: '781562145179'
  },



};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
