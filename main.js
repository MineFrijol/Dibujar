var mouseEvent="empty";
var last_position_of_x, last_position_of_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=1;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouseEvent="mouseDown;"
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;

        console.log("ultima posicion en x & y=");
        console.log("x="+last_position_of_x)+"y="+last_position_of_y;
        ctx.moveTo(last_position_of_x,last_position_of_y);

        console.log("posicion actual en x & y=");
        console.log("x="+current_position_of_mouse_x)+"y="+current_position_of_mouse_y;
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}
canvas.addEventListener("mouseup",my_mouse_up);
function my_mouse_Up(e){
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouse_leave(e){
    mouseEvent="mouseleave";
}