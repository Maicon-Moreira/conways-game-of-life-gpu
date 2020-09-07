function mouseDraw() {

  if (mouseIsPressed) {
    const mouseXPos = Math.floor(mouseX / quadSize)
    const mouseYPos = Math.floor(mouseY / quadSize)

    if (
      mouseXPos > 0 &&
      mouseXPos < gridSize &&
      mouseYPos > 0 &&
      mouseYPos < gridSize
    ) {

      for (let x = -drawRadius; x <= drawRadius; x++) {
        for (let y = -drawRadius; y <= drawRadius; y++) {
          if (dist(x, y, 0, 0) < drawRadius) {
            if (
              mouseXPos + x > 0 &&
              mouseXPos + x < gridSize &&
              mouseYPos + y > 0 &&
              mouseYPos + y < gridSize
            )
              data[mouseXPos + x][mouseYPos + y] = 1
          }
        }
      }
    }
  }
}