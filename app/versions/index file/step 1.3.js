// This will import alexa-sdk
var Alexa = require('alexa-sdk');

//This will set up an Alexa object for Lambda to work with. 
exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
};