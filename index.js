const path = require('path')
const net = require('net');
const express = require('express')

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const dataPort = 9000;


const handle = socket => {

	console.log('data connection started from ' + socket.remoteAddress);
	socket.setEncoding('utf8');

	socket.on('data', data => {
    io.emit('sensor', JSON.parse(data).body)
  })

	socket.on('end', () => console.log('data connection ended'));

}

net.createServer(handle).listen(dataPort);

app.use('/public', express.static(path.join(__dirname, '/public')))
app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));
http.listen(8080, () => console.log('listening on 8080'));
