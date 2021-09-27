const readline = require('readline');
const logUpdate = require('log-update')
// https://www.lennyfaceguru.com/bear.html
// https://github.com/DuncanMcArdle/tamagotchi-cli

function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

function generateSpace() {
  return new Array(between(2, 10)).fill(' ').join('');
}

const bear = [
  'ʕ•ᴥ•ʔ',
  'ʕ·ᴥ·ʔ',
  'ʕºᴥºʔ'
];


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.emitKeypressEvents(process.stdin, rl);
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}

rl.on('close', () => {
  process.exit(0)
})

process.stdin.on('keypress', (letter, key) => {
  // console.log(letter, key)
})

setInterval(() => {
  logUpdate(generateSpace() + bear[Math.floor(Math.random() * bear.length)] + generateSpace())
}, 1000)
