import { Graphics } from "pixi.js";
class Enemy {
  constructor(radius, color, speed) {
    this.radius = radius;
    this.color = color;
    this.speed = speed;
    this.v = {
      x: speed + Math.random(),
      y: speed + Math.random(),
    };

    // Create a new Graphics object
    const graphics = new Graphics();
    graphics.circle(radius, radius, radius);
    graphics.fill(color);
    this.circle = graphics;
  }

  update() {
    // Calculate new position with random movement
    // const dx = (Math.random() - 0.5) * this.speed * 10;
    // const dy = (Math.random() - 0.5) * this.speed * 10;

    // let newPosX = this.circle.x + dx;
    // let newPosY = this.circle.y + dy;
    // console.log("dx", dx, "dy", dy);

    // console.log("this.circle.x", this.circle.x, "this.circle.y", this.circle.y);

    // // // Boundary checks
    let w = window.innerWidth;
    let h = window.innerHeight;
    // console.log("w", w, "h", h);

    // // // Ensure circle stays within bounds
    // if (newPosX + this.radius >= w) {
    //   newPosX = this.circle.x - dx;
    // }
    // if (newPosX - this.radius <= 0) {
    //   newPosX = this.circle.x + dx;
    // }
    // if (newPosY + this.radius >= h) {
    //   newPosY = this.circle.y - dy;
    // }
    // if (newPosY - this.radius <= 0) {
    //   newPosY = this.circle.y + dy;
    // }
    // console.log("newPosX", newPosX, "newPosY", newPosY);

    // this.circle.x = newPosX;
    // this.circle.y = newPosY;

    this.circle.x += this.v.x;
    this.circle.y += this.v.y;

    if (this.circle.x >= w - this.radius || this.circle.x <= 0) this.v.x *= -1;

    if (this.circle.y >= h - this.radius || this.circle.y <= 0) this.v.y *= -1;
  }
}

export { Enemy };
