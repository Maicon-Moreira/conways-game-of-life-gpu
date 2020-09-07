function clean() {
  for (let x = 0; x < gridSize; x++) {
    data[x] = []
    for (let y = 0; y < gridSize; y++) {
      data[x][y] = 0
    }
  }
}