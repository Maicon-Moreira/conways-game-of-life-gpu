const gpu = new GPU()

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