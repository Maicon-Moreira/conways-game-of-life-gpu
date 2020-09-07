function setup() {
  createCanvas(ws, ws)
  noStroke()

  fixScreenSizeBug()

  initialize()
}

function draw() {
  hudLogic()

  mouseDraw()

  drawSimulation()
}