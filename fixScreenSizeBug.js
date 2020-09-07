function fixScreenSizeBug() {
  document.querySelector('main').style.height = ws + 'px'

  document.getElementById('pause').onclick = () => paused = !paused
  document.getElementById('clean').onclick = () => clean()
}