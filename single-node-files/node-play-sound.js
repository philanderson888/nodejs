var player = require('play-sound')({player:"mplayer/mplayer.exe"})
player.play('assets/media/mp3-sample-sound.mp3', (err) => {
  if(err) throw err;
  console.log('audio finished')
});