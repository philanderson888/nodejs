  // If you want raw access to the player (via stdin)

  // require and stuff happened here
  var play = require('play').Play();
  var player = false;

  // Force it to use mplayer (can be anything else)
  play.usePlayer('mplayer');
  play.on('play', function () {
    player = play.player;
  });

  play.sound('./mp3-sample-sound.mp3');

//var player = require('play-sound')(opts={})
//player.play('mp3-sample-sound.mp3', function(err){
  //  if (err) throw err
  //})