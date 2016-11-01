const socket = io();
const particle = new Particle();
const AUTH_TOKEN = '7f2a87cddc0513ff9ad69834640087d0e2c787c1';
const DEVICE_ID = '2f001e000947353138383138';
const sensor = { deviceId: DEVICE_ID, name: 'sensor', auth: AUTH_TOKEN };

const quotes = [
  { name: 'Jim', location: 'Kings Cross', message: 'This will be something someone says' },
  { name: 'Fred', location: 'Oxford Circus', message: 'Another thing will be said here' },
  { name: 'Julia', location: 'Archway', message: 'Something different will be said in this space here' },
  { name: 'Tracy', location: 'Brixton', message: 'A different thing will be said by someone here' },
  { name: 'Nick', location: 'Hackney', message: 'Here is another thing someone said' }
]

function newQuote() {
  const i = Math.floor(Math.random() * quotes.length) + 0;
  document.getElementsByClassName('message')[0].innerHTML = quotes[i].message;
  document.getElementsByClassName('name')[0].innerHTML =  quotes[i].name;
  document.getElementsByClassName('location')[0].innerHTML =  quotes[i].location;
}

function hide() {
  document.getElementsByClassName('wrap')[0].classList.remove('active');
  newQuote();
}

function show() {
  document.getElementsByClassName('wrap')[0].classList.add('active');
  setTimeout(hide, 5000);
}

// function getData() {
//   particle.getVariable(sensor)
//     .then(data => (console.log(data), show()))
//     .catch(err => console.log(err));
// }

socket.on('sensor', msg => {
  console.log(msg)
  show()
});

newQuote();
// setInterval(getData, 100);
