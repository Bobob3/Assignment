const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require("body-parser");
const http = require('http').Server(app);
const io = require('socket.io')(http);
const sockets = require('./socket.js');
const server = require('./listen.js');

const PORT = 3000;


app.use(cors());
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../dist/Week4/'));
sockets.connect(io, PORT);

server.listen(http,PORT);
require('./routes/api-login.js')(app,path);




