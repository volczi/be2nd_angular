
CLIENT_ID ='144866556401-f386rpsq941dee2kd5q00d406l7k164k.apps.googleusercontent.com';

/**
 * Scopes used by the application.
 * @type {string}
 */
SCOPES =
    'https://www.googleapis.com/auth/userinfo.email';



function init() {
   // google.devrel.samples.hello.init('//' + window.location.host + '/_ah/api');
    var apiRoot= 'https://bethe2nd.appspot.com/_ah/api';
    var apisToLoad;
    var callback = function() {
      if (--apisToLoad == 0) {
//        google.devrel.samples.hello.enableButtons();
//        google.devrel.samples.hello.signin(true,
//            google.devrel.samples.hello.userAuthed);
    	  init_app();
      }
    }

    apisToLoad = 2; // must match number of calls to gapi.client.load()
    gapi.client.load('imageApi', 'v1', callback, apiRoot);
    gapi.client.load('oauth2', 'v2', callback);
}