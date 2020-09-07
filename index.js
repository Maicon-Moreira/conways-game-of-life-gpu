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
  hudLogic()

  mouseDraw()

  // drawSimulation()

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