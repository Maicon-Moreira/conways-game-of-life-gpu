const ws = innerHeight
const gridSize = 300
const quadSize = ws / gridSize
const numRandom = (100 ** 2) * 100
const liveRules = [0, 0, 1, 1, 0, 0, 0, 0, 0]
const deadRules = [0, 0, 0, 1, 0, 0, 0, 0, 0]



let randomRange = [ // 45 legal 40 legal 29 legal 53 legal
  [gridSize / 2 - 53, gridSize / 2 + 53],
  [gridSize / 2 - 53, gridSize / 2 + 53]
]
let data = []
let paused = false

let velocity
let drawRadius
let simetry



function setup() {
  createCanvas(ws, ws)
  noStroke()
  // fix bug
  document.querySelector('main').style.height = ws + 'px'

  document.getElementById('pause').onclick = () => paused = !paused
  document.getElementById('clean').onclick = () => clean()

  initialize()
}

function draw() {
  // HUD
  velocity = document.getElementById('velocity').value
  document.querySelector('.velocity p').innerText = `Velocidade da simulação: ${velocity}`

  drawRadius = document.getElementById('draw-radius').value
  document.querySelector('.draw-radius p').innerText = `Raio de desenho: ${drawRadius}`

  simetrysus = document.getElementById('draw-type').value

  // draw with mouse
  if (mouseIsPressed) {
    const mouseXPos = Math.floor(mouseX / quadSize)
    const mouseYPos = Math.floor(mouseY / quadSize)

    if (
      mouseXPos > 0 &&
      mouseXPos < gridSize &&
      mouseYPos > 0 &&
      mouseYPos < gridSize
    )

      for (let x = -drawRadius; x <= drawRadius; x++) {
        for (let y = -drawRadius; y <= drawRadius; y++) {
          if (dist(x, y, 0, 0) < drawRadius) {
            if (
              mouseXPos + x > 0 &&
              mouseXPos + x < gridSize &&
              mouseYPos + y > 0 &&
              mouseYPos + y < gridSize
            )
              data[mouseXPos + x][mouseYPos + y] = 1
          }
        }
      }
  }

  // draw simulation
  fill(0)
  rect(0, 0, ws, ws)

  fill(255)
  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      if (data[x][y] == 1) {
        rect(x * quadSize, y * quadSize, quadSize, quadSize)
      }
    }
  }
}

function randomInt(a, b = 0) {
  return Math.floor(a + (b - a) * Math.random())
}

function initialize() {
  clean()

  for (let i = 0; i < numRandom; i++) {
    const x = randomInt(...randomRange[0])
    const y = randomInt(...randomRange[1])

    data[x][y] = 1
  }



  simulateFunction()
}

function simulateFunction() {
  if (!paused)
    data = simulate(data, gridSize, liveRules, deadRules)

  setTimeout(simulateFunction, 1000 / velocity)
}

function clean() {
  for (let x = 0; x < gridSize; x++) {
    data[x] = []
    for (let y = 0; y < gridSize; y++) {
      data[x][y] = 0
    }
  }
}