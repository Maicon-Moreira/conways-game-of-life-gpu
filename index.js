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

  drawSimulation()
}