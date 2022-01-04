import { Canvas } from "./Canvas";

export class Ball {
  private r: number;
  private x: number;
  private y: number;
  private dx: number;
  private dy: number;
  private ctx: CanvasRenderingContext2D;

  constructor(canvas: Canvas) {
    this.r = Math.random() * 5 + 5;
    this.x = this.r + Math.random() * (1000 - 2 * this.r);
    this.y = this.r + Math.random() * (500 - 2 * this.r);
    this.dx = Math.random() * (10 / 3) * (Math.random() < 0.5 ? -1 : 1);
    this.dy =
      (Math.sqrt(100 / 9 - Math.pow(this.dx, 2)) +
        Math.random() *
          (Math.sqrt(400 / 9 - Math.pow(this.dx, 2)) -
            Math.sqrt(100 / 9 - Math.pow(this.dx, 2)))) *
      (Math.random() < 0.5 ? -1 : 1);
    this.ctx = canvas.getCtx();
  }

  draw() {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  }

  animate() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.r > 1000 || this.x - this.r < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.r > 500 || this.y - this.r < 0) {
      this.dy = -this.dy;
    }

    this.draw();
  }

  checkIfBumpedTo(ball: Ball) {
    if (
      Math.sqrt(Math.pow(this.x - ball.x, 2) + Math.pow(this.y - ball.y, 2)) <=
      this.r + ball.r
    ) {
      if ((this.dx > 0 && ball.dx < 0) || (this.dx < 0 && ball.dx > 0)) {
        this.dx = -this.dx;
        ball.dx = -ball.dx;
      }
      if ((this.dy > 0 && ball.dy < 0) || (this.dy < 0 && ball.dy > 0)) {
        this.dy = -this.dy;
        ball.dy = -ball.dy;
      }
    }
  }
}
