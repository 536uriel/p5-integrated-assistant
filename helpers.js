
function overlap_circle_rect(x1, y1, r1, x2, y2, w, h) {
  let top1 = y1 - r1 / 2
  let buttom1 = y1 + r1 / 2
  let left1 = x1 - r1 / 2
  let right1 = x1 + r1 / 2

  let top2 = y2
  let buttom2 = y2 + h
  let left2 = x2
  let right2 = x2 + w

  return buttom1 > top2
    && top1 < buttom2
    && right1 > left2
    && left1 < right2

}

function overlap_circles(x1, y1, r1, x2, y2, r2) {
  let top1 = y1 - r1 / 2
  let buttom1 = y1 + r1 / 2
  let left1 = x1 - r1 / 2
  let right1 = x1 + r1 / 2

  let top2 = y2 - r2 / 2
  let buttom2 = y2 + r2 / 2
  let left2 = x2 - r2 / 2
  let right2 = x2 + r2 / 2

  return buttom1 > top2
    && top1 < buttom2
    && right1 > left2
    && left1 < right2

}

function degrees_to_direction(deg) {
  const rad = deg / (180 / Math.PI);
  const x = Math.cos(rad);
  const y = Math.sin(rad);
  return createVector(x, y);
}

function createCircle(x = 200, y = 200,
  r = 50, color = "blue", direction = -90, speed = 5) {

  let c = degrees_to_direction(direction);
  c.x = x;
  c.y = y;
  c.r = r;
  c.color = color;
  c.direction = direction;
  c.speed = speed;


  c.draw = function () {
    //קבע כיוון התנועה של המעגל
    let d = degrees_to_direction(this.direction);

    //קבע מהירות התנועה של המעגל
    d.mult(this.speed);

    //כאן אנו מוסיפים את הכיוון והתנועה בפועל לעיגול
    this.add(d);

    fill(this.color);
    circle(this.x, this.y, this.r);
  };

  return c;
}