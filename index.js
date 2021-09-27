const readline = require('readline')
const logUpdate = require('log-update')
const { between, generateRandomSpace } = require('./utils')

const bear = [
  'ʕ•ᴥ•ʔ',
  'ʕ·ᴥ·ʔ',
  'ʕºᴥºʔ'
];

// Etat
const state = {
  life: 100,
  time: 0, // temps en secondes
  faim: 100,
  creveLaDale: true
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.emitKeypressEvents(process.stdin, rl);
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}

function meurt() {
  state.life = 0
}

process.stdin.on('keypress', (character, key) => {
  if(key.name === 'm') {
    meurt()
    return
  }
})

rl.on('close', () => {
  process.exit(0)
})

function getOurs() {
  if (state.life === 0) {
    return 'tes morts';
  }
  return generateRandomSpace() + bear[Math.floor(Math.random() * bear.length)]
}

function getLifeBar() {
 	const barCompleteChar = '='
  const barIncompleteChar = '-'
  const total = 60
  const plein = (state.life * total) / 100
  const vide = total - plein

  return new Array(Math.floor(plein)).fill(barCompleteChar).join('') + new Array(Math.floor(vide)).fill(barIncompleteChar).join('')
}

setInterval(function() {
  const espace = [
    getOurs(),
    '',
    getLifeBar()
  ]

  logUpdate(espace.join('\n'))
}, 750)

// Boucle d'état
setInterval(function() {
  state.time += 1

  if (state.time % 3 === 0) {
    state.life--
  }

  if (state.time % 60 === 0 && state.faim === false)  {
    state.faim = true
  }

  if (state.faim) {
    state.life--
  }
}, 1000)
