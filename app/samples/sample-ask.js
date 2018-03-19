// Sample Ask Output

// Using Response
this.emit(':ask', 'What would you like to do?', 'Please say that again?');

// Using Response Builder
this.response.speak('What would you like to do?')
            .listen('Please say that again?');
this.emit(':responseReady');

