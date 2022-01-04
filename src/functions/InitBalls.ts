import { Ball } from "../classes/Ball";
import { Canvas } from "../classes/Canvas";

export function InitBalls(canvas: Canvas) {
  const ctx = canvas.getCtx();

  const randNum: number = Math.floor(Math.random() * 11) + 10;

  const balls: Ball[] = [];

  for (let i = 0; i < randNum; i++) {
    balls.push(new Ball(canvas));
  }

  function update() {
    ctx.clearRect(0, 0, 1000, 500);
    for (let i = 0; i < balls.length; i++) {
      balls[i].animate();
      for (let j = i + 1; j < balls.length; j++) {
        balls[i].checkIfBumpedTo(balls[j]);
      }
    }
    requestAnimationFrame(update);
  }

  update();
}
