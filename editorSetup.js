// Initialize CodeMirror
//editors for the precode 
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