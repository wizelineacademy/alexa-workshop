var handlers = {
  'LaunchRequest': function () {
    this.emit(':tell', 'Hello World!');
  }
};

exports.handler = function (event, context, callback) {
  var alexa = Alexa.handler(event, context, callback);
  alexa.registerHandlers(handlers);
  alexa.execute();
};
