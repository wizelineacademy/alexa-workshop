var Alexa = require('alexa-sdk');

var handlers = {
    // The handlers you define can call each other, making it possible to ensure your responses are uniform.
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        this.emit(':tell', "This is my first ever Alexa Skill");
    },
};

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(handlers);
    alexa.execute()
};