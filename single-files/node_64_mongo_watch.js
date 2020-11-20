MongoWatch = require ('mongo-watch');
console.log('Watching Mongo DB for changes');
watcher = new MongoWatch({useMasterOplog:true});
watcher.watch('test.mytable', function(event){
  console.log('Database changed ' + event);
});