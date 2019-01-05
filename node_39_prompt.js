var prompt = require('prompt');

  var properties = [
    {
      name: 'username', 
      validator: /^[a-zA-Z0-9\s\-]+$/,
      warning: 'Username must be only letters, spaces, or dashes'
    },
    {
      name: 'password',
      hidden: true
    }
  ];

  prompt.start();

  prompt.get(properties, function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  Username: ' + result.username);
    console.log('  Password: ' + result.password);
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }