function simulateFunction() {
  if (!paused)
    data = simulate(data, gridSize, liveRules, deadRules)

  setTimeout(simulateFunction, 1000 / velocity)
}