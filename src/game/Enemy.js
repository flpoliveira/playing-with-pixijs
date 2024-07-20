import { Graphics } from "pixi.js";
class Enemy {
  constructor(radius, color, speed) {
    this.id = `${Math.random()}`;
    this.radius = radius;
    this.color = color;
    this.speed = speed;
    this.v = {
      x: speed + Math.random(),
      y: speed + Math.random(),
    };

    // Create a new Graphics object
    const graphics = new Graphics();
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    graphics.circle(this.x, this.y, radius);
    graphics.fill(color);

    graphics.interactive = true;

    this.circle = graphics;
  }

  update() {
    let w = window.innerWidth;
    let h = window.innerHeight;

    this.circle.x += this.v.x;
    this.circle.y += this.v.y;

    this.x += this.v.x;
    this.y += this.v.y;

    if (this.x >= w - this.radius || this.x <= 0) this.v.x *= -1;

    if (this.y >= h - this.radius || this.y <= 0) this.v.y *= -1;
  }

  destroy() {
    this.circle.destroy();
    this.circle = null;
  }
}

export { Enemy };
