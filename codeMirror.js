//for p5 canvas

var body = document.body,
    html = document.documentElement;

var cwidth = Math.max(body.scrollWidth, body.offsetWidth,
    html.clientWidth, html.scrollWidth, html.offsetWidth);

var cheight = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);

var callback = () => { };

function overlap_circles(x1, y1, r1, x2, y2, r2){
  let top1 = y1 - r1/2
  let buttom1 = y1 + r1/2
  let left1 = x1 - r1/2
  let right1 = x1 + r1/2
  
  let top2 = y2 - r2/2
  let buttom2 = y2 + r2/2
  let left2 = x2 - r2/2
  let right2 = x2 + r2/2
  
  return buttom1 > top2
    && top1 < buttom2
    && right1 > left2
    && left1 < right2
  
}

function setup() {

    let canvas = createCanvas(400, 400);
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

function addCode1() {

    const exampleCode1 = `
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
        `)
    editor2.setValue(exampleCode1);

}

function addCode2() {
    const exampleCode2 = `
    
fill('purple')
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

function addCode3(){

    const exampleCode3 = `
textSize(30)
text("life " + life, 50,100)
text("score " + score, 250,100)

if(overlap_circles(mouseX, mouseY, 70, x3, y3, r3)){
    x3 = x2
    y3 = y2 

    life -= 1
}

if(overlap_circles(x, y, r, x2, y2, r2)){
    x2 = random(50,350)    
    y2 = 0

    x = mouseX
    y = mouseY

    score += 1
}`

     editor1.setValue(editor1.getValue() + "\n" + "life = 5\nscore = 0")
     editor2.setValue(editor2.getValue() + "\n" + exampleCode3)
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
