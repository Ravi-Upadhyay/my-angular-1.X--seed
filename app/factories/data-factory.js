/**
 * DATA-FACTORY: This will actually calls $http service and provide us data
 * TODO: Pipeline data-flow with http-manager
 */
(function(){

    'use strict';
    
    angular.module('myApp.factories')
    .factory('dataFactory',dataFactory);
  
    dataFactory.$inject = ['$http','$httpParamSerializerJQLike'];
  
    function dataFactory($http,$httpParamSerializerJQLike){
      return {
        httpGetRequest    : httpGetRequestHere
      };

    //TODO: 
    function httpGetRequestHere(){
        $http.get('https://reqres.in/api/users?page=2').then(function(response){
            //SUCCESS-CALLBACK
            console.log('Hit Successful');
            console.log(JSON.stringify(response));

        }, function(response){
            //FAILURE-CALLBACK
            console.log('Hit Unsuccessful');
        });
      }

      //DEMO: running this function here so we can have demo
      httpGetRequestHere();
    }
  })();
  
/*
**** CONFIG OBJECT ****
Object describing the request to be made and how it should be processed. The object has following properties:

method – {string}                   – HTTP method (e.g. 'GET', 'POST', etc)
url – {string|TrustedObject}        – Absolute or relative URL of the resource that is being requested; or an object created by a call to $sce.
                                      trustAsResourceUrl(url).
params – {Object.<string|Object>}   – Map of strings or objects which will be serialized with the paramSerializer and appended as GET parameters.
data – {string|Object}              – Data to be sent as the request message data.
headers – {Object}                  – Map of strings or functions which return strings representing HTTP headers to send to the server. 
                                      If the return value of a function is null, the header will not be sent. Functions accept a config object as an argument.
eventHandlers - {Object}            - Event listeners to be bound to the XMLHttpRequest object. To bind events to the XMLHttpRequest upload object, 
                                      use uploadEventHandlers. The handler will be called in the context of a $apply block.
uploadEventHandlers - {Object}      - Event listeners to be bound to the XMLHttpRequest upload object. To bind events to the XMLHttpRequest object, 
                                      use eventHandlers. The handler will be called in the context of a $apply block.
xsrfHeaderName – {string}           – Name of HTTP header to populate with the XSRF token.
xsrfCookieName – {string}           – Name of cookie containing the XSRF token.
transformRequest 
– {function(data, headersGetter)|
Array.<function(data, headersGetter)>} 
                                    – transform function or an array of such functions. The transform function takes the http request body and headers and 
                                    returns its transformed (typically serialized) version. See Overriding the Default Transformations
transformResponse 
– {function(data, headersGetter, status)|
Array.<function(data, headersGetter, status)>} 
                                    – transform function or an array of such functions. The transform function takes the http response body,   
                                      headers and status and returns its transformed (typically deserialized) version. 
                                      See Overriding the Default Transformations
paramSerializer - 
{string|function(Object<string,string>):string} 
                                    - A function used to prepare the string representation of request parameters (specified as an object). 
                                      If specified as string, it is interpreted as function registered with the $injector, 
                                      which means you can create your own serializer by registering it as a service. 
                                      The default serializer is the $httpParamSerializer; alternatively, you can use the $httpParamSerializerJQLike
cache – {boolean|Object}            – A boolean value or object created with $cacheFactory to enable or disable caching of the HTTP response. 
                                      See $http Caching for more information.
timeout – {number|Promise}          – timeout in milliseconds, or promise that should abort the request when resolved.

A numerical timeout or a promise returned from $timeout, will set the xhrStatus in the response to "timeout", and any other resolved promise will set it to "abort", following standard XMLHttpRequest behavior.

withCredentials - {boolean} - whether to set the withCredentials flag on the XHR object. See requests with credentials for more information.

responseType - {string} - see XMLHttpRequest.responseType.

**** RETURNS ****
Response Object:

A Promise that will be resolved (request success) or rejected (request failure) with a response object.

The response object has these properties:

data – {string|Object} – The response body transformed with the transform functions.
status – {number} – HTTP status code of the response.
headers – {function([headerName])} – Header getter function.
config – {Object} – The configuration object that was used to generate the request.
statusText – {string} – HTTP status text of the response.
xhrStatus – {string} – Status of the XMLHttpRequest (complete, error, timeout or abort).

A response status code between 200 and 299 is considered a success status and will result in the success callback being called. 
Any response status code outside of that range is considered an error status and will result in the error callback being called. 
Also, status codes less than -1 are normalized to zero. -1 usually means the request was aborted, e.g. using a config.timeout. 
More information about the status might be available in the xhrStatus property.

Note that if the response is a redirect, XMLHttpRequest will transparently follow it, meaning that the outcome (success or error) 
will be determined by the final response status code.

*/