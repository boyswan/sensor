const Particle = require('particle-api-js');
const particle = new Particle();

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const AUTH_TOKEN = '7f2a87cddc0513ff9ad69834640087d0e2c787c1';
const DEVICE_ID = '2f001e000947353138383138';

// const Device = particle.getDevice({ deviceId: DEVICE_ID, auth: AUTH_TOKEN });
// Device.then(data => console.log(data).catch(err => console.log(err));

// const getData = () =>
//   particle.getVariable({ deviceId: DEVICE_ID, name: 'numb', auth: AUTH_TOKEN })
//     .then(data => (console.log(data.body.result), io.emit('sensor', data.body.result)))
//     .catch(err => console.log(err));
//
//
// setInterval(getData, 500);

particle.getEventStream({ auth: AUTH_TOKEN, name: 'egg' })
  .then(stream => stream.on('event', data => console.log("Event: " + JSON.stringify(data))));

app.get('/', (req, res) =>
  res.sendFile(__dirname + '/index.html'));


http.listen(9000, () => console.log('listening on *:3000'));



var dgram = require('dgram');
var udpServer = dgram.createSocket('udp4');

function processMonitorMsg(message) {
  console.log(message)
	// Your logic here to process the udp message
}

udpServer.on('error', (err) => {
  console.log(`udpServer error:\n${err.stack}`);
  udpServer.close();
});

udpServer.on('message', (msg, rinfo) => {
  console.log(`udpServer got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

udpServer.on('listening', () => {
  var address = udpServer.address();
  console.log(`server listening ${address.address}:${address.port}`);
});


udpServer.bind(6666);
