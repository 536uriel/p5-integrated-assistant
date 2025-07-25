/*
credit for some of this code examples
are given toDaniel Shiffman who 
who created this idea and i took 
some of it and changed it a little

Daniel Shiffman
http://codingtra.in
https://youtu.be/CKeyIbT3vXI
*/


function addExampleAngryBird() {
    const exampleCode = `

background(112, 50, 126);
strokeWeight(4);
stroke(255);
if(!rleased){
line(anchor.x, anchor.y, bob.x, bob.y);
}
fill(45, 197, 244);
circle(anchor.x, anchor.y, 32);
circle(bob.x, bob.y, 64);
textSize(20);
text("total-score  " + score + "   score  " + currentScore,50,50);

if (mouseIsPressed) {
rleased = false;
bob.x = mouseX;
bob.y = mouseY;
velocity.set(0, 0);
}

if(!rleased){
gravity.set(0, 0.01)
force = p5.Vector.sub(bob, anchor);
let x = force.mag() - restLength;
force.mult(-1 * k * x);
countScore = true;
}else{
if(gravity.y < 2){
    gravity.y += 0.025;
    }
}




velocity.mult(1,0.98)
force.normalize();
velocity.add(force);
velocity.add(gravity)
bob.add(velocity);

if(overlap_circle_rect(bob.x, bob.y, bob.r, rct.v.x, rct.v.y, rct.w, rct.h)){

rct.v.add(force.x * 5, force.y * 5);
    
d = rct.v.x - d;
d *= 10
if(countScore){
    currentScore = d > 47? 2 : 1;
    score += currentScore;
    countScore = false;
    
        if(currentScore > 1){
        fire = new Firework(bob.x,bob.y);
        fire.explode()
        }

    }

}


rect(rct.v.x,rct.v.y,rct.w,rct.h);

fire.update();
fire.show();

    `;



    editor1.setValue(`

bob = null;
anchor = null;
velocity = null;
restLength = 150;
k = 0.01;
gravity = null;
force = null;
rleased = false;
d = 0;
score = 0;
currentScore = 0;
countScore = true;
fire = null;
gf = null;



bob = createVector(100, 100);
bob.r = 64;
anchor = createVector(150, 100);
velocity = createVector(0, 0);
gravity = createVector(0, 0.03);
rct = {w:30,h:350}
rct.v = createVector(350, 50);
gf = createVector(0, 0.2);
fire = new Firework(10,10);



mouseReleased = function mouseReleased() {
  rleased = true;
}


        `)
    editor2.setValue(exampleCode);
}



function addCode1() {

    const exampleCode1 = `
background("rgb(180, 170, 226)");
strokeWeight(4);
stroke(255);
fill(0, 0, 225)
circle(mouseX, mouseY, 70)

fill(225, 0, 0)
circle(x, y, r)
y -= 10

if(y < 0){
  x = mouseX
  y = mouseY
  
}

`
    editor1.setValue(`
x = 0
y = 0
r = 40


ec1 = 0;
ec2 = 225;
ec3 = 0;


        `)
    editor2.setValue(exampleCode1);

}

function addCode2() {
    const exampleCode2 = `


fill(ec1,ec2,ec3);
circle(x2, y2, r2)

y2 += 3

if(y2 > 400){
  y2 = 0
  x2 = random(50,350)
}


fill(0, 225, 0)
circle(x3, y3, r3)

y3 += 8

if(y3 > 400){
  x3 = x2
  y3 = y2
}

    `

    editor1.setValue(editor1.getValue() + "\n" + `
x2 = 100
y2 = 50
r2 = 70

x3 = x2
y3 = y2
r3 = 30
    `);

    editor2.setValue(editor2.getValue() + "\n" + exampleCode2)
}

function addCode3() {

    const exampleCode3 = `
textSize(30)
text("life " + life, 50,100)
text("score " + score, 250,100)

if(overlap_circles(mouseX, mouseY, 70, x3, y3, r3)){
    x3 = x2
    y3 = y2 

    life -= 1;

}

if(overlap_circles(x, y, r, x2, y2, r2)){
    x2 = random(50,350)    
    y2 = 0

    x = mouseX
    y = mouseY

    score += 1;

    ec1 = random(0,300);
    ec2 = random(0,300);
    ec3 = random(0,300);


}

    
`

    editor1.setValue(editor1.getValue() + "\n" + "life = 5\nscore = 0");
    editor2.setValue(editor2.getValue() + "\n" + exampleCode3);
}
