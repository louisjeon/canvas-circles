export class Canvas {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = 1000;
    this.canvas.height = 500;
    Object.assign(this.canvas.style, {
      border: "10px solid black",
      margin: "auto",
      position: "relative",
    });
    Object.assign(document.body.style, {
      margin: 0,
      height: "100vh",
      display: "flex",
    });
    document.body.append(this.canvas);
  }

  getCtx() {
    return this.ctx;
  }
}
