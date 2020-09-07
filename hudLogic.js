function hudLogic(){
  velocity = document.getElementById('velocity').value
  document.querySelector('.velocity p').innerText = `Velocidade da simulação: ${velocity}`

  drawRadius = document.getElementById('draw-radius').value
  document.querySelector('.draw-radius p').innerText = `Raio de desenho: ${drawRadius}`

  simetry = document.getElementById('draw-type').value
}