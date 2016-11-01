const socket = io();

let count = 0;

const quotes = [
  { name: 'Jim', location: 'Kings Cross', message: '"This will be something someone says"' },
  { name: 'Fred', location: 'Oxford Circus', message: '"Another thing will be said here"' },
  { name: 'Lucy', location: 'Archway', message: '"Something different will be said in this space here"' },
  { name: 'Tracy', location: 'Brixton', message: '"A different thing will be said by someone here"' },
  { name: 'Nick', location: 'Hackney', message: '"Here is another thing someone said"' }
]

function newQuote() {
  count++;
  const i = count === quotes.length ? count = 0 : count;
  document.getElementsByClassName('message')[0].innerHTML = quotes[i].message;
  document.getElementsByClassName('name')[0].innerHTML =  quotes[i].name;
  document.getElementsByClassName('location')[0].innerHTML =  quotes[i].location;
}

function hide() {
  document.getElementsByClassName('wrap')[0].classList.remove('active');
}

function show(val) {
  console.log(val)
  newQuote();
  document.getElementsByClassName('wrap')[0].classList.add('active');
  setTimeout(hide, 5000);
}

socket.on('sensor', val => show(val));
newQuote();
