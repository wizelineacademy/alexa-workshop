var Alexa = require('alexa-sdk');

const data = [
    'In The Passion of the Christ (2014), Jim Caviezel Was Struck By Lightning During The Sermon On The Mount Scene.',
    'In The Dark Knight (2008), The First Time Michael Caine Saw Heath Ledger As The Joker, He Forgot His Lines.',
    'In Transformers: Dark Moon (2011), 532 Cars Were Destroyed Over The Course Of Production.',
    'In Psycho (1960), Hitchcock\'s Classic Was The First American Movie To Show A Flushing Toilet.',
    'In Alien: Resurrection (1997), Sigourney Weaver Made That “Impossible” Basketball Shot For Real – Alien: Resurrection.',
];

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        // Add randomizer
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Add custom response
        this.response.speak(randomFact);
        this.emit(':responseReady');
    },
};

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(handlers);
    alexa.execute()

};