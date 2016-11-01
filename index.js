const Particle = require('particle-api-js');
const particle = new Particle();

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const AUTH_TOKEN = '7f2a87cddc0513ff9ad69834640087d0e2c787c1';
const DEVICE_ID = '2f001e000947353138383138';

const Device = particle.getDevice({ deviceId: DEVICE_ID, auth: AUTH_TOKEN });
// Device.then(data => console.log(data).catch(err => console.log(err));


let hold = 0;

const getData = () =>
  particle.getVariable({ deviceId: DEVICE_ID, name: 'numb', auth: AUTH_TOKEN })
    .then(data => (console.log(data.body.result), io.emit('send data', data.body.result)))
    .catch(err => console.log(err));


setInterval(getData, 500);


//Get all events
particle.getEventStream({ auth: AUTH_TOKEN, name: 'egg' }).then(function(stream) {
  stream.on('event', function(data) {
    console.log("Event: " + JSON.stringify(data.data));
  });
});

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));


// io.on('connection', socket => {
//     io.emit('send data', data);
// });

http.listen(9000, () => console.log('listening on *:3000'));
