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