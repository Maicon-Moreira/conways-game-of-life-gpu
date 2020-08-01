const ws = innerHeight
const gridSize = 350
const quadSize = ws / gridSize
const gpu = new GPU()
const numRandom = (100 ** 2) * 100
const liveRules = [0, 0, 1, 1, 0, 0, 0, 0, 0]
const deadRules = [0, 0, 0, 1, 0, 0, 0, 0, 0]
const randomRange = [ // 45 legal 40 legal 29 legal 53 legal
  [gridSize / 2 - 53, gridSize / 2 + 53],
  [gridSize / 2 - 53, gridSize / 2 + 53]
]
let initialArray = []
let data = []


function setup() {
  createCanvas(ws, ws)
  noStroke()
  // frameRate(1)

  for (let x = 0; x < gridSize; x++) {
    initialArray[x] = []
    for (let y = 0; y < gridSize; y++) {
      initialArray[x][y] = 0
    }
  }
  console.log('base data generated')

  for (let i = 0; i < numRandom; i++) {
    const x = randomInt(...randomRange[0])
    const y = randomInt(...randomRange[1])

    initialArray[x][y] = 1
  }
  console.log('random points generated')

  data = JSON.parse(JSON.stringify(initialArray))
}

function draw() {
  background(0)

  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      if (data[x][y] == 1) {
        rect(x * quadSize, y * quadSize, quadSize, quadSize)
      }
    }
  }

  data = simulate(data, gridSize, liveRules, deadRules)

  console.log('fps', Math.round(frameRate()))
}

function mousePressed() {
  console.log(JSON.stringify(initialArray))
}

const simulate = gpu.createKernel(function (data, gridSize, liveRules, deadRules) {
  const x = this.thread.y
  const y = this.thread.x

  let neighbors = 0
  for (let deltaX = -1; deltaX <= 1; deltaX++) {
    for (let deltaY = -1; deltaY <= 1; deltaY++) {
      // se nao estiver em cima do proprio quadrado
      if (!(deltaX == 0 && deltaY == 0)) {
        // se as posicoes forem validas
        if (x + deltaX >= 0 && x + deltaX < gridSize && y + deltaY >= 0 && y + deltaY < gridSize) {
          // se for um vizinho vivo
          if (data[x + deltaX][y + deltaY] == 1) {
            neighbors += 1
          }
        }
      }
    }
  }

  let status = data[x][y]
  if (status == 1) {
    return liveRules[neighbors]
  }
  else {
    return deadRules[neighbors]
  }

}).setOutput([gridSize, gridSize])

function randomInt(a, b = 0) {
  return Math.floor(a + (b - a) * Math.random())
}