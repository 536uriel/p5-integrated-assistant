
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
  //קבע כיוון התנועה של המעגל
  let d = degrees_to_direction(direction);
  //קבע את המיקום ההתחלתי של המעגל
  let c = createVector(x, y);
  //קבע מהירות התנועה של המעגל
  d.mult(speed);

  //כאן אנו מוסיפים את הכיוון והתנועה בפועל לעיגול
  c.add(d);
  //כאן אנו קובעים את העיגול לפי המשתנים שיצרנו

  c.r = r;
  c.color = color;
  c.direction = direction;
  c.speed = speed;

  c.dir = function (dir = -90) {
    d = degrees_to_direction(dir);
    d.mult(c.speed);
  }


  c.draw = function () {
    c.add(d);
    fill(c.color);
    circle(c.x, c.y, r);
  };

  return c;
}