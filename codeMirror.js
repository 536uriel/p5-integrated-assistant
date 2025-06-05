//for p5 canvas
var body = document.body,
    html = document.documentElement;

var cwidth = Math.max(body.scrollWidth, body.offsetWidth,
    html.clientWidth, html.scrollWidth, html.offsetWidth);

var cheight = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);

var callback = () => { };




// Daniel Shiffman
// http://codingtra.in
// https://youtu.be/CKeyIbT3vXI




class Firework {
  constructor(x, y) {
    this.hu = random(255);
    this.firework = new Particle(x, y, this.hu, true);
    this.exploded = false;
    this.particles = [];
  }

  done() {
    if (this.exploded && this.particles.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  update() {
    if (!this.exploded) {
      this.firework.applyForce(gf);
      this.firework.update();

      if (this.firework.vel.y >= 0) {
        this.exploded = true;
        this.explode();
      }
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gf);
      this.particles[i].update();

      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
    }
  }

  explode() {
    for (let i = 0; i < 100; i++) {
      const p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false);
      this.particles.push(p);
    }
  }

  show() {
    if (!this.exploded) {
      this.firework.show();
    }

    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  }
}



// Daniel Shiffman
// http://codingtra.in
// https://youtu.be/CKeyIbT3vXI

class Particle {
  constructor(x, y, hu, firework) {
    this.pos = createVector(x, y);
    this.firework = firework;
    this.lifespan = 255;
    this.hu = hu;
    this.acc = createVector(0, 0);
    if (this.firework) {
      this.vel = createVector(0, random(-12, -8));
    } else {
      this.vel = p5.Vector.random2D();
      this.vel.mult(random(2, 10));
    }
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    if (!this.firework) {
      this.vel.mult(0.9);
      this.lifespan -= 4;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  done() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }

  show() {


    if (!this.firework) {
      strokeWeight(2);
      stroke(this.hu, 255, 255, this.lifespan);
    } else {
      strokeWeight(4);
      stroke(this.hu, 255, 255);
    }

    point(this.pos.x, this.pos.y);
  }
}






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

function setup() {

    let canvas = createCanvas(500, 400);
    canvas.parent("output-canvas");

}

function draw() {
    background(225);
    callback();
}


// Initialize CodeMirror

//editor for the precode 
var editor1 = CodeMirror.fromTextArea(document.getElementById("editor1"), {
    mode: "javascript",  // Syntax highlighting mode
    lineNumbers: true,   // Show line numbers
    theme: "default"
});

//editor for the draw function
var editor2 = CodeMirror.fromTextArea(document.getElementById("editor2"), {
    mode: "javascript",  // Syntax highlighting mode
    lineNumbers: true,   // Show line numbers
    theme: "default"

});



editor1.setSize(cwidth / 2, 120);
editor2.setSize(cwidth / 2, 200);





var commands = [
    "background(225)",
    "fill(0, 0, 225)",
    "circle(x, y, r)",
    "rect(x, y, w, h)",
    "line(x1, y1, x2, y2)",
    "random()",
    "mouseX",
    "mouseY",
    "triangle(x1, y1, x2, y2, x3, y3)",
    "keyIsPressed",
    "key",
    `if(){  
    

}else{ 


}`,
    `function name(){
}`,
    "overlap_circles(x1, y1, r1, x2, y2, r2)"
]

var clist = document.getElementById("commands");

commands.forEach(command => {
    let li = document.createElement("li");

    li.innerText = command;

    li.addEventListener("click", () => {
        editor2.setValue(editor2.getValue() + "\n" + command);
    })

    clist.appendChild(li)
});

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



function cleanCode(){
    editor1.setValue("");
    editor2.setValue("");
}



// Function to execute code as online console
function runCode() {
    try {
        // Get the code from CodeMirror
        var preCode = editor1.getValue();
        var code = editor2.getValue();

        // Redirect console.log to display in the output div
        var outputDiv = document.getElementById("output");
        outputDiv.innerHTML = ''; // Clear previous output

        var originalConsoleLog = console.log;
        console.log = function (message) {
            outputDiv.innerHTML += message + '<br>';
            originalConsoleLog.apply(console, arguments);
        };


        //for the output div 
        new Function(preCode)();
        new Function(code)();

        // Run the JavaScript code dinamicly 
        /*
        new Function(code)();
        is equelevant to: 
        function(){
            console.log("code")
        }
        */
        callback = () => {
            //for execute p5 code
            new Function(code)();
        }



        // Restore original console.log
        console.log = originalConsoleLog;
    } catch (error) {
        document.getElementById("output").innerHTML = "Error: " + error.message;
    }
}
