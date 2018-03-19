var Alexa = require('alexa-sdk');

/** 
 * To create a handler for 'HelloWorldIntent' we simply add the following.
 * Notice the new syntax above for ':tell'? Alexa-sdk follows a tell/ask response methodology for generating your outputSpeech response objects. 
 * To ask the user for information we would instead use an :ask action. 
 * The difference between :ask and :tell is that after a :tell action, the session is ended without waiting for the user to provide more input.
 *  
 **/
var handlers = {
    'GetNewFactIntent': function () {
        this.emit(':tell', "This is my first ever Alexa Skill");
        // this.emit(':ask', 'What would you like to do?', 'Please say that again?');
    },
};

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(handlers);
    alexa.execute()
};