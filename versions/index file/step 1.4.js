var Alexa = require('alexa-sdk');

var handlers = {

};

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(handlers);

    // Add execute function
    alexa.execute()
};