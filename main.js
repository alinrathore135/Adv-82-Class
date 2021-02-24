canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    //Addictonal Activity start
    color = document.getElementById("color").value;
    width_of_line  = document.getElementById("width_of_line").value;
    //Addictonal Activity ends 

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent  = "mouseleave";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent  = "mouseUp";
}

canvas.addEventListener("mousemove", my_mousemove
function my_mousemove(e)
{
    current_position_of_the_mouse_x = e.clientX - canvas.offestLeft;
    current_position_of_the_mouse_y = e.clientY - canvas.offestTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x =" + last_position_of_x + "y =" +  last_position_of_y);
        ctx.moveto(last_position_of_x, last_position_of_y);

        console.log("Last position of x and y coordinates = ");
        console.log("x =" + last_position_of_x + "y =" +  last_position_of_y);
        ctx.moveto(last_position_of_x, last_position_of_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_the_mouse_x;
    last_position_of_y = current_position_of_the_mouse_y;
}

if(width < 992)
{
    document.getElementById("mycanvas").width = new_width;
    document.getElementById("mycanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

function my_touchstart(e)
{
    console.log("my_touchstart");

    last_position_of_x = e.touches[0].clientX - canvas.offestLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offestTop;
}