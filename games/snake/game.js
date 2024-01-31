import { SNAKE_SPEED, draw, update } from './snake.js'

let lastRenderTime = 0

function main(currentTIme) {
  window.requestAnimationFrame(main)
  const secLastRender = (currentTIme - lastRenderTime) / 1000
  if (secLastRender < 1 / SNAKE_SPEED) return
  lastRenderTime = currentTIme
  update()
  draw()
}

window.requestAnimationFrame(main)
