function popup(str = "") {

  const overlay = document.createElement("div");
  overlay.style.cssText = `
    position:fixed; inset:0; background:rgba(0,0,0,0.5);
    display:flex; align-items:center; justify-content:center; z-index:9999;
  `;

  const popup = document.createElement("div");
  popup.style.cssText = `
    background:white; padding:50px; border-radius:10px; 
    box-shadow:0 0 20px rgba(0,0,0,0.3); text-align:center; 
    max-width:300px; font-family:sans-serif;
  `;
  popup.innerHTML = `
    <p>${str}</p>
    <div style="display:block; height:10px"></div>
    <a href="https://536uriel.github.io/rpg-maker-v2/" style="text-decoration:none;
    background:rgba(251, 177, 143, 1);color:purple; 
    border:none;padding:12px 18px; border-radius:6px; 
    cursor:pointer;">${str}</a>
  `;

  overlay.appendChild(popup);
  document.body.appendChild(overlay);

  popup.querySelector("a").onclick = () => overlay.remove();
  overlay.onclick = e => { if (e.target === overlay) overlay.remove(); };

};

popup("לחצו כאן לאתר יצירת עולם משחק")

var div_show_mouse = document.getElementById("show-mouse-pos");
div_show_mouse.style.display = "inline-block"
div_show_mouse.style.fontSize = "1.2rem"
div_show_mouse.style.marginLeft = "20px"
div_show_mouse.style.color = "rgb(96, 117, 156)"

var callback = () => { };

function setup() {

  let canvas = createCanvas((cwidth / 2) - 50, 400);
  canvas.parent("output-canvas");

  let divtxt = document.getElementById("canvas-size-text");
  divtxt.style.display = "inline-block"
  divtxt.style.fontSize = "1.5rem"
  divtxt.style.marginLeft = "30px"
  divtxt.style.color = "rgb(96, 117, 156)"
  divtxt.innerText = "size " + canvas.width + " X " + canvas.height;

  try {
    רקע = background;
    צבע = fill;

    עיגול = circle;
    ריבוע = rect;

  } catch (err) {
    console.log(err);
  }

}

function draw() {
  background(225);
  div_show_mouse.innerText = "mouseX " + Math.round(mouseX) + "  mouseY " + Math.round(mouseY);
  callback();
}



editor1.setSize((cwidth / 2) - 30, 120);
editor2.setSize((cwidth / 2) - 30, 200);




var commands = [
  "background(225)",
  "fill(0, 0, 225)",
  "circle(x, y, r)",
  `c = createCircle(x=200, y=200,r=50, color='blue', direction=-90, speed=5)
c.draw()`,
  "rect(x, y, w, h)",
  "line(x1, y1, x2, y2)",
  "random()",
  "mouseX",
  "mouseY",
  "רקע(225)",
  "צבע(100,200,100)",
  "עיגול(100, 100, 100)",
  "ריבוע(100,100,100,100)",
  "cwidth",
  "cheight",
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


var alist = document.getElementById("commends-drop-down");

commands.forEach(command => {
  let a = document.createElement("a");

  a.innerText = command;
  a.id = "commends-drop-a"

  a.addEventListener("click", () => {
    editor2.setValue(editor2.getValue() + "\n" + command);
  })

  alist.appendChild(a);
});


function cleanCode() {
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


