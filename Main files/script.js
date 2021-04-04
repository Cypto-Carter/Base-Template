//Variables and such
var WIDTH = innerWidth;
var HEIGHT = innerHeight;

const canvas = document.createElement("canvas");
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.tabindex = 0;
canvas.id = "Canvas";

const ctx = canvas.getContext("2d");
ctx.font = "50px 'Josefin Sans', sans-serif";
document.body.appendChild(canvas);

//check for resize
window.addEventListener('resize', function (event) {
    // console.log(event);
    WIDTH = innerWidth;
    HEIGHT = innerHeight;
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
});

//mouse X and Y variables
window.addEventListener('mousemove', function (event) {
    var mouseY = event.clientY;
    var mouseX = event.clientY;
//Change position of objects and such here

});

function run() {
    requestAnimationFrame(run);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //Looping happens here

}
run();