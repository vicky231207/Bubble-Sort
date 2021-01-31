let values = [];

window.onload = ()=>{
    canv = document.getElementById("gc");
    ctx = canv.getContext("2d");
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    setInterval(draw, 1000/60);
    for(let i = 0; i < canv.width; i++){
        values.push(Math.random()*canv.height);
    }
    angleA = Math.random() * 360,                                // start angle (for HSL)
    angleB = Math.random() * 360,
    stepA = 1.2, stepB = 0.7;  
}

function createGradient() {
    var gr = ctx.createLinearGradient(0, 0, 500, 0);               // create gradient
    gr.addColorStop(0, "hsl(" + (angleA % 360) + ",100%, 50%)");   // start color
    gr.addColorStop(1, "hsl(" + (angleB % 360) + ",100%, 50%)");   // end color
    ctx.fillStyle = gr;                                             // fill area
}

function draw(){
    ctx.fillStyle = "rgb(65, 65, 65)";
    ctx.fillRect(0,0,canv.width, canv.height);
    createGradient();
    angleA += stepA;                                               // increase angles
    angleB += stepB;
    for(let j = 0; j < canv.width; j++){
        ctx.fillRect(j,0,1,values[j]);
    }
    for(let k = 0; k < canv.width;k++){
        if(values[k] > values[k+1]){
            let temp = values[k];
            values[k] = values[k+1];
            values[k+1] = temp;
        }
    }
}

