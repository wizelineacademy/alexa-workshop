var Alexa = require('alexa-sdk');

const SKILL_NAME = 'Hello World';
const WELCOME_MESSAGE = 'Hello, this is Hello World. How can I help you with?';
const HELP_MESSAGE = 'You can ask for my name, last name, or full name';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Thank you for using Alexa, goodbye!';
const FULL_NAME = [
  'Hello, my name is Alexa',
  'My single, and full name is Alexa',
  'I\'m Alexa, nice to meet you!'
];
const FIRST_NAME = 'My first name starts with an A, can you guess?';
const MIDDLE_NAME = 'I don\'t have a middle name, hope you\'re not dissapointed';
const LAST_NAME = 'My only name is Alexa, feel free to give me a last name';

var handlers = {
  'LaunchRequest': function () {
    this.response.speak(WELCOME_MESSAGE)
      .listen(STOP_MESSAGE);
    this.emit(':responseReady');
  },

  'NameIntent': function () {
    const nameType = (this.event.request.intent.slots.name) ? this.event.request.intent.slots.name.value : 'full';
    let alexaName;

    switch (nameType) {
      case 'first':
        alexaName: FIRST_NAME;
        break;
      case 'middle':
        alexaName: MIDDLE_NAME;
        break;
      case 'last':
        alexaName: LAST_NAME;
        break;
      case 'full':
      default:
        const factIndex = Math.floor(Math.random() * FULL_NAME.length);
        alexaName = FULL_NAME[factIndex];
    };

    this.response.cardRenderer(SKILL_NAME, alexaName);
    this.response.speak(alexaName);
    this.emit(':responseReady');
  },

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
  'Unhandled': function () {
    this.emit('LaunchRequest');
  },
};

exports.handler = function (event, context, callback) {
  var alexa = Alexa.handler(event, context, callback);
  alexa.registerHandlers(handlers);
  alexa.execute();
};
