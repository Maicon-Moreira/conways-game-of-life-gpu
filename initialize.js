function initialize() {
  clean()

  for (let i = 0; i < numRandom; i++) {
    const x = randomInt(...randomRange[0])
    const y = randomInt(...randomRange[1])

    data[x][y] = 1
  }

  simulateFunction()
}