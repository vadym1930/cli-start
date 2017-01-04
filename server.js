const express = require('express'),
  app = express(),
  port = processs.env.PORT || 9001,
  path = require('path');


//configurating app

app.use(express.static(__dirname + '/dist'));

//get route

app.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

//listen app on port
app.listen(port, ()=>{
  console.log(`Listening on port${port}. Don't given up!`);
});


