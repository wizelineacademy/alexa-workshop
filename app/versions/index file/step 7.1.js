var Alexa = require('alexa-sdk');

const SKILL_NAME = 'Movie Facts';
const HELP_MESSAGE = 'You can say tell me a movie fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';
const data = [
    'In The Passion of the Christ (2014), Jim Caviezel Was Struck By Lightning During The Sermon On The Mount Scene.',
    'In The Dark Knight (2008), The First Time Michael Caine Saw Heath Ledger As The Joker, He Forgot His Lines.',
    'In Transformers: Dark Moon (2011), 532 Cars Were Destroyed Over The Course Of Production.',
    'In Psycho (1960), Hitchcock\'s Classic Was The First American Movie To Show A Flushing Toilet.',
    'In Alien: Resurrection (1997), Sigourney Weaver Made That “Impossible” Basketball Shot For Real – Alien: Resurrection.',
];

var handlers = {
    'LaunchRequest': function () {
        this.emit(':ask', 'Welcome to Movie Facts, what do you want me to do?', 'Say Help to learn more about what I can help you do.');
    },
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        this.response.speak(randomFact);
        this.emit(':responseReady');
    },

    // Adding Support Intents for Help, Cancel and Stop
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(handlers);
    alexa.execute()

};