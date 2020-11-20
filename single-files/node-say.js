const say = require('say')
say.speak('Hello');

//say.speak("What's up, dog?", 'Alex', 0.5)

say.speak("What's up, dog?", 'Good News', 1.0, (err) => {
    console.log('finished');
})

// Export spoken audio to a WAV file
say.export("I'm sorry, Dave.", 'hal.wav', (err) => {
    if (err) {
      return console.error(err)
    }
   
    console.log('Text has been saved to hal.wav.')
})