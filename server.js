const express = require('express'),
  app = express(),
  port = process.env.PORT || 9000,
  path = require('path');


//configurating app

app.use(express.static(__dirname + '/dist'));

//get route

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

//listen app on port
app.listen(port);


