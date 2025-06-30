
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