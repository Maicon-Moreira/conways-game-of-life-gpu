function drawSimulation() {
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